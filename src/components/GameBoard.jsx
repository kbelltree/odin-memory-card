import { useState, useEffect } from 'react'
import fetchTrimmedData from './fetchTrimmedData'
import groupFlags from './groupFlags'
import shuffleData from './shuffleData'
import Header from './Header'
import CardSet from './CardSet'

function GameBoard() {
    const [isLoading, setIsLoading] = useState(true)
    const [loadingError, setLoadingError] = useState(null)
    const [allFlags, setAllFlags] = useState([])
    const [currentFlags, setCurrentFlags] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selected, setSelected] = useState([])
    const [bestScore, setBestScore] = useState(0)

    // Fetch data, group into 12 each and store it in allFlags.
    useEffect(() => {
        async function fetchFlagsData() {
            try {
                const data = await fetchTrimmedData()
                if (data.length === 0) {
                    throw new Error(
                        'The flags could not be loaded. Please try again later.'
                    )
                }
                const groupedFlags = groupFlags(data, 12)
                setAllFlags(groupedFlags)
            } catch (error) {
                console.error('Error in fetchFlagsData: ', error)
                setLoadingError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchFlagsData()
    }, [])

    // Rotate flag group by round
    useEffect(() => {
        if (currentIndex > allFlags.length) {
            setCurrentIndex(0)
        }
        setCurrentFlags(allFlags[currentIndex])
    }, [allFlags, currentIndex])

    // If current round has the best score, update bestScore state.
    function updateBestScore() {
        if (bestScore < selected.length) {
            setBestScore(selected.length)
        }
    }

    // On click, take flag name and check if it exists in selected state.
    function handleCardClick(name) {
        const isSelected = selected.includes(name)
        if (!isSelected) {
            setSelected((prev) => [...prev, name])
            setCurrentFlags((prev) => shuffleData(prev))
        } else {
            setSelected([])
            updateBestScore()
            setCurrentIndex((prev) => prev + 1)
        }
    }

    //TODO: add reload function to add to H1
    return (
        <>
            <Header currentScore={selected.length} bestScore={bestScore} />
            <CardSet flagsData={currentFlags} clickHandler={handleCardClick} />
            {isLoading && <p className="gameboard__message">Loading...</p>}
            {loadingError && (
                <p className="gameboard__message">{loadingError}</p>
            )}
        </>
    )
}

export default GameBoard
