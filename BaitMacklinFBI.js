
/**
 * Simulates a typical round of CSGO gameplay and helps you determine when to peek based on the number of teammates and enemies remaining.
 *
 *      Note: This is an objectively correct answer and as such you should not deviate from its guidance. The advice from this script serves all
 *      ranks, from Silver to Global Elite. Script author does not take responsibility for teammate reactions to choices made based on guidance provided by this script.
 *
 * @param {number} teammates - The number of teammates actually playing the round.
 * @param {number} enemiesRemaining - The number of enemies remaining.
 */
let baitMacklinFBI = (teammates, enemiesRemaining) => {
    let tempArr = [teammates, enemiesRemaining, "nuttin"]
    console.log("\x1b[1m%s\x1b[0m", "A new round is starting...")
    while (teammates > 0 && enemiesRemaining > 0) {
        let nextPeek = ((teammates * 6) + (enemiesRemaining * 6))
        console.log("\x1b[34m%s\x1b[0m", `Waiting ${nextPeek} seconds before peeking...`)
        let randomIndex = Math.floor(Math.random() * tempArr.length)
        if (randomIndex === 0) {
            console.log("\x1b[32m%s\x1b[0m", "A teammate has been killed!")
            teammates--
        } else if (randomIndex === 1) {
            console.log("\x1b[31m%s\x1b[0m", "An enemy has been killed!")
            enemiesRemaining--
        } else {
            console.log("\x1b[35m%s\x1b[0m", "Go ahead and keep hiding, it's not your time yet!")
        }
        nextPeek-=2

    }
    if (teammates === 0 && enemiesRemaining >= 1) {
        console.log("\x1b[35m%s\x1b[0m", "You're the final player!")
        console.log("\x1b[33m%s\x1b[0m", `"It's my time to shine, peeking now!"`)
    }
    else if (teammates >= 0 && enemiesRemaining === 0) {
        console.log("\x1b[1m%s\x1b[0m", "'You didn't help at all that round.'")
        console.log("\x1b[36m%s\x1b[0m", '"I was playing for info, bro."')
    }
}
baitMacklinFBI(4, 5)


/**
 *
 * Original Idea Code:
 *
 * // const aiBaitMacklinFBI = (teammates, enemiesRemaining) => ((teammates, enemiesRemaining) => teammates > 0 && enemiesRemaining > 0 ? `Waiting ${teammates * 2} seconds before peeking...`: `Peeking now!`)(teammates, enemiesRemaining)
 *
 * /*let BaitMacklinFBI = (teammates, enemiesRemaining, waitTime) => {
 *     return waitTime(teammates, enemiesRemaining)
 *
 *     const waitTime = (teammates, enemiesRemaining) => {
 *         return teammates > 0 && enemiesRemaining > 0 ? teammates * 2 : 0
 *     }
 * }
 console.log(aiBaitMacklinFBI(5, 5))
 */