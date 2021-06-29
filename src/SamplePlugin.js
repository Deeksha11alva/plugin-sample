import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';
import {TodoListComponent} from './TodoListTaskComponent';
import CustomTaskListContainer from './components/CustomTaskList/CustomTaskList.Container';
import reducers, { namespace } from './states';

import Accordion from './components/Accordion/Accordion';
const PLUGIN_NAME = 'SamplePlugin';

export default class SamplePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to mo  dify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {

    
     this.registerReducers(manager);
     const options = { sortOrder: -1 };
    //  flex.AgentDesktopView
    //  .Panel1
    //  .Content
    //  .add(<AppTab key="SamplePlugin-component" />, options);
    flex.AgentDesktopView.Panel2.Content.remove('container');
     flex.AgentDesktopView
     .Panel2
     .Content
     .add(<CustomTaskListContainer key="SamplePlugin-component" />, options);
  
    manager.strings.NoTasks="No tasks, make some coffee";
// flex.AgentDesktopView.Panel1.add(
//   <CustomTaskList key="demo-component" />,
  
//   {
//     sortOrder:-1,
//   }
// )
    flex.MainHeader
.defaultProps
.logoUrl = "https://static0.twilio.com/marketing/bundles/archetype.alpha/img/logo-wordmark--red.svg"
flex.CRMContainer.defaultProps.uriCallback = (task) => {
  // return task 
  //   ? `https://bing.com/?q=${task.attributes.name}`
  //   : 'https://bing.com';
}

  }
// flex.TaskInfoPanel.Content.add(
//   <TodoListTaskComponent key="todo-list" />,
//   {
//     sortOrder:-1,
//   }
// );

//   }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {

    
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}



