/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect } from "react";

async function downloadImage(imageSrc) {
  const image = await fetch(imageSrc)
  const imageBlog = await image.blob()
  const imageURL = URL.createObjectURL(imageBlog)

  const link = document.createElement('a')
  link.href = imageURL
  link.download = '48451515848'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}


function Card({ previewURL, views, downloads, likes, user, userImageURL }) {



  return (
    <div className="w-auto h-auto py-4 px-8 rounded-md bg-zinc-50 flex flex-col gap-5 shadow-md shadow-zinc-400 ">
      <img src={previewURL} alt="" className=" w-auto h-48" />
      <div>
        <p>
          views :{views}
        </p>
        <p>
          downloads :{downloads}
        </p>
        <p>
          likes :{likes}
        </p>
      </div>
      <div className="flex gap-5 justify-between items-center">
        <div className="flex gap-4 items-center">
          <img src={userImageURL} alt="" className="z-10 w-10 h-10 rounded-full" />
 
        </div>
          <a download  onClick={(e) => {
            downloadImage(previewURL)
          }}   className="text-red-400 cursor-pointer font-bold">Download</a>
      </div>
    </div>
  )
}

export default Card