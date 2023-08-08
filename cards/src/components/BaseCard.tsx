import '../data/data'

const BaseCard = ({card, children}: any) => {
  return (
    <div className="card">
        {children}
        <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.text}</p>
            <a href="#" className="btn btn-primary">{card.primary}</a>
        </div>
    </div>
  )
}

export default BaseCard