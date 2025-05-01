import { createRoot } from 'react-dom/client'
import LandingPage from './pages/LandingPage/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage/SignUpPage'
import SigninPage from './pages/SigninPage/SignInPage'
import HomePage from './pages/HomePage/HomePage'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/signin' element={<SigninPage/>}></Route>
      <Route path='/signup' element={<SignupPage/>}></Route>
      <Route path='/home' element={<HomePage/>}></Route>
    </Routes>
  </BrowserRouter>,
)
