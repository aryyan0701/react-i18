import React from 'react'
import Navbar from './components/Navbar'
import { useTranslation } from 'react-i18next'

function App() {

  const {t} =useTranslation()

  return (
    <div>
      <Navbar/>
      <div className='flex justify-center items-start text-center w-full h-screen p-20'>
        <h1 className='text-4xl font-serif font-bold'>{t("greeting")}</h1>
      </div>
    </div>
  )
}

export default App