import { useState } from 'react'

const ThreeColumnElement = () => {
    const [boards, setBoards] = useState([
        {id: 1, title: "Погода", items: [ { id: 1, title: "text1" }, { id: 2, title: "text2" },{ id: 3, title: "text3" } ]},
        {id: 2, title: "Посещения", items: [{ id: 4, title: "text4" }, { id: 5, title: "text5" },{ id: 6, title: "text6" } ]},
        {id: 3, title: "Телепрограмма", items: [{ id: 7, title: "text7" }, { id: 8, title: "text8" },{ id: 9, title: "text9" } ]},
    ]);
    
  return (
    <div className='div-three'>
        {boards.map((board, keyBoard) => 
            <div className='board' key={keyBoard}>
                <div className='board-title'>{board.title}</div>
                {board.items.map((item, keyItem) =>
                    <div 
                        key={keyItem}
                        className='item'>{item.title}</div>
                )}
            </div>
        )}
    </div>
  )
}

export default ThreeColumnElement