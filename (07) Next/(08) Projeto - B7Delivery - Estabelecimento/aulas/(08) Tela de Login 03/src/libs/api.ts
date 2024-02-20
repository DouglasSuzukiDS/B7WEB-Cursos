export const api = {
   login: async(email: string, password: string): Promise<{ error: string, token?: string }> => {
      return new Promise(resolve => { 
         setTimeout(() => {
            if(email !== 'email@email.com') {
               resolve({
                  error: 'Email e/ou senha não batem.'
               })
            } else {
               resolve({
                  error: '',
                  token: '123'
               })
            }
         }, 1000)
      })
   }
}