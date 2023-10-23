export const Conditional01 = () => {
   const date = new Date()

   const day = date.getDate() < 9 ? `0${date.getDate()}` : date.getDate()
   const month = date.getMonth() < 9 ? `0${1 + date.getMonth()}` : 1 + date.getMonth()
   const year = date.getFullYear()
   const today = `${day}/${month}/${year}`

   let hour = date.getHours() < 9 ? Number('0' + date.getHours()) : date.getHours()
   let minutes = date.getMinutes() < 9 ? Number('0' + date.getMinutes()) : date.getMinutes()
   let hours = `${hour}:${minutes}`

   return (
      <div className="flex flex-col justify-center item-center text-center">
         
         { hour < 12 && <h1>Bom dia</h1> }
         { hour < 18 && <h1>Bom tarde</h1> }
         { hour < 23 && <h1>Bom noite</h1> }
         
         <h1>{ today }</h1>
         <h1>{ hours }</h1>
      </div>
   )

}