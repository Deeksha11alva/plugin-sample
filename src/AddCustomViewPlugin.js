import React from 'react';
// import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';
import {View} from '@twilio/flex-ui';
import CustomView from'./CustomView';
import MycustomPage from'./MycustomPage';
import CustomTaskListContainer from './components/CustomTaskList/CustomTaskList.Container';
import CustomSidebarButton from './CustomSideBarButtun';
// import reducers, { namespace } from './states';

const PLUGIN_NAME = 'AddCustomViewPlugin';

export default class AddCustomViewPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {

    
    // this.registerReducers(manager);

    // flex.CRMContainer.defaultProps.uriCallback = (task) => {



      
    //   return task 
    //     ? `https://bing.com/?q=${task.attributes.name}`
    //     : 'https://bing.com';
    // }

 
flex.SideNav.Content.add(
    <CustomSidebarButton key="custom-view-button"/>
);
flex.ViewCollection.Content.add(
    <View name="custom-view" key="custom-view">
        <CustomView />
    </View>
);
flex.ViewCollection.Content.add(
  <View name="my-custom-page" key="my-custom-page">
      < MycustomPage/>
  </View>
);
  }

}
//    @param manager 
  
//   registerReducers(manager) {

    
//     if (!manager.store.addReducer) {
      
//       console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
//       return;
//     }

//     manager.store.addReducer(namespace, reducers);
//   }
// }



