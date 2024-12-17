import {  useState } from "react";
import { getFact } from "../../api";

    
     
export const DateFactsPage = () => {
  const [month,setMonth] = useState('')
  const [day,setDay] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

 
 
  const onSubmitFrom = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await getFact(`${month}/${day}/date`)
    setResult(res.text)
  }



  return (
    <div className="bg-blue-900 w-full min-h-screen pt-[200px]  flex flex-col items-center">
      <div className="bg-blue-900 shadow-xl shadow-blue-800 w-full  md:w-[900px] p-6 mb-8">
        <p className="text-[17px] text-center text-white">
          In this page you can get facts related to dates. You are only allowed to write a month and a day in numbers: month (1-12) and day (1-31). Let's find out what happened on your date of birth.
        </p>
      </div>

      <div className="bg-blue-900 shadow-xl  shadow-blue-800  md:w-[300px] sm:w-[300px] xl:w-[300px] w-[300px] p-4">
        <form className="space-y-4" onSubmit={onSubmitFrom}>
          <input
            type="text" 
            className="w-full p-2 rounded-md border border-gray-300 "
            placeholder="Month "
            onChange={(e)=>setMonth(Number(e.target.value))}
          />
          <input
            type=""
            className="w-full p-2 rounded-md border border-gray-300 "
            placeholder="Day "
            onChange={(e)=>setDay(Number(e.target.value))}
          />
          <div className="group">
          <button
          disabled={loading}
            type=""
            className="w-full p-2  group-hover:text-black   bg-blue-500 text-white rounded-md hover:bg-blue-800"
          >
            sent
            
          </button>
          {result  ?   <p>{result}</p> : loading ? <p>loading...</p> : null}
         
          </div>
        </form>
      </div>
    </div>
  );
};


