import { BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar'
import NewShow from './context/NewShow'
import AnimatedRoutes from './components/AnimatedRoutes'


function App() {

  return (
    <div className='container-fluid'>
      <NewShow>
      <BrowserRouter>
        <NavBar/>
        <AnimatedRoutes/>
      </BrowserRouter>
      </NewShow>
    </div>
  )
}

export default App
