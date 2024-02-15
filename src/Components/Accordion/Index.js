import React, { useState } from 'react'
import data from './data'
import './styles.css'
//single selection accordion 

function Index() {

  // State to track the currently selected item
  const [selected, setSelected] = useState(null);

  // Function to handle single item selection
  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    // If the clicked item is already selected, set it to null to collapse it
    // Otherwise, set it to the clicked item's ID to expand and show its content
    setSelected(getCurrentId === selected ? null : getCurrentId)

  }
  console.log(selected);
  return (
    <div className='wrapper'>
      {
        /* Check if there is data available */
        data && data.length > 0 ?
         // Map through the data and render each item
        data.map((e) => 
          <div key={e.id} onClick={() => handleSingleSelection(e.id)} className='accordion-box'>
            <h3>{e.question}</h3>
            <span>+</span>
            <div>
              {
                /* Show the answer only if the current item is selected */
                selected === e.id ?
                <div className='answer'>
                  {e.answer}
                </div>
                : null
              }
            </div>
          </div>
        )
        : <div>No data found</div>
      }
    </div>
  )
}

export default Index