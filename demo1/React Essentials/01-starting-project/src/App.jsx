import { useState,useRef } from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';
import clickSound from './assets/click.mp3';



function App() {
  const [selected,setselected]=useState(); 
  // const clickAudio = useRef(new Audio(clickSound));

  function handleSelect(selectorButton){
    setselected(selectorButton)
    console.log(selected);
  }
  // function handleSelect(selectorButton) {
  //   // Reset the audio so it doesn't overlap
  //   clickAudio.current.pause();
  //   clickAudio.current.currentTime = 0;
  //   clickAudio.current.play();

  //   // Update UI
  //   setselected(selectorButton);
  // }

  console.log('APP CONTENT RENDER')

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>            
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>handleSelect('components')}>Component</TabButton>
            <TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect('state')}>State</TabButton>
          </menu>
          {!selected ?<p>Please select a topic</p>:
          <div id="tab-content">
            
            <h3>{EXAMPLES[selected].title}</h3>
            <p>{EXAMPLES[selected].description}</p>
            <pre>
              <code>{EXAMPLES[selected].code}</code>
            </pre>
          </div>}
        </section>        
      </main>
    </div>
  );
}

export default App;
