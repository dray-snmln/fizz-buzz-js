const make = (word, color) => {
    const newItem = document.createElement('li');
    const getOl = document.querySelector('#list')
    newItem.classList.add(color);
    newItem.innerHTML = word;
    getOl.appendChild(newItem);
}

for (let counter = 1; counter <= 100; counter++) {
    if      (counter % 15 === 0) make('FizzBuzz', 'blue');
    else if (counter % 3 === 0) make('Fizz', 'blue');
    else if (counter % 5 === 0) make('Buzz', 'blue');
    else make('', 'red');
}