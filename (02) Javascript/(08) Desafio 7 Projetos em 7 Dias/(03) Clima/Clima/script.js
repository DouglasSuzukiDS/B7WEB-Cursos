document.querySelector('.busca').addEventListener('submit', async (event) => {
   event.preventDefault()

   let input = document.querySelector('#searchInput').value

   if(input !== '') {
      clearInfo()
      showWarning('Carregando ...')
      // 20M
      // Criar conta em https://openweathermap.org e procurar sua key 
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=122a5a0cf48defd877576ff4518e556c&units=metric&lang=pt_br`
         // encodeURI = Serve pra transforma a string em formado aceito pela URL
      
         let results = await fetch(url) // Faz a consulta
         let json = await results.json() // Recebe o resultado
         // console.log(json)

         if(json.cod === 200) {
            showInfo({
               name: json.name,
               country: json.sys.country,
               temp: json.main.temp,
               tempIcon: json.weather[0].icon,
               windSpeed: json.wind.speed,
               windAngle: json.wind.deg
            })
         } else {
            clearInfo()
            showWarning('Não encontramos esta localização')
         }
   } else {
      clearInfo()
   } 
})

function showInfo(json) {
   showWarning('')

   document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`

   document.querySelector('.tempInfo').innerHTML = `${json.temp} <sub>ºC</sub>`

   document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`

   document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)

   document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle - 90}deg)`

   document.querySelector('.resultado').style.display = 'block'
}

function clearInfo() {
   showWarning('')
   document.querySelector('.resultado').style.display = 'none'
}

function showWarning(msg) {
   document.querySelector('.aviso').innerHTML = msg
}