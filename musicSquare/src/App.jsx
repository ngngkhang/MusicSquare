
import './App.css'
import Details from './components/Details/Details'
import SliderContainer from './components/SliderContainer/SliderContainer'
import Buttons from './components/Buttons/Buttons'

function App() {

  return (
    <>
      <div className="player">
        <div className="wrapper">
          <Details/>
          <SliderContainer/>
          <Buttons/>
        </div>
      </div>
    </>
  )
}

export default App
