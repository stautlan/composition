const Menu = ({items}: any) => {
  return (
    <>
      <ul>
        {items.map((item, index) =>
        <li key={index}><a href={item}>{item}</a></li>
        )}
      </ul>
    </>
  )
}

export default Menu