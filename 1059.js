var input = require('fs').readFileSync('/dev/stdin', 'utf8');
for (let i = 1; i<=100; i++){
    if (i % 2 === 0){
        console.log(i)
    }
}
