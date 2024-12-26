

import Demo from './components/Hero';
import Hero from './components/Demo';
import './App.css';
const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient"/>
      </div>
      <div className="app">
        <Demo/>
        <Hero/>
         
      </div>
    </main>
  )
}

export default App
