const HeadItem = ({text}: any) => {
  return (
    <>
        <div className="head-item">
            <img className="img-line" alt='img'/>
            <a href={text} className="a-line">{text}</a>
        </div>
        <br />
    </>
  )
}

export default HeadItem