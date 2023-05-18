import React from 'react'
import Account from './account'
import Container from './Container'

const bodyFor = () => {
  return (
    <div className='w-full bg-[#24282f]'>
        <Container>
          <h1></h1>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 2xl:grid-cols-4 ml-[15px]'>
        <Account></Account>
        <Account></Account>
        <Account></Account>
      
  
      
        
        </div> 
        </Container>     

    </div>
  )
}

export default bodyFor