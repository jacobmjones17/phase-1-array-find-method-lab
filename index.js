function superbowlWin(record){
    const result = record.find(r => r.result === "W");
    if (result) {
        return result.year 
    } 
    else return undefined
}

// function superbowlWin(record){
//     for (const r of record) {
//         if (r.result === "W"){
//         return r.year
//     }
//     else return undefined
// }
// }
    