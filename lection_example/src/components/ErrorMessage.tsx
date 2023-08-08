import React from 'react'

import Message from "./Message";

type Props = Omit<React.ComponentProps<typeof Message>, 'type'>

/*export default*/ function ErrorMessage(props: Props) {
  return (
    // DRY!!!
    // <div className='message message-error'>
    //     {props.text}
    // </div>
    // props не переопределить
    // <Message
    //     type="error"
    //     text={props.text}
    // />
    <Message {...props} type='error' />
  )
}

const Button = ({ text, ...props}: any) => {
    return <button {...props}>{text}</button>
}

export default {ErrorMessage, Button} ;