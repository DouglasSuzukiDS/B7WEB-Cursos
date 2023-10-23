let BASE = 'https://api.b7web.com.br/devsfood/api'
export const api = {
   getCategories: async() => {
      const res = await fetch(`${BASE}/categories`)
      const json = await res.json()

      return json
   },
   getProducts: async(category, page, search) => {
      let fields = {}

      if(category !== 0) {
         fields.category = category
      }

      if(page > 0) {
         fields.pages = page
      }

      if(search !== '') {
         fields.search = search
      } 

      let queryString = new URLSearchParams(fields).toString()
         // Monta a url com parametros => category=2&page=1&search=bolo

      const res = await fetch(`${BASE}/products?${queryString}`)
      const json = await res.json()

      return json
   }
}