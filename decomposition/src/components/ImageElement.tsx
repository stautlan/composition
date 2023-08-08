const ImageElement = ({children}: any) => {
  return (
    <div>
        <img src={''} alt='your image' />
        {children}
    </div>
  )
}

export default ImageElement