import React, { useState } from 'react'
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next'
import { MdOutlineTaskAlt } from 'react-icons/md';
import track from '/public/track.jpg';
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const Label = () => {
  const { t } = useTranslation()

  const [openInput, setOpenInput] = useState(false)

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const sendTelegram = async (e) => {
    e.preventDefault()

    const token = '8048022255:AAF4N2viuiqbozSfNUwd1M6RhcIjz4AFAxI'
    const chatId = 7337816028
    const message = `📩 Новая заявка с сайта:\n\n👤 Имя: ${name}\n📱 Телефон: ${phone}`

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message }),
    })

    setName('')
    setPhone('')
    alert('Отправлено!')
  }

  return (
    <>

      <section style={{
        backgroundImage: `url(${track})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center ',
      }}
        className='overflow-hidden text-gray-100  h-screen  sm:px-10  flex flex-col sm:flex-row items-center justify-center lg:justify-between'>
        <div className='flex flex-col items-center mx-10  lg:mx-0 '>

          <h1 className=' text-start text-4xl font-bold px-5 lg:ml-10 pb-2 xl:w-[500px] lg:text-6xl mb-3 '>{t("label_title")} <h2 className='mt-3 lg:text-8xl'>{t("pmr")}</h2> </h1>
          <div className='gap-5 mt-2 hidden sm:flex lg:hidden xl:hidden items-center justify-center  '>
            <div className='h-[70px] w-[100px] bg-gray-500 flex items-center justify-center rounded-full hover:scale-105 duration-300'><Link to=""><FaInstagram className='h-[60px] w-[60px]' /></Link></div>
            <div className='h-[70px] w-[110px] bg-gray-500 flex items-center justify-center rounded-full hover:scale-105 duration-300' ><Link to=""><FaTelegramPlane className='h-[60px] w-[60px]' /></Link></div>
            <div className='h-[70px] w-[100px] bg-gray-500 flex items-center justify-center rounded-full hover:scale-105 duration-300'><Link to=""><BsTelephoneFill className='h-[60px] w-[50px]' /></Link></div>
            <div><Link to=""></Link></div>
          </div>
        </div>

        <div className='flex flex-col lg:mr-20 sm:flex backdrop-blur-sm h-[250px] border rounded-xl '>
          <div className='flex flex-col text-center mt-5 '>
            <p className='flex items-center justify-center gap-2 p-1 my-2 font-semibold text-xl  '><MdOutlineTaskAlt />{t("label_special")}</p>
            <p className='flex items-center justify-center gap-2 p-1 my-2 font-semibold text-xl '><MdOutlineTaskAlt />{t("label_subtitle_1")}</p>
            <p className='flex items-center justify-center gap-2 p-1 my-2 font-semibold text-xl  '><MdOutlineTaskAlt />{t("label_subtitle_3")}</p>
            <p className='flex items-center justify-center gap-2 p-1 my-2 font-semibold text-xl'><MdOutlineTaskAlt />{t("label_subtitle_2", { years: 10 })}</p>
            <div className='backdrop-blur-sm'>
            
              <button onClick={() => setOpenInput(!openInput)}
                className='mt-[50px] m-5  py-5 px-10 border  bg-black/20 backdrop-blur-sm text-white text-3xl text-semibold whitespace-nowrap  rounded-xl hover:scale-110 duration-300 cursor-pointer'>
                <span className='text-white'>{t("label_button")}</span>
              </button> 
            </div>
          </div>
        </div>
        {openInput && (
          <div
            className='fixed inset-0 z-250 bg-black/50  duration-200 backdrop-blur-sm flex items-center justify-center'
            onClick={() => setOpenInput(false)}>
            <div
              className='bg-gray-200 w-[90%] max-w-xl h-[500px] p-6 rounded-xl shadow-xl relative'
              onClick={(e) => e.stopPropagation()}>
              <button
                className='absolute top-3 right-3 text-3xl text-black hover:text-black cursor-pointer'
                onClick={() => setOpenInput(false)}
              >
                <IoClose />
              </button>
              <div className='flex flex-col justift-center max-w-md mx-auto space-y-4 p-4  gap-10'>
                <div className='flex items-center justify-between'>

                  <h1 className='text-3xl font-bold text-black mb-[-20px]'>{t("label_button")}</h1>
                  <img
                    className='h-[100px] w-[150px] pt-5'
                    src="logo.tif.png" alt="logo" />
                </div>
                <form onSubmit={sendTelegram} className="max-w-md bg-gray-200 mx-auto space-y-6 p-4  rounded-lg shadow-2xl">
                  <input
                    type="text"
                    placeholder={t("your_name")}
                    className="w-full p-2 border text-black font-black border-gray-600 rounded"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    type="tel"
                    placeholder={t("your_phone")}
                    className="w-full  p-2 text-black font-black border border-gray-600 rounded"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <button type="submit" className="bg-gray-400 text-black px-5 py-3 border border-gray-600 rounded-lg cursor-pointer hover:text-black hover:font-bold duration-200 ">{t("submit_button")}</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Label
