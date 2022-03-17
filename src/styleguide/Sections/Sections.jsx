import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { normalize, schema } from 'normalizr';
import RSGSection from 'react-styleguidist/lib/client/rsg-components/Section/Section';
import ReactComponent from '../ReactComponent/ReactComponent';
import Forside from '../Forside/forside';
import Testside from '../Forside/testside';

/* Normalize recursive content  */
const slugId = { idAttribute: (value) => value.slug };
const component = new schema.Entity('components', undefined, slugId);
const section = new schema.Entity('sections', undefined, slugId);
const components = new schema.Array(component);
const sections = new schema.Array(section);
section.define({ sections, components });
const mySchema = new schema.Entity(
  'sections',
  { sections, components },
  slugId
);

const RenderSection = (props) => {
  const params = useParams();
  let slug = params.slug ? params.slug.toLowerCase() : '';
  const { entities } = normalize(props.sections, [mySchema]);

  if (slug && entities.components && entities.components[slug]) {
    return (
      <ReactComponent
        exampleMode={entities.components[slug].exampleMode || 'collapse'}
        usageMode={entities.components[slug].usageMode || 'collapse'}
        component={entities.components[slug]}
        depth={2}
      />
    );
  }
  if (entities.sections && entities.sections[slug]) {
    return <RSGSection section={entities.sections[slug]} depth={2} />;
  }

  if (slug === 'testside') {
    return <Testside />;
  }

  if (!slug) {
    return <Forside />;
  }
  return <div> Fant ikke siden du leter etter.</div>;
};

export class Sections extends React.Component {
  render() {
    const { sections } = this.props;

    return (
      <Routes>
        <Route path={'/'} element={<RenderSection sections={sections} />} />
        <Route
          path={'/:slug'}
          element={<RenderSection sections={sections} />}
        />
      </Routes>
    );
  }
}

export default Sections;
