const body = document.querySelector('body')
const white = document.querySelector('.white')
const grey = document.querySelector('.grey')
const green = document.querySelector('.green')
const red = document.querySelector('.red')
const h3 = document.querySelector('h3')

white.addEventListener('click',() => {
    body.style.backgroundColor = 'white'
    body.style.color = 'black'
    h3.style.color = 'black'
})
grey.addEventListener('click',() => {
    body.style.backgroundColor = 'grey'
    body.style.color = 'white'
    h3.style.color = 'yellow'
})
green.addEventListener('click',() => {
    body.style.backgroundColor = 'green'
    body.style.color = 'white'
})
red.addEventListener('click',() => {
    body.style.backgroundColor = 'red'
    body.style.color = 'white'
})