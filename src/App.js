import Bar from './components/bar'
import './App.css'
import Show from './components/show.js'
import Sidebar from './components/sidebar.js';
import { useState } from 'react';

function App() {
  const [elements, setElements] = useState(10)
  const [target, setTarget] = useState(1)
  const [play, setPlay] = useState(false)
  const [restart, setRestart] = useState(0)
  const [func, setFunction] = useState('bubbleSort')
  const [sidebar, setSidebar] = useState(false)
  const toggleSidebar = () => {setSidebar(!sidebar); console.log(sidebar)}
  const props = {
    target,
    setTarget: e => setTarget(e.target.value),
    elements,
    setElements: e => setElements(e.target.value),
    play, 
    setPlay: () => {setPlay(!play)},
    restart,
    setRestart: () => {setRestart(restart+1)},
    func,
    setFunction: e => setFunction(e.target.value),
    toggleSidebar
  }
  return (
    <div className="app">
      <Show {...props}/>
      <Bar {...props} toggleSidebar={setSidebar}/>
      <Sidebar algorithm={func} isOpen={sidebar} onClose={toggleSidebar} />
    </div>
  );
}

export default App;
