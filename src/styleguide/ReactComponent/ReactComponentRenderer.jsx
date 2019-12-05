import React from 'react';
import Pathline from 'react-styleguidist/lib/client/rsg-components/Pathline';
import Styled from 'react-styleguidist/lib/client/rsg-components/Styled';
import Tabs from '../../components/Tabs';
import TabItem from '../../components/Tabs/TabItem';
import Examples from 'react-styleguidist/lib/client/rsg-components/Examples';

const styles = ({ color, fontSize, space }) => ({
  root: {
    marginBottom: space[6]
  },
  header: {
    marginBottom: space[3]
  },
  tabs: {
    marginBottom: space[3]
  },
  tabButtons: {
    marginBottom: space[1]
  },
  tabBody: {
    overflowX: 'auto',
    maxWidth: '100%',
    WebkitOverflowScrolling: 'touch'
  },
  docs: {
    color: color.base,
    fontSize: fontSize.text
  }
});

export function ReactComponentRenderer({
  classes,
  name,
  heading,
  pathLine,
  description,
  docs,
  examples,
  exampleMode,
  tabButtons,
  tabBody
}) {
  // Splitter opp kode og beskrivelse
  const code = examples.filter(
    item =>
      !item.settings ||
      (item.settings && !item.settings.beskrivelse && !item.settings.uu)
  );
  const exampleDescription = examples.filter(
    item => item.settings && item.settings.beskrivelse
  );
  const exampleAccessibility = examples.filter(
    item => item.settings && item.settings.uu
  );

  return (
    <div className={classes.root} data-testid={`${name}-container`}>
      <header className={classes.header}>
        {heading}
        {pathLine && <Pathline>{pathLine}</Pathline>}
      </header>
      {(description || docs) && (
        <div className={classes.docs}>
          {description}
          {docs}
        </div>
      )}
      <Tabs>
        {code.length > 0 && (
          <TabItem itemKey="examples" headerText={'Eksempler'}>
            <div style={{ marginTop: '16px' }}>
              <Examples examples={code} name={name} exampleMode={exampleMode} />
            </div>
          </TabItem>
        )}
        {exampleDescription.length > 0 && (
          <TabItem headerText="Bruk og innhold" itemKey="usage">
            <div style={{ marginTop: '16px' }}>
              <Examples
                examples={exampleDescription}
                name={name}
                exampleMode={exampleMode}
              />
            </div>
          </TabItem>
        )}
        {exampleAccessibility.length > 0 && (
          <TabItem headerText="Universell utforming" itemKey="accessibility">
            <div style={{ marginTop: '16px' }}>
              <Examples
                examples={exampleAccessibility}
                name={name}
                exampleMode={exampleMode}
              />
            </div>
          </TabItem>
        )}
        <TabItem headerText="API" itemKey="api">
          <div style={{ marginTop: '16px' }}>
            <div className={classes.tabs}>
              <div className={classes.tabBody}>{tabBody}</div>
            </div>
          </div>
        </TabItem>
      </Tabs>
    </div>
  );
}
export default Styled(styles)(ReactComponentRenderer);
