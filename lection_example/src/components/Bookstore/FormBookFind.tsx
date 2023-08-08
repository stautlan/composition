import React, { useState } from 'react'

interface Props {
    onSearchBook: (name: string) => void;
    searchBook : string;
}

//type Props = {}

const FormBookFind = ({ onSearchBook, searchBook }: Props) => {
    //const [books, setBooks] = useState(bookstore);
    //const [searchBook, setSearchBook] = useState('');

    const handlerSearch = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        //setSearchBook(value);
        onSearchBook(value);
    }

    const resetSearch = () => {
        //setSearchBook('');
        onSearchBook('');
    }
  return (
    <div>
        <form onSubmit={event => event.preventDefault()}>
                <label htmlFor="searchInput">Поиск книги</label>
                <input
                    id="searchInput"
                    placeholder="Введите название книги" 
                    value={searchBook}
                    onChange={handlerSearch}
                />
                <button onClick={resetSearch} type='button'>Очистить</button>
            </form>
    </div>
  )
}

export default FormBookFind