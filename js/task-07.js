const inputChange = document.querySelector('#font-size-control')
const textSpan = document.querySelector('#text')

inputChange.addEventListener('input', event => {
    text.style.fontSize = `${event.target.value}px`
});





