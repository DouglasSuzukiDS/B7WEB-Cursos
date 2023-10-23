'use client'

import { CustomButton } from "@/components/CustomButton"

const Page = () => {
  const handleButton1 = () => {
    alert('ok')
  }
  const handleButton2 = () => alert('Botão 02')
  const handleButton3 = () => alert('Botão 03')
  
  return(
    <div className="w-screen h-screen flex justify-center items-center">
      <CustomButton label="Clique 01" onClick={ handleButton1 } />

      <CustomButton label="Clique 02" onClick={ handleButton2 } />

      <CustomButton label="Clique 03" onClick={ handleButton3 } />


    </div>
  )
}

export default Page