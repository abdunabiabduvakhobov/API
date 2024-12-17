import { useState } from "react"
import { getFact } from "../../api"
export const RandomFactsPage = () => {
  const [factType, setFactType] = useState('')
  const [result, setResult] = useState('')

  const liv = async (e) => {
    e.preventDefault()
    const ri = await getFact(`random/${factType}/`)
    setResult(ri.text)
  }
 
  return (
    <div>
      <div className="bg-blue-900 w-full min-h-screen pt-[200px]  flex flex-col items-center">
        <div className="bg-blue-900 shadow-xl shadow-blue-800 w-full  md:w-[900px] p-6 mb-8">
          <p className="text-[17px] text-center text-white">
            In this page you can get facts related to math. You can write any number you want. Let's try it now.
          </p>
        </div>

        <div className="bg-blue-900 shadow-xl shadow-blue-800  md:w-[300px] sm:w-[300px] xl:w-[300px] w-[300px] p-4">
          <form className="space-y-4" onSubmit={liv}>
            <p className="text-center text-white">Choose the type of fact</p>

            <select onChange={(e) => setFactType((e.target.value))} id="" className="py-2 px-5  rounded-md bg-blue-500 text-white focus:outline-none w-[100px] ml-20 ">
              <option  value="math">Math</option>
              <option  value="year">Year</option>
            </select>
            <div className="group">
              <button
                type=""
                className="py-2 px-5 rounded-md  group-hover:text-black   bg-blue-500 text-white focus:outline-none w-[100px] ml-20 hover:bg-blue-800"
              >
                Send
              </button>
              {result && <p>{result}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
