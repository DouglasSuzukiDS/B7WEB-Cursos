'use client'

const Page = () => {
  const handleClick = () => {
    alert('Ok')
  }
  
  return(
    <div className="w-screen h-screen flex justify-center items-center">
      <button 
        className="p-3 bg-blue-700 text-white rounded-md"
        onClick={ handleClick }>Clique</button>
    </div>
  )
}

export default Page