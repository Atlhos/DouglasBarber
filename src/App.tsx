import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RoutesApp from './routesApp'

function App() {
  return (
    <div id="app" className='scroll-container'>
      <BrowserRouter basename='/DouglasBarber/'>
        <RoutesApp>
          
        </RoutesApp>
      </BrowserRouter>
    </div>
  )
}

export default App
