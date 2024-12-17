import { useState } from "react"
import { getFact } from "../../api"


export const YearFactsPage = () => {
  const [jojo, screen] = useState('')
  const  [bild, shadow] = useState('')
   
  const l = async (e) =>{
    e.preventDefault()
  const r = await getFact(`${jojo}/year`)
  shadow(r.text)
  }
 
  return (
    <div className="bg-blue-900 w-full min-h-screen pt-[200px]  flex flex-col items-center">
      <div className="bg-blue-900 shadow-xl shadow-blue-800 w-full  md:w-[900px] p-6 mb-8">
        <p className="text-[17px] text-center text-white">
        In this page you can get facts related to math. You can write any number you want. Let's try it now.
        </p>
      </div>

      <div className="bg-blue-900 shadow-xl shadow-blue-800  md:w-[300px] sm:w-[300px] xl:w-[300px] w-[300px] p-4">
        <form className="space-y-4" onSubmit={l}>
          <input
               onChange={(e)=>screen(Number(e.target.value))}
            number=''
            className="w-full p-2 rounded-md border border-gray-300 "
            placeholder="year"
          />
          
        <div className="group">
        <button
            type=""
            className="w-full p-2  group-hover:text-black  bg-blue-500 text-white rounded-md hover:bg-blue-800"
          >
            Send
          </button>
        </div>
        </form>
        {bild &&  <p>{bild}</p>}
      
      </div>
    </div>
  )
}
