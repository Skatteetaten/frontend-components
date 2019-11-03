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
    item => !item.settings || (item.settings && !item.settings.beskrivelse)
  );
  const exampleDescription = examples.filter(
    item => item.settings && item.settings.beskrivelse
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
          <TabItem itemKey="examples" headerText={'Komponent eksempel'}>
            <div style={{ marginTop: '10px' }}>
              <Examples examples={code} name={name} exampleMode={exampleMode} />
            </div>
          </TabItem>
        )}
        <TabItem headerText="Komponent API" itemKey="API">
          <div style={{ marginTop: '10px' }}>
            <div className={classes.tabs}>
              <div className={classes.tabBody}>{tabBody}</div>
            </div>
          </div>
        </TabItem>
        {exampleDescription.length > 0 && (
          <TabItem headerText="Komponent beskrivelse" itemKey="om-komponent">
            <div style={{ marginTop: '10px' }}>
              <Examples
                examples={exampleDescription}
                name={name}
                exampleMode={exampleMode}
              />
            </div>
          </TabItem>
        )}
      </Tabs>
    </div>
  );
}
export default Styled(styles)(ReactComponentRenderer);
