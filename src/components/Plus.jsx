import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaHandHoldingWater } from "react-icons/fa";
import { SiAffinitydesigner } from "react-icons/si";
import { MdOutlineCleanHands } from "react-icons/md";
import { PiTimerBold } from "react-icons/pi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { LuDraftingCompass } from "react-icons/lu";


const Plus = () => {

  const { t } = useTranslation()

  return (
    <section className=' px-[50px] lg:px-[100px] pb-10 mt-[-20px]  lg:mt-[-20px] bg-gray-400 '>
      <h1 className=' flex  font-bold text-6xl lg:text-8xl mt-5 mb-5 relative z-15'>{t("plus_title")}</h1>
      <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-2xl lg:text-xl xl:mt-[100px] lg:pb-[50px]'>
        <li className='flex flex-col items-center gap-5'><FaHandHoldingWater className='text-5xl' /><span className='font-bold'>{t("water_title")} </span>
          {t("water_description")}</li>
        <li className='flex flex-col items-center gap-5'><SiAffinitydesigner className='text-5xl' /><span className='font-bold'>{t("dezign_title")}</span>{t("dezign_description")}</li>
        <li className='flex flex-col items-center gap-5'><MdOutlineCleanHands className='text-5xl' /><span className='font-bold'>{t("cleaner_title")}</span>{t("cleaner_description")}</li>
        <li className='flex flex-col items-center gap-5'><PiTimerBold className='text-5xl' /><span className='font-bold'>{t("speed_title")}</span>{t("speed_description")}</li>
        <li className='flex flex-col items-center gap-5'><MdOutlineVerifiedUser className='text-5xl' />
          <span className='font-bold'>{t("time_title")}</span >{t("time_description")}</li>
        <li className='flex flex-col items-center gap-5'><LuDraftingCompass className='text-5xl' /><span className='font-bold'>{t("flat_title")}</span>{t("flat_description")}</li>
      </ul>
    </section>
  )
}

export default Plus
