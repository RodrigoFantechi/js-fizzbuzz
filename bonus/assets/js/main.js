
const row = document.querySelector('.row');

for (let i = 1; i <= 100; i++) {
    
    const col = document.createElement('div');
    col.className = 'col d-flex justify-content-center align-items-center';
    const square = document.createElement('div');
    square.className = 'square fw-bold';
    row.append(col);
    col.append(square);
    
    let x = i;

    if ((i % 3) === 0 && (i % 5) === 0) {
        square.className += ' fizz_buzz';
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

    square.innerHTML = x;
}