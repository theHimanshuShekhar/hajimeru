import Head from 'next/head'

export default function Home() {
  return (
    <div className="w-100 flex h-screen flex-col justify-start space-y-5 overflow-auto bg-gray-900 p-4 text-white">
      <div className="flex justify-between">
        <h1 className="text-4xl ">Hajimeru</h1>
        <h1 className="">User</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="w-3xl rounded-lg border p-8 shadow-xl">Time</div>
        <div className="w-3xl rounded-lg border p-8 shadow-xl">Daily Quote</div>
        <div className="w-3xl rounded-lg border p-8 shadow-xl">Weather</div>
        <div className="w-3xl rounded-lg border p-8 shadow-xl">News</div>
        <div className="w-3xl rounded-lg border p-8 shadow-xl">
          Stock / Crypto
        </div>
        <div className="w-3xl rounded-lg border p-8 shadow-xl">To Do</div>
      </div>
    </div>
  )
}
