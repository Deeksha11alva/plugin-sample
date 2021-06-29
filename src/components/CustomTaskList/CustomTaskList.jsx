import React from 'react';
import * as ReactDOM from "react-dom";
import Accordion from '../Accordion/Accordion';
import TabsMenu from '../TabsMenu/TabsMenu';

import { CustomTaskListComponentStyles } from './CustomTaskList.Styles';



 // It is recommended to keep components stateless and use redux for managing states
const CustomTaskList = (props) => {
  if (!props.isOpen) {
    return null;
}
return (
    <CustomTaskListComponentStyles>
      <div className="wrapper">
    <div className="nav">
    <h4 style={{color:'black', fontSize:'14px'}}>Guest info</h4>
    <div id="login-container">
  <div className="profile-img"></div>


  <h1>
    Maddie
  </h1>
  <div className="description">
    Maddie is a front end web developer in New York. She has worked in the field for 10 years now. Check out her projects in the links below. She is available for hire as well.
  </div>
  <div className="social">
    <a>GitHub</a>
    <a>Twitter</a>
    <a>LinkedIn</a>
  </div>
  
  <footer>
    <div className="likes">
      <p><i class='fa fa-heart'></i></p>
      <p>1.5K</p>
    </div>
    <div className="projects">
      <p>Projects</p>
      <p>154</p>
    </div>
  </footer>
</div>
    {/* <div class="container bcontent">
        <h4>Guest info</h4>
        <hr />
        <div class="card">
            <div class="card-header">Mike Johnson</div>
            <div class="card-body">
          
                <h5 class="card-title" style={{textAlign:'center'}}>Mike Johnson</h5>
                <p class="card-text" style={{textAlign:'center'}}> Customer since:11/11/2010</p>
               
                <p class="card-text" style={{textAlign:'center'}}>        Lifetime spent:$542.00 & Active since 11/11/2020 </p>
    

                <a href="#"    style={{float:'right',color:'white'}}  class="btn btn-primary">View Profile</a>
            </div>
            <div class="card-footer text-muted">1 day ago</div>
        </div>
    </div> */}
{/*  
   <div stlye={{}}> 



<Card 

  style={{ 

    width: 630, 

    backgroundColor: "#bebf84", 
 

  }} 

> 

  <CardContent > 

  <img style={{float:'left', height:200, width:50}} src="images/logo.jpg" alt="BigCo Inc. logo"/>

    <Typography  style={{textAlign:'center'}} variant="h5" component="h2"> 

    Mike Johnson

    </Typography> 
    <hr/>

    <Typography 

      style={{ 
        textAlign:'center',
        marginBottom: 12, 
        marginTop:10,

      }} 

      color="textSecondary"

    > 

    Lifetime spent:$542.00 

    </Typography> 
<hr/>
    <Typography  style={{textAlign:'center'}} variant="body2" component="p"> 

    Customer since:11/11/2010

    </Typography> 

  </CardContent> 

  <CardActions> 

    <Button size="small">Stay Safe.....</Button> 

  </CardActions> 

</Card> 

</div>  */}
</div> 
<div class="main">


 {/* <div className="tab-wrapper">
      <div className='container-fluid' >
        <div className="row">
          <div className="col-sm-12">

            <Tabs defaultActiveKey="profile">
              <Tab eventKey="home" title="Home">
                <div className="tab-item-wrapper">
                  <h5>Home Dashbord</h5>
                  <p>At vero eos et accusamus et iusto odio dignissimos</p>
                </div>
              </Tab>

              <Tab eventKey="profile" title="Profile">
                <div className="tab-item-wrapper">
                  <h5>Profile Details</h5>
                  <p>At vero eos et accusamus et iusto odio dignissimos</p>
                </div>
              </Tab>

              <Tab eventKey="contact" title="Contact">
                <div className="tab-item-wrapper">
                  <h5>Contact Info</h5>
                  <p>At vero eos et accusamus et iusto odio dignissimos</p>
                </div>
              </Tab>
            </Tabs>

          </div>
        </div>
      </div>
    </div>  */}

<Accordion />
{/* <TabsMenu /> */}

</div>
</div>
    </CustomTaskListComponentStyles>
  );
};

export default CustomTaskList;
