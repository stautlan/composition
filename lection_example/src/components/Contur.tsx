//import React from 'react'
import '../css/main.css'
//import styled from 'styled-components'

//type Props = {}

const Contur = (/*props: any*/) => {
  return (
    <fieldset>
      <h3>Название книги</h3>
      <div>Автор книги</div>
      <div>Цена книги</div>
      <div>Количество книг</div>
      <button className='submit' type="submit">Купить</button>
      <button className='reset' type="reset">Отмена</button>
    </fieldset>
  )
}

export default Contur