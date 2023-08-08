//import React from 'react'

//type Props = {}

const Message = (props: any) => {
  return (
    <div className={`message message-${props.type}`}>
      {props.text}
    </div>
  )
}

export default Message