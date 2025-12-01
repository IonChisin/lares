import React, { forwardRef } from 'react'
import { Link } from 'react-router';
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { SlUserFollowing } from "react-icons/sl";
import { BsClockHistory } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";



const Footer = forwardRef(() => {
  const { t } = useTranslation()

  return (
    <footer className='  bg-gray-500 flex flex-col   items-center justify-between  border-t border-gray-500  py-5 px-12 gap-5'>

      <div id='contacts' className=' bg-gray-700 shadow-2xl text-white p-2 pb-5 items-center justify-center  mt-[-75px] px-10 z-100'>
        <div className='flex flex-col items-center pb-5'>
          <h2 className='font-bold sm:text-2xl'>{t("contact")}</h2>
          <span className='h-0.5 w-15  bg-amber-50 mb-2'></span>
          <p className='text-[8px] sm:text-sm'>{t("contact_us")}</p>
        </div>
        <div className='grid grid-cols sm:grid-cols-3 gap-5 lg:gap-35'>
          <div className='flex flex-col items-center gap-1'>
            <BsClockHistory className='h-7 w-7 bg-gray-500 p-1 rounded-full' />
            <h2>{t("workScheduleTitle")}</h2>
            <p>
              {t("workDays")}
            </p>
            <p>{t("saturday")}</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <BsTelephoneFill className='h-7 w-7 bg-gray-500 p-1 rounded-full' />
            <a href='tel:+373 77996886' className='hover:text-gray-400'>{t("phone1")}</a>
            <a href='tel:+373 77951717' className='hover:text-gray-400'>{t("phone2")}</a>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <SlUserFollowing className='h-7 w-7  bg-gray-500 p-1 rounded-full' />
            <div className='flex flex-col items-center'>
              <span className='text-[8px]'>Подпишись:</span>
              <div>

                <Link to="https://www.instagram.com/lares.pmr?igsh=ZzFxaGI2bWdubjR5" target="_blank" >Instagram</Link>
                <br />
                <Link to="https://t.me/LaresPmr" target="_blank">Telegram</Link>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className='flex  items-center justify-between gap-40'>
        <Link reloadDocument to="/">
          <img
            reloadDocument to="/"
            className='h-[70px]'
            src="logo.tif.png" alt="logo" />
        </Link>
        <div className='flex flex-col gap-1'>
          <div className='h-[30px] w-[30px] bg-gray-600 flex items-center justify-center rounded-full hover:scale-115 duration-300'>
            <Link to="https://www.instagram.com/lares.pmr?igsh=ZzFxaGI2bWdubjR5" target="_blank" ><FaInstagram /></Link>
          </div>
          <div className='h-[30px] w-[30px] bg-gray-600 flex items-center justify-center rounded-full hover:scale-115 duration-300' >
            <Link to="https://t.me/LaresPmr" target="_blank"><FaTelegramPlane /></Link></div>
          {/* <div className='h-[30px] w-[30px] bg-gray-500 flex items-center justify-center rounded-full hover:scale-105 duration-300'><Link to=""><BsTelephoneFill /></Link></div>/div> */}
        </div>
      </div>
      <div className='flex  justify-between text-sm  sm:gap-20 '>



      </div>
    </footer>
  )
})

export default Footer
