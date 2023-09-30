import React from 'react'

const Grouplayout = ({children}:{children : React.ReactNode}) => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
        {children}
    </div>
  )
}

export default Grouplayout