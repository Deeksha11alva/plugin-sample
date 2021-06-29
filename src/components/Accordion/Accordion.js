import React from 'react'; 

  
export default function Accordion() { 
  return ( 
    <div className="container" style={{width:'100%'}}>
	<details className="default square">
		<summary style={{background:'black', height:'47px', paddingTop:'4px', fontSize:'14px', marginTop:'10px'}}>Click to <span class="open">open</span><span class="close">close</span></summary>
		<p style={{background: 'white',
     color:'black',
     height: '40px',
     fontSize:'12px',
     paddingTop: '5px'
    }}>If your browser supports this element, it should allow you to expand and collapse these details.</p>
	</details>
	<details class="primary square">
		<summary style={{background:'black', height:'47px', paddingTop:'4px',fontSize:'14px', marginTop:'10px'}}>Click to <span class="open">open</span><span class="close">close</span></summary>		<p style={{background: 'white',
     color:'black',
     height: '40px',
     fontSize:'12px',
     paddingTop: '5px'
    }}>If your browser supports this element, it should allow you to expand and collapse these details.</p>
	</details>
	<details class="success">
		<summary style={{background:'black', height:'47px', paddingTop:'4px',fontSize:'14px', marginTop:'10px'}}>Click to <span class="open">open</span><span class="close">close</span></summary>		<p style={{background: 'white',
     color:'black',
     height: '40px',
     fontSize:'12px',
     paddingTop: '5px'
    }}>If your browser supports this element, it should allow you to expand and collapse these details.</p>
	</details>
</div>

  ); 
}