import { useContext } from "react"
import { PageNaumber } from "../Context/Contextpages"

function NextPage() {
    const Naumber = useContext(PageNaumber)

const Back = () => { 
    Naumber.setNaumber(--Naumber.Naumber)

 }
 const Next = () => { 
    Naumber.setNaumber(++Naumber.Naumber)
  }
  return (
    <div className="my-20 flex justify-center items-center gap-10">
        <button onClick={Back} className="py-2 px-5 bg-red-500 text-white font-bold rounded border-none">
            Back
        </button>
        <button onClick={Next} className="py-2 px-5 bg-red-500 text-white font-bold rounded border-none">
            Next
        </button>
    </div>
  )
}

export default NextPage