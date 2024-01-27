import { useEffect, useState } from 'react' 
import { Routes, Route } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
//?----------------------------------------- components
import Login from './components/login/Login'
import Home from './components/home/Home'
import Detail from './components/detail/Detail'
import Nav from './components/navBar/Nav'
import About from './components/about/About'
import ActivityCreator from './components/activityCreator/ActivityCreator'
//?----------------------------------------- style
import './App.css'



function App() {
 
  const location = useLocation()
  const navigate = useNavigate()

  const login = () => {
    if(location.pathname === '/?email=f%40f.com&password=hola123'){
      navigate('/home')
    } 
  }


  return (
    <main className='app'>
      {location.pathname !== '/' ? <Nav></Nav> : ''}
      <Routes>
      <Route path = '/' element={<Login login={login}></Login>}></Route>
        <Route path= '/home' element={<Home></Home>}></Route>
        <Route path='/detail/:id' element={<Detail></Detail>}></Route>
        <Route path= '/about' element= {<About></About>}></Route>
        <Route path='/create' element={<ActivityCreator></ActivityCreator>}></Route>
      </Routes>

    </main>
  )
}

export default App
