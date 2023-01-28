import React from "react"

const NavigationBar = () => {
  return (
    <div className="flex justify-between px-4 py-5 border-b border-solid text-white bg-cyan-500">
      <h1 className="text-4xl">Blog of Babs</h1>
      <div className="flex space-x-5">
        <button className="btn">Log In</button>
        <button className="btn">Sign Up</button>
      </div>
    </div>
  )
}

export default NavigationBar
