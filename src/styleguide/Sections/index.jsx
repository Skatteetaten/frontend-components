import React from 'react';
import { Route, Switch } from 'react-router';
import { normalize, schema } from 'normalizr';
import RSGSection from 'react-styleguidist/lib/client/rsg-components/Section/Section';
import ReactComponent from '../ReactComponent/ReactComponent';
// import RSGReactComponent from 'react-styleguidist/lib/client/rsg-components/ReactComponent/ReactComponent';

/* Normalize recursive content  */
const slugId = { idAttribute: value => value.slug };
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

export class Sections extends React.Component<> {
  renderSection = props => {
    const params = props.match && props.match.params;
    let slug = params && params.slug ? params.slug.toLowerCase() : '';
    const { entities } = normalize(props.sections, [mySchema]);

    if (!slug && entities.sections['section-designe-og-utvikle']) {
      return (
        <RSGSection
          section={entities.sections['section-designe-og-utvikle']}
          depth={2}
        />
      );
    }
    if (slug && entities.components && entities.components[slug]) {
      console.log(props);
      return (
        <ReactComponent
          exampleMode={entities.components[slug].exampleMode || 'collapse'}
          usageMode={entities.components[slug].usageMode || 'collapse'}
          component={entities.components[slug]}
          depth={2}
        />
      );
    }
    if (slug && entities.sections && entities.sections[slug]) {
      return <RSGSection section={entities.sections[slug]} depth={2} />;
    }

    return <div> Feil under lasting av komponent. </div>;
  };

  render() {
    return (
      <Switch>
        <Route
          path={'/:slug?'}
          render={props => this.renderSection({ ...props, ...this.props })}
        />
      </Switch>
    );
  }
}

export default Sections;
