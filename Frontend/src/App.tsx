import './App.css'
import {Route,Routes} from "react-router"
import Login from './compontents/login'
import Signup from './compontents/signup'
import HomePage from './compontents/home'
import NewTrip from './compontents/newTrip'
import MyTrip from './compontents/my-trip'

function App() {
  

  return (
    <>
    <Routes>
      <Route element={<Login />} path='/'/>
      <Route element={<Signup/>} path='/signup'/>
      <Route element={<HomePage/>} path='/home'/>
      <Route element={<NewTrip/>} path='/newTrips'/>
      <Route element={<MyTrip/>} path='/my-trips'/>
    </Routes>
     
    </>
  )
}

export default App
