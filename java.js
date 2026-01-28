let sum = 0      
const m = 1000

for (let n = 1; n < m; n++) {
    if (n % 3 === 0 || n % 5 === 0) {
        sum = sum + n
    }
}

console.log(sum)

let sum2 = 0
for( let i=1; i<788000; i+=2) {
    sum2+=i * i;
}
console.log(sum2);