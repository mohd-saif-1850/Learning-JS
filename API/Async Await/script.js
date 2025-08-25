
const URL = 'https://api.github.com/users/mohd-saif-1850'

const data = async () => {
    try {
        const dataCheck = await fetch(URL)
        let getData = await dataCheck.json()
        console.log(getData.login);
        
    } catch (error) {
        console.log(error);
        
    }
}

data()