import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../../src/App'
import Login from '../../src/views/auth/Login'
import SignUp from '../../src/views/auth/SignUp'


const LoginComponent = () =>{
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path='Login' element={<Login />}></Route>
          <Route path='SignUp' element={<SignUp />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

const SignUpComponent = () => {
   return(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
   )
}

describe('<Login />', () => {
  it('renders', () => {
    // eslint-disable-next-line no-undef
    cy.mount(<LoginComponent />)
    // cy.get('#signup-btn').click()
  })  
})



describe('<Signup />', () => {
  it('renders', () => {
    // eslint-disable-next-line no-undef
    cy.mount(<SignUpComponent />)
  })  
})