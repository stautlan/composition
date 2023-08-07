import './App.css'
import FindElement from './components/FindElement'
import HeadItem from './components/HeadItem'
import ImageElement from './components/ImageElement'
import Menu from './components/Menu'
import ThreeColumnElement from './components/ThreeColumnElement'

const contextMenu = [
  ["Сейчас", "Потом", "Рекомендуем"],
  ["Видео", "Картинки", "Новости", "Карты", "Макет", "Переводчик", "Эфир"]
];

const context = [
  "Функциональность и стилизацию реализовывать не нужно",
  "чтобы видно было все блоки",
  "Разбейте весь интерфейс"
]

function App() {

  return (
    <>
      <Menu items={contextMenu[0]} />
      <br />
      <div>
        {context.map((item) => <HeadItem text={item} />)}
      </div>
      <Menu items={contextMenu[1]} />
      <FindElement />
      <ImageElement>
        <ThreeColumnElement />
      </ImageElement>
    </>
  )
}

export default App
