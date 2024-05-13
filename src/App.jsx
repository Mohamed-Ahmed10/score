import './App.css'
import SiteNav from './layout/SiteNav'
import { Route, Routes } from "react-router-dom"
import Tennis from './views/Tennis'
import Climbing from './views/Climbing'
import Rube from './views/Rube'
import Results from './views/Results'
import Data_entry from './views/Data_entry'
import Home from './views/Home'

function App() {

  return (
    <>
      <SiteNav />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/results" Component={Results} />
        <Route path="/tennis" Component={Tennis} />
        <Route path="/climbing" Component={Climbing} />
        <Route path="/rube_goldberg" Component={Rube} />
        <Route path="/data" Component={Data_entry} />
      </Routes>
    </>
  )
}

export default App
