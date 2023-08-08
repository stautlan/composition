//import React from 'react'

function Widget({ children, title }: any) {
  return (
    <div className='widget'>
        <h2 className='widget-title'>{title}</h2>
        <hr />
        <div className='widget-content'>
            {children}
        </div>
    </div>
  )
}

export default Widget