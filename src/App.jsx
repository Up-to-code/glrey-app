/* eslint-disable no-global-assign */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import Card from "./components/Card";
import Contaniers from "./components/Contaniers";
import { PageNaumber } from "./Context/Contextpages";

function App() {
    const [Input, setInput] = useState("")
    const [Datat, setDatat] = useState(null)
    const [q, setq] = useState("")
    const Naumber = useContext(PageNaumber)
    const Search = (e) => {
        const S = Input.split(" ")
        let text = ""
        S.map((e, index) => {
            if (index < S.length - 1) {
                text += e + "+"
            } else {
                text += e
            }
        })
        setq(text)
        console.log(text)
    }
    useEffect(() => {
        async function GetData() {
            try {
                const res = await fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${q}&image_type=photo&page=${Naumber.Naumber}`)
                const data = await res.json()
                setDatat(data)
            } catch (error) {
                console.log(error)
            }
        }
        GetData()
    }, [Naumber.Naumber, q]);
    return (
        <Contaniers>
            <div className="-zinc-100  h-full w-full">
                <div className="flex gap-5 justify-end items-center mt-24 w-full">

                    <input type="text" className=" w-full border border-zinc-300  py-2 px-4 focus:border-red-500" onChange={(e) => setInput(e.target.value)} onDragEnter={Search} />
                    <button className=" bg-red-500 rounded  text-white font-bold py-2 px-5" onClick={Search} >
                        Search
                    </button>

                </div>
                <div>
                    <div className=" py-5 px-5 font-bold text-xl">
                        <p>
                            total  : <span className="ml-5"> {Datat && Datat.total} </span>
                        </p>
                        <p>
                            totalHits  :  <span className="ml-5">   {Datat && Datat.totalHits} </span>
                        </p>
                    </div>
                    <div className="grid grid-cols-3 justify-between items-center gap-10">
                        {
                            Datat && Datat.hits.map((e) => {
                                return <Card key={e.id}
                                    downloads={e.downloads}
                                    likes={e.likes}
                                    previewURL={e.previewURL}
                                    user={e.user}
                                    userImageURL={e.userImageURL}
                                    views={e.views}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </Contaniers>
    )
}

export default App