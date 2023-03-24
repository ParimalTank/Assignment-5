import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Login from '../../src/views/auth/Login'


const Comp = () =>{
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  )
}

describe('<Login />', () => {
  it('renders', () => {
    // eslint-disable-next-line no-undef
    cy.mount(<Comp />)
    cy.get('#signup-btn').click()
  })  
})