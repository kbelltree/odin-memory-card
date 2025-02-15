import Card from './Card'

function CardSet({ flagsData, clickHandler }) {
    return (
        <main className="gameboard">
            {flagsData &&
                flagsData.map((flag) => (
                    <Card
                        key={crypto.randomUUID()}
                        name={flag.name}
                        imgURL={flag.image}
                        clickHandler={clickHandler}
                    />
                ))}
        </main>
    )
}

export default CardSet
