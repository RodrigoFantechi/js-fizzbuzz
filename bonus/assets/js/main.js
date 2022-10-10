// first type
const body = document.querySelector('body');
body.innerHTML += `<div class="container py-5 text-center"></div>`;
// second type
let title = `<h1 class="text-white mb-5">FizzBuzzDOM</h1>`;
const container = document.querySelector('.container')
container.insertAdjacentHTML('afterbegin', title);
// third type
const row = document.createElement('div');
row.classList.add('row','g-3');
container.append(row);


for (let i = 1; i <= 100; i++) {

    const col = document.createElement('div');
    col.className = 'col d-flex justify-content-center align-items-center'; /*  or col.classList.add('col', 'd-flex', 'justify-content-center', 'align-items-center'); */
    const square = document.createElement('div');
    square.className = 'square fw-bold';
    row.append(col);
    col.append(square);

    let x = i;

    if ((i % 3) === 0 && (i % 5) === 0) {
        square.className += ' fizz_buzz'; /* or square.classList.add('fizz_buzz'); */
        x = 'fizz-buzz';
    } else if ((i % 3) === 0) {
        square.className += ' fizz';
        x = 'fizz';
    } else if ((i % 5) === 0) {
        square.className += ' buzz';
        x = 'buzz';
    } else {
        square.className += ' number';

    }

    square.innerHTML = x; /* or square.append(x) */
}