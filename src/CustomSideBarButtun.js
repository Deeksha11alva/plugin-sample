import React from 'react';
import {SideLink,Actions} from '@twilio/flex-ui';

const CustomSidebarButton=({ activeView })=>{

    function navigate(){
        Actions.invokeAction('NavigateToView', {viewName:'custom-view'});
    }

    return(
<div>
    
        
        <SideLink
        showLabel={true}
        icon="Data"
        iconActive="DataBold"
        isActive={activeView==='custom-view'}
        onClick={navigate}
        >
            
        

            Custom View
        </SideLink>

           <SideLink
           showLabel={true}
           icon="Data"
           iconActive="DataBold"
           isActive={activeView==='custom-view'}
           onClick={navigate}
           >
               
           
   
               Custom View
           </SideLink>
       
  <SideLink
    showLabel={ true }
    icon="DefaultAvatar"
    isActive={true}
    onClick={() => {Actions.invokeAction('NavigateToView', {viewName:'my-custom-page'}); } }
    key="MyCustomPageSideLink"
  >
    My custom page
  </SideLink>

        </div>
    );
};
export default CustomSidebarButton;