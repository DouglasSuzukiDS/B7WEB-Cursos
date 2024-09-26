let baseURL = 'https://economia.awesomeapi.com.br/json'

export const getUSD = async() => {
   try {
      let url = `${ baseURL }/last/USD-BRL`
      const req = await fetch(url)
      const json = await req.json()
   
      if(json.USDBRL) {
         return JSON.parse(json.USDBRL.ask)
      }

      return 0
   } catch(error) {
      return 0
   }
}

export const getEUR = async() => {
   try {
      let url = `${ baseURL }/last/EUR-BRL`
      const req = await fetch(url)
      const json = await req.json()
   
      if(json.USDBRL) {
         return JSON.parse(json.EURBRL.ask)
      }

      return 0
   } catch(error) {
      return 0
   }
}