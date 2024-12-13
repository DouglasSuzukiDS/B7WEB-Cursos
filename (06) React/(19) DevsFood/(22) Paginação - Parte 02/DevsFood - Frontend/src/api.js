let BASE = 'https://api.b7web.com.br/devsfood/api'
export const api = {
   getCategories: async() => {
      const res = await fetch(`${BASE}/categories`)
      const json = await res.json()

      return json
   },
   getProducts: async() => {
      const res = await fetch(`${BASE}/products`)
      const json = await res.json()

      return json
   }
}