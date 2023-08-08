import { useState } from 'react'

import { nanoid } from "nanoid";

type Props = {}

const FormBookAdd = ({onAddBook}: any) => {
    const [newBookTitle, setNewBookTitle] = useState('');

    const handlerAddBook = (event: React.FormEvent) => {
        event.preventDefault();
        if (!newBookTitle)
            return;
        // setBooks(prevBooks => {
        //     const newBook = { 
        //         id: nanoid(), 
        //         name: newBookTitle 
        //     };
        //     return [...prevBooks, newBook];
        // });
        onAddBook({id: nanoid(), name: newBookTitle})
        setNewBookTitle('');
    }

  return (
    <>
        <form onSubmit={handlerAddBook}>
            <input placeholder='Введите название книги'
                value={newBookTitle}
                onChange={event => setNewBookTitle(event.target.value)}
            />
            <button>Добавить</button>
        </form>
    </>
  )
}

export default FormBookAdd