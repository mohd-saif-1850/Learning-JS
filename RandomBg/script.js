const body = document.querySelector('body')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')

const arr = ['red','green','grey','yellow','blue','cyan','orange','purple','pink','brown','black','white','teal','lime','indigo','violet','gold','silver','maroon','navy','turquoise','coral','salmon','chocolate','beige','khaki','lavender','magenta','plum','seagreen','tomato'];

const changeBg = () => {
    const bg = Math.floor(Math.random() * arr.length)
    body.style.backgroundColor = arr[bg]
}

let setBg;
start.addEventListener('click',() => {
    changeBg()
    setBg = setInterval(changeBg,2000)
})

stop.addEventListener('click',() => {
    clearInterval(setBg)
})