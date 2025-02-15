function groupFlags(array, groupSize) {
    if (groupSize > 16) {
        console.log('Max group size allowed is 16. Defaulting to 16.')
        groupSize = 16
    }
    const outerArray = []
    for (let i = 0; i < array.length; i += groupSize) {
        let groupedFlags = array.slice(i, i + groupSize)

        // Fill from the start when the last array can not fill group size
        if (groupedFlags.length < groupSize) {
            const oddsToFill = groupSize - groupedFlags.length
            const fillerFromStart = outerArray[0].slice(0, oddsToFill)
            groupedFlags = [...groupedFlags, ...fillerFromStart]
        }
        outerArray.push(groupedFlags)
    }
    return outerArray
}

export default groupFlags
