import React from 'react'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-300 to-emerald-400 text-white py-6 shadow-lg">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-center">
        🧠 Quiz App
      </h1>
      <p className="text-sm sm:text-base text-center mt-1 font-light text-green-100">
        Ready to test your knowledge? Let’s begin!
      </p>
    </header>
  )
}

export default Header
