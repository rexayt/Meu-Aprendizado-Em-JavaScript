const NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in NUMS) {
    if (x == 5) {
        console.log('\n')
        break
    }
    console.log(`${x} = ${NUMS[x]}`)
}

for (y in NUMS) {
    if (y == 5) continue
    console.log(`${y} = ${NUMS[y]}`)
}

externo:
for (a in NUMS) {
    for (b in NUMS){
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim!')