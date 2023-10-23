export default function Home() {
  return (
    <div className="flex flex-col gap-3 mx-3 sm:flex-row">
      <div className="grow rounded-md bg-blue-500 text-white p-4">01</div>
      <div className="order-first grow rounded-md bg-green-500 text-white p-4">02</div>
      <div className="grow rounded-md bg-blue-500 text-white p-4">03</div>
      <div className="grow rounded-md bg-blue-500 text-white p-4">04</div>
    </div>
  )
}
