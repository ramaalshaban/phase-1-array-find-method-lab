// code your solution here

function superbowlWin(record) {
    let yearWin = record.find(record => record.result === 'W')
    return yearWin ? yearWin.year : undefined
}  