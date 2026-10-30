const heroSpan = document.querySelector("#hero")
const villainSpan = document.querySelector("#villain")
const resultSpan = document.querySelector("#result")
const fightBtn = document.querySelector("button")

const heroes = ['Lara Croft', 'Harry Potter', 'Luke Sskywalker', 'Superman', 'Garfield'];
const villains = ['Lord Voldemort', 'Darth Vader', 'Saruman', 'Joker', 'Cruella']
const weapons = ['plastic fork', 'divine rapier', 'flip-flop', 'magic wand', 'wooden sword', 'banana peel']

fightBtn.addEventListener("click", () => {
    const RandomHeroIndex = Math.floor(Math.random() * heroes.length)
    const randomHero = heroes[RandomHeroIndex]

    const randomHeroWeaponIndex = Math.floor(Math.random() * weapons.length)
    const randomHeroWeapon = weapons[randomHeroWeaponIndex]

    const RandomVillainIndex = Math.floor(Math.random() * villains.length)
    const randomVillain = villains[RandomVillainIndex]

    const randomVillainWeaponIndex = Math.floor(Math.random() * weapons.length)
    const randomVillainWeapon = weapons[randomVillainWeaponIndex]

    heroSpan.innerHTML = `Hero ${randomHero} is armed with a/an ${randomHeroWeapon}.`
    villainSpan.innerHTML = `Villain ${randomVillain} is armed with a/an ${randomVillainWeapon}.`

    const heroStrike = randomHero.length + randomHeroWeapon.length
    const villainStrike = randomVillain.length + randomVillainWeapon.length

    console.log(`Hero ${randomHero} is armed with a/an ${randomHeroWeapon}`)
    console.log(`Villain ${randomVillain} is armed with a/an ${randomVillainWeapon}`)
    console.log(`${randomHero} hit ${heroStrike}`)
    console.log(`${randomVillain} hit ${villainStrike}`)

    let resultMessage = ""

    if(heroStrike === villainStrike) {
        resultMessage = "Draw."
    } else if (heroStrike > villainStrike) {
        resultMessage = `${randomHero} defeats ${randomVillain}, and saves the day!`
    } else if (heroStrike < villainStrike) {
        resultMessage = `${randomVillain} defeats ${randomHero}. The dark side wins.`
    }

    resultSpan.innerHTML = resultMessage
})




// console.log(`Hero ${randomHero} is armed with a/an ${randomHeroWeapon}`)
// console.log(`Villain ${randomVillain} is armed with a/an ${randomVillainWeapon}`)

// const heroStrike = randomHero.length + randomHeroWeapon.length
// const villainStrike = randomVillain.length + randomVillainWeapon.length

// console.log(`${randomHero} hit ${heroStrike}`)
// console.log(`${randomVillain} hit ${villainStrike}`)

// if(heroStrike === villainStrike) {
//   console.log("Draw.")
// } else if (heroStrike > villainStrike) {
//   console.log(`${randomHero} defeats ${randomVillain}, and saves the day!`)
// } else if (heroStrike < villainStrike) {
//   console.log(`${randomVillain} defeats ${randomHero}. The dark side wins.`)
// }