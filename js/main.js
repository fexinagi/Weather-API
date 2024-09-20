const config = {
    name: 'Weather API',
    baseUrl: 'https://www.weatherapi.com/confirm.aspx?api_key=',
    apiKey: '4a93a1d9-add9-4224-8772-4a7b2966f40f',
}

const cityInput = document.querySelector('#cityInput')
const getWeatherButton = document.querySelector('#getWeatherButton')
const weather = document.querySelector('#weather')

getWeatherButton.addEventListener('click', getWeatherData)
async function getWeatherData() {
    const city = cityInput.value 
    if (!city) {
       alert('Enter city')
       return
    }
    try {

        const response = await fetch(`${config.baseUrl}${config.apiKey}&q=${city}`)
        if (!response.ok) {
            throw new Error('Weather not found')
        }
        const data = await response.json()
        displayWeatherData(data)
    } 
    
    catch (error) {
        alert('Weather not found') 
    }
}
function displayWeatherData(data) {
    weather.textContent = `Seher: ${data.location.name}, Temperatur: ${data.current.temp_c}°C`
}