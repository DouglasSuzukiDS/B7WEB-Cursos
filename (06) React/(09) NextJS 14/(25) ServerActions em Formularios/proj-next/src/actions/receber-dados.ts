'use server'

export async function receberDados(formData: FormData) {
   "use server"
   const name = formData.get('name')
   const age = formData.get('age')

   console.log(`Name: ${name} - Age: ${age}`)
}