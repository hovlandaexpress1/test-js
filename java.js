let sum = 0      
const m = 1000

for (let n = 1; n < m; n++) {
    if (n % 3 === 0 || n % 5 === 0) {
        sum = sum + n
    }
}
neg
console.log(sum)

let sum2 = 0
for( let i=1; i<788000; i+=2) {
    sum2+=i * i;
}
console.log(sum2);


//upgift 2
const MAX = 4_000_000;

let a = 0;
let b = 1;

while (a <= MAX) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;
}
