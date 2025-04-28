import { createRoot } from 'react-dom/client'
import LandingPage from './pages/LandingPage/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage/SignUpPage'
import SigninPage from './pages/SigninPage/SignInPage'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/signin' element={<SigninPage/>}></Route>
      <Route path='/signup' element={<SignupPage/>}></Route>
    </Routes>
  </BrowserRouter>,
)
