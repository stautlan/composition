//import React from 'react'

//type Props = {}
interface Category {
  id: number;
  name: string;
}

const Category = ({children}: any) => {
  const categories: Category[] = [
    {id: 1, name: "Программирование"},
    {id: 2, name: "Разработка"},
    {id: 3, name: "Дизайн"}
  ];

  return (
    <nav className="category">
      <div>Children: ({children.length})</div>
      {children(categories)}
    </nav>
  )
}

export default Category