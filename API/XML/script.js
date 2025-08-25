const body = document.querySelector('body')

const xml = new XMLHttpRequest()
const URL = 'https://api.github.com/users/hashimkhan1230'
xml.open('GET',URL)
xml.onreadystatechange = () => {
    console.log(xml.readyState);
    if(xml.readyState === 4){
        const data = JSON.parse(xml.responseText);
        body.innerHTML = `
        <img src="${data.avatar_url}" alt="photo">
        <p>Repos : ${data.public_repos} </p>
        `
    }
}
xml.send()



