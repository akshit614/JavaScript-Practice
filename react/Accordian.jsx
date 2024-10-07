import React, { useState } from 'react';
import Accordion from './AccordionComponent';

export default function App() {

  return (
    <>
      <Accordion title="Tab 1" desc="Content of tab 1" />
      <Accordion title="Tab 2" desc="Content of tab 2" />
      <Accordion title="Tab 3" desc="Content of tab 3" />
    </>
  )
}



function Accordion({title,desc}) {

    const [clicked, SetClicked] = useState(false)

    const showContent = () => {
        
        // if (clicked == false) {
        //     SetClicked(true)
        // } 
        // if (clicked == true) {
        //     SetClicked(false)  
        // } 

        clicked == false ? SetClicked(true) : SetClicked(false)

    }

    return (
        <div style={styles.accordion}>
            <div style={styles.title} onClick={showContent}>{title}</div>
            { clicked && <div style={styles.desc}>{desc}</div>}
        </div>
    )
}


const styles = {
    accordion : {
        border : '1px solid #ccc',
        marginBottom : '10px'
    },
    title : {
        padding: '5px',
        backgroundColor: '#f1f1f1',
        cursor: 'pointer',    
    },
    desc : {
        padding: '30px',
        backgroundColor: '#fff',
    }

}
