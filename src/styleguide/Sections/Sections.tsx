import React from 'react';
import { Route, Switch } from 'react-router';
import { normalize, schema } from 'normalizr';
// @ts-ignore todo
import RSGSection from 'react-styleguidist/lib/client/rsg-components/Section/Section';
// @ts-ignore todo
import RSGReactComponent from 'react-styleguidist/lib/client/rsg-components/ReactComponent/ReactComponent';

/* Normalize recursive content  */
// @ts-ignore todo
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
const usageMode = 'collapse';

export class Sections extends React.Component<{ sections?: any[] }> {
  // @ts-ignore todo
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
    if (entities.components[slug]) {
      return (
        <RSGReactComponent
          exampleMode={usageMode}
          usageMode={usageMode}
          component={entities.components[slug]}
          depth={2}
        />
      );
    }
    if (entities.sections[slug]) {
      return <RSGSection section={entities.sections[slug]} depth={2} />;
    }

    return <div> 404 </div>;
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
