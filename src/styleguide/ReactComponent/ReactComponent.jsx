import React, { Component } from 'react';
import SectionHeading from 'react-styleguidist/lib/client/rsg-components/SectionHeading';
import JsDoc from 'react-styleguidist/lib/client/rsg-components/JsDoc';
import Markdown from 'react-styleguidist/lib/client/rsg-components/Markdown';
import Slot from 'react-styleguidist/lib/client/rsg-components/Slot';
import Context from 'react-styleguidist/lib/client/rsg-components/Context';
import { DisplayModes, UsageModes } from 'react-styleguidist/lib/client/consts';
import UsageTabButton from '../slots/UsageTabButton';
import ReactComponentRenderer from './ReactComponentRenderer';

export default class ReactComponent extends Component {
  static contextType = Context;
  state = {
    activeTab:
      this.props.usageMode === UsageModes.expand ? UsageTabButton : undefined
  };

  handleTabChange = name => {
    this.setState(state => ({
      activeTab: state.activeTab !== name ? name : undefined
    }));
  };

  render() {
    const { activeTab } = this.state;
    const {
      displayMode,
      config: { pagePerSection }
    } = this.context;
    const { component, depth, usageMode, exampleMode } = this.props;
    const { name, visibleName, slug, filepath, pathLine } = component;
    const { description, examples = [], tags = {} } = component.props;
    if (!name) {
      return null;
    }
    const showUsage = usageMode !== UsageModes.hide;

    return (
      <ReactComponentRenderer
        name={name}
        slug={slug}
        filepath={filepath}
        pathLine={pathLine}
        docs={<JsDoc {...tags} />}
        description={description && <Markdown text={description} />}
        heading={
          <SectionHeading
            id={slug}
            pagePerSection={pagePerSection}
            deprecated={!!tags.deprecated}
            slotName="componentToolbar"
            slotProps={{
              ...component,
              isolated: displayMode !== DisplayModes.all
            }}
            depth={depth}
          >
            {visibleName}
          </SectionHeading>
        }
        examples={examples}
        exampleMode={exampleMode}
        tabButtons={
          showUsage && (
            <Slot
              name="docsTabButtons"
              active={activeTab}
              props={{ ...component, onClick: this.handleTabChange }}
            />
          )
        }
        tabBody={
          <Slot
            name="docsTabs"
            active={activeTab}
            props={component}
          />
        }
      />
    );
  }
}
