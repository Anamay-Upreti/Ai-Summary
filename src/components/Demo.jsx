import { useState, useEffect } from "react"

import { copy, linkIcon, loader, tick } from "../assets"
import { CgEnter } from "react-icons/cg"
import { ImEnter } from "react-icons/im"
const Demo = () => {
  const [aritcle, setAritcle] = useState({
    url: '',
    summary: ''
});

const handleSubmit = async (e) =>{
  alert('Submitted')
}
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form className="justify-center relative flex w-full items-center"
        onSubmit={handleSubmit}>
          <img src={linkIcon} alt="link_icon"
          className="abosulte left-0 my-2 ml-3 w-5" />

          <input type="url" 
          placeholder="Enter A URL"
          value={aritcle.url}
          onChange={(e)=>setAritcle({
            ...aritcle, url: e.target.value
          })}
          required
          className="url_input peer"
          />
          <button
          type="submit"
          className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            <ImEnter/>
          </button>
        </form>
        {/* browse URL history */}

      </div>

      {/* display results */}

    </section>
  )
}

export default Demo