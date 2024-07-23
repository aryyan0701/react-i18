import React from 'react'
import Navbar from './components/Navbar'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation();

  const {line1, line2}= t("descriptions");
 

  return (
    <div>
      <Navbar />
      <div className='flex flex-col justify-start space-y-5 items-center text-center w-full h-screen p-20'>
        <h1 className='text-5xl font-mono font-bold'>{t("greeting")}</h1>
        <p className='text-2xl font-mono font-medium'>{line2}</p>
      </div>
    </div>
  )
}

export default App
