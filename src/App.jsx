import Bdetails from './components/Bdetails'
import Regs from './components/Regs'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Tdetails from './components/Tdetails'
import Sdetails from './components/Sdetails'
import Pandc from './components/Pandc'


function App() {
  const routes= createBrowserRouter([
    {
      path:"/",
      element:<><Regs/></>
    },
    {
      path:"/bdetails",
      element:<><Bdetails/></>
    },
    {
      path:"/tdetails",
      element:<><Tdetails/></>
    },
    {
      path:"/sdetails",
      element:<><Sdetails/></>
    },
    {
      path:"/p&c",
      element:<><Pandc/></>
    }

  ])

  return (
    <RouterProvider router={routes}/>
  )
}

export default App
