import React from 'react';

import { FlexPlugin } from 'flex-plugin';
import {View} from '@twilio/flex-ui';
import Axios from 'axios';
// import reducers, { namespace } from './states';

const PLUGIN_NAME = 'ActionsPlugin';

export default class ActionsPlugin extends FlexPlugin {
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

    
    flex.Actions.addListener("afterAcceptTask", (payload) => alert("Triggered after event AcceptTask"));
    
    
    flex.Actions.addListener("beforeAcceptTask", (payload, abortFunction) => {
        alert("Triggered before event AcceptTask");
            if (!window.confirm("Are you sure you want to accept the task?")) {
                abortFunction();
            }
    });



    flex.Actions.registerAction("MyAction", (payload) => {
        return Axios.get("https://quotes.rest/god.json?category=inspire")
            // fetch("https://my.server.backend.com/test")
            .then(response => {
                alert("Here's an inspirational quote to keep you going:"+
                response.data.contents.quotes[0].quotell
                );
            })
            .catch(error => {
                console.log(error);
                throw error;
            });       
    });
    
    flex.Actions.addListener("afterCompleteTask", (payload) => {return flex.Actions.invokeAction("MyAction")});    
  }

}



