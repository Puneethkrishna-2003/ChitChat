import { createRoot } from 'react-dom/client'
import Landing from './pages/LandingPage/landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignupPage/SignUp'
import SignIn from './pages/SigninPage/SignIn'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
    </Routes>
  </BrowserRouter>,
)
