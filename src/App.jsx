import { Outlet, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import AllDoctors from './pages/AllDoctors'
import Login from './pages/Login'
import Doctor from './pages/Doctor'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/allDocutors' element={<Outlet/>}>
          <Route path='/allDocutors' element={<AllDoctors/>}/>
          <Route path=':spcialist' element={<AllDoctors/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/doctor/:id' element={<Doctor/>}/>
      </Routes>
    </div>
  )
}

export default App
