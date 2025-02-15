function Header({ currentScore, bestScore }) {
    return (
        <header className="header">
            <h1
                className="header__heading"
                onClick={() => window.location.reload(false)}
            >
                Memory Card
            </h1>
            <section className="scoreboard">
                <div className="scoreboard__item scoreboard__item--current">
                    <h2 className="scoreboard__label">Current Score:</h2>
                    <span className="scoreboard__value">{currentScore}</span>
                </div>
                <div className="scoreboard__item scoreboard__item--best">
                    <h2 className="scoreboard__label">Best Score:</h2>
                    <span className="scoreboard__value">{bestScore}</span>
                </div>
            </section>
        </header>
    )
}

export default Header
