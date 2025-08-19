const body = document.querySelector('body')

const xml = new XMLHttpRequest()
const URL = 'https://api.github.com/users/mohd-saif-1850'
xml.open('GET',URL)
xml.onreadystatechange = () => {
    console.log(xml.readyState);
    if(xml.readyState === 4){
        const data = JSON.parse(xml.responseText);
        body.innerHTML = `
        <img src="${data.avatar_url}" alt="photo">
        `
    }
}
xml.send()



