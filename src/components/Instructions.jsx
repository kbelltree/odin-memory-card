import { useState } from 'react'

function Instructions() {
    const [isClosed, setIsClosed] = useState(false)
    return (
        <section className="instructions">
            <div className="instructions__heading">
                <h3 className="instructions__title">How to play</h3>
                {isClosed ? (
                    <button
                        className="instructions__button"
                        alt="Expand instructions"
                        onClick={() => setIsClosed(false)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-maximize-2"
                        >
                            <polyline points="15 3 21 3 21 9" />
                            <polyline points="9 21 3 21 3 15" />
                            <line x1="21" y1="3" x2="14" y2="10" />
                            <line x1="3" y1="21" x2="10" y2="14" />
                            <title>expand instructions</title>
                        </svg>
                    </button>
                ) : (
                    <button
                        className="instructions__button"
                        alt="Minimize instructions"
                        onClick={() => setIsClosed(true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-minimize-2"
                        >
                            <polyline points="4 14 10 14 10 20" />
                            <polyline points="20 10 14 10 14 4" />
                            <line x1="14" y1="10" x2="21" y2="3" />
                            <line x1="3" y1="21" x2="10" y2="14" />
                            <title>minimize instructions</title>
                        </svg>
                    </button>
                )}
            </div>
            {!isClosed && (
                <p className="instructions__text">
                    Click a card, but never the same one twice. The round ends
                    when you repeat a selection!
                </p>
            )}
        </section>
    )
}

export default Instructions
