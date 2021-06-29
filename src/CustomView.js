// import { View } from '@twilio/flex-ui';
// import React from 'react';

// export default class CustomView extends React.Component{

// render(){
//     return(
//         <div>
//         I am a custom View
//         </div>
//     );
// }
// }


import { View } from '@twilio/flex-ui';
import React from 'react';
import Iframe from 'react-iframe';
export default class CustomView extends React.Component{

render(){
    return(
        <Iframe url="https://www.solitr.com"
        width="700"
        height="100%"
        allowfullScreen/>
       
    );
}
}
