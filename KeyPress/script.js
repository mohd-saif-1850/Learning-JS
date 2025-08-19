const body = document.querySelector('body')

window.addEventListener('keydown',(e) => {
    body.innerHTML = `
    <div> 
        <p>Key : ${e.key === " " ? "Space" : e.key}</p>
        <p>Key Code : ${e.keyCode}</p>
        <p> ASCII : ${e.key.charCodeAt()}</p>
        <p>Code : ${e.code}</p>
    </div>
    `
})