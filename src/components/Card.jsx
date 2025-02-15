function Card({ name, imgURL, clickHandler }) {
    return (
        <div className="card" onClick={() => clickHandler(name)}>
            <img src={imgURL} alt={`${name} flag`} className="card__img" />
            <div className="card__overlay">
                <p className="card__text">{name}</p>
            </div>
        </div>
    )
}

export default Card
