
//import React from 'react'

//type Props = {}

const ListBooks = ({ books, onRemoveBook }: any) => {
  return (
    <>
        <ol>
            {books.map((book: any) => (
                <li key={book.id}>{book.name}{" "}
                <button onClick={() => onRemoveBook(book.id)}>Удалить</button>
                </li>
                
            ))}
        </ol>
    </>
  )
}

export default ListBooks