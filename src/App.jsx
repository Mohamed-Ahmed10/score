import './App.css'
import SiteNav from './layout/SiteNav'
import { Route, Routes } from "react-router-dom"
import Tennis from './views/Tennis'
import Home from './views/Home'
import Climbing from './views/Climbing'
import Rube from './views/Rube'

function App() {

  return (
    <>
      <SiteNav />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/tennis" Component={Tennis} />
        <Route path="/climbing" Component={Climbing} />
        <Route path="/rube_goldberg" Component={Rube} />
      </Routes>
    </>
  )
}

export default App
