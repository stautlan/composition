//import { useState } from 'react'
import './App.css'
import BookStore from './components/Bookstore'
import Categories from './components/Category.tsx'
import Contur from './components/Contur'
import Message from './components/Message'
import Sidebar from './components/Sidebar'
import Widget from './components/Widget'

//import {ErrorMessage} from './components/ErrorMessage'

const message = {
  type: 'info',
  text: 'Сообщение'
}

function App() {
  return (
    <>
      <div className='root'>
        <div className='main'>
          <Message {...message}/>
          <Sidebar>
            <Widget title='Топ продаж'>
              <div className='bookCatalog'>
                <div className='bookCard'><Contur /></div>
                <div className='bookCard'><Contur /></div>
                <div className='bookCard'><Contur /></div>
              </div>
            </Widget>
            <Widget title='Категории'>
              <Categories> 
                {(category: any) => <a key={category.id}>{category.name}</a>}
              </Categories>
            </Widget>
            <Widget title='Скидки'>
              <div className='bookCard'><Contur /></div>
              <div className='bookCard'><Contur /></div>
              <div className='bookCard'><Contur /></div>
            </Widget>
          </Sidebar>
          <div className='content'>
            <Message className='message warning' type="warning" text="This is warning message" />
            <Message className='message error' type="error" text="This is error message" />
            <Message className='message info' type="info" text="This is info message" />
            <Message className='message success' type="success" text="This is success message" />

            <BookStore />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
