async function fetchTrimmedData() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all')
        const flagsData = await response.json()
        return flagsData.map((item) => ({
            name: item.name.common,
            image: item.flags.svg,
        }))
    } catch (error) {
        console.error('Error fetching flags from API:', error)
        return []
    }
}

export default fetchTrimmedData
