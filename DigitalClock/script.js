const time = document.querySelector('.time')
const date = document.querySelector('.date')

const URL = `https://api.openweathermap.org/data/2.5/weather?q=Delhi&APPID=02cf432389a840e9306abb07cc3d9066`

const weather = async () => {
    const data = await fetch(URL).then(res => res.json()).then(data => data)
    console.log(data.main.temp);
}
weather()
   
    const clock = () => {
    const now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()

        // For Hours
    if(hours < 10){
        hours = '0' + hours;
    }
    // Here in both if statement there is no need for else statement 
    if(hours > 12){
        hours = hours - 12;
        if(hours < 10){
            hours = '0' + hours;
        }
    }
    // Confusion Ho rha tha hours So i prefer if-else statement
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    const currentTime = `${hours}:${minutes}:${seconds}`
    time.innerText = currentTime;
}
clock();
setInterval(clock,1000);


const currentDate = () => {
    const newDate = new Date()
    let day = newDate.getDay()
    const arr = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    day = arr[day]
    
    let todaysDate = newDate.getDate()
    
    let month = newDate.getMonth()+1
    
    let year = newDate.getFullYear()

    const currentDay = `${day}`
    const currentDate = `${todaysDate}-${month}-${year}`

    date.innerText = `${currentDay} ${currentDate}`;
    
}
currentDate()