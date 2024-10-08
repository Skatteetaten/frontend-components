import React, { useState, useEffect } from 'react';
import Styled from 'react-styleguidist/lib/client/rsg-components/Styled';
import Examples from 'react-styleguidist/lib/client/rsg-components/Examples';
import { UseScreen } from '../../components/utils/ScreenPlugin';
import chunkify from 'react-styleguidist/lib/loaders/utils/chunkify';
import { MigrationGuides } from '../../migrations';

import { Icon } from '../../components/Icon';
import { Tabs } from '../../components/Tabs';
import { TabItem } from '../../components/Tabs/TabItem';
import { IconButton } from '@skatteetaten/frontend-components/IconButton';
import { Table } from '@skatteetaten/frontend-components/Table';

const styles = ({ color, fontSize, space }) => ({
  root: {
    marginBottom: space[6],
  },
  header: {
    marginBottom: space[3],
  },
  tabs: {
    marginBottom: space[3],
  },
  tabButtons: {
    marginBottom: space[1],
  },
  tabBody: {
    overflowX: 'auto',
    maxWidth: '100%',
    WebkitOverflowScrolling: 'touch',
  },
  docs: {
    color: color.base,
    fontSize: fontSize.text,
  },
});

export function ReactComponentRenderer({
  classes,
  name,
  heading,
  pathLine,
  description,
  isDeprecated,
  docs,
  examples,
  exampleMode,
  tabButtons,
  tabBody,
  filepath,
}) {
  const [migrationGuideExamples, setMigrationGuideExamples] = useState([]);

  useEffect(() => {
    const findMigrationGuideWithName = (element) =>
      element.startsWith(`static/media/${name}Migration`);
    const migrationGuideIndex = MigrationGuides.findIndex(
      findMigrationGuideWithName
    );

    if (migrationGuideIndex !== -1) {
      fetch(MigrationGuides[migrationGuideIndex])
        .then((res) => {
          return res.text();
        })
        .then((text) => {
          const chunkifiedExamples = chunkify(text);
          setMigrationGuideExamples(chunkifiedExamples);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setMigrationGuideExamples([]);
    }
  }, [name]);

  // Splitter opp kode og beskrivelse
  const code = examples.filter(
    (item) =>
      !item.settings ||
      (item.settings && !item.settings.beskrivelse && !item.settings.uu)
  );
  const exampleDescription = examples.filter(
    (item) => item.settings && item.settings.beskrivelse
  );
  const exampleAccessibility = examples.filter(
    (item) => item.settings && item.settings.uu
  );

  const size = UseScreen();

  const apiColumns = [
    {
      name: 'Prop name',
      fieldName: 'name',
    },
    {
      name: 'Type',
      fieldName: 'type',
    },
    {
      name: 'Default',
      fieldName: 'defaultValue',
    },
    {
      name: 'Description',
      fieldName: 'description',
    },
  ];

  const apiData = tabBody.props.props.props.props.map((prop) => {
    return {
      name: prop.name,
      type: prop.type.name,
      defaultValue: prop.required ? 'Required' : prop.defaultValue?.value,
      description: prop.description,
    };
  });

  return (
    <div className={classes.root} data-testid={`${name}-container`}>
      <header className={classes.header}>
        {heading}
        {pathLine && (
          <div className={'pathline'}>
            {pathLine}
            <IconButton
              title="Kopier"
              icon="Copy"
              onClick={() => {
                navigator.clipboard.writeText(`${pathLine}`);
              }}
            />
          </div>
        )}
      </header>
      {isDeprecated && (
        <span className="deprecatedLabel">
          <Icon iconName="Error" />
          <span>Deprecated</span>
        </span>
      )}
      {(description || docs) && (
        <div className={classes.docs}>
          {description}
          {docs}
        </div>
      )}
      <Tabs>
        {migrationGuideExamples.length > 0 && (
          <TabItem headerText={'Migration'} itemKey="migration">
            <div style={{ marginTop: '16px' }}>
              <Examples
                examples={migrationGuideExamples}
                name={name}
                exampleMode={exampleMode}
              />
            </div>
          </TabItem>
        )}
        {code.length > 0 && (
          <TabItem itemKey="examples" headerText={'Eksempler'}>
            <div style={{ marginTop: '16px' }}>
              <Examples examples={code} name={name} exampleMode={exampleMode} />
            </div>
          </TabItem>
        )}
        {exampleDescription.length > 0 && (
          <TabItem
            headerText={size.gt.md ? 'Bruk og innhold' : 'Bruk'}
            itemKey="usage"
          >
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
          <TabItem
            headerText={size.gt.md ? 'Universell utforming' : 'UU'}
            itemKey="accessibility"
          >
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
            <Table
              data={apiData}
              columns={apiColumns}
              caption={'Liste over prop names'}
              hideCaption
              customClassNames={{
                table: 'apiTable',
              }}
            />
          </div>
        </TabItem>
      </Tabs>
    </div>
  );
}
export default Styled(styles)(ReactComponentRenderer);
