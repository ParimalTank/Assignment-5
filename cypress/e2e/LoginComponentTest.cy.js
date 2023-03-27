// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Login from '../../src/views/auth/Login'
import { mount } from 'cypress/react'


const Comp = () =>{
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  )
}

describe('<Login />', () => {
  it('renders', () => {
   
    cy.visit(<Comp />)
  })  
})