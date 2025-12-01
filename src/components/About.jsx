import React, { forwardRef } from 'react'
import { MdOutlineTaskAlt } from 'react-icons/md';
import { useTranslation } from 'react-i18next';


const About = forwardRef(() => {

  const { t } = useTranslation()


  return (
    <section id="about" className='h-screen p-5 mb-185 sm:mb-190  lg:mb-40 scroll-mt-15'>
      <div className='flex flex-col lg:flex-row p-5  '>

        <div className='lg:w-1/2 border border-gray-500 p-5 m-5 rounded-xl flex flex-col gap-5 '>
          <h1 className='text-2xl font-bold'>{t("about_title")}</h1>
          <p className='font-semibold'>
            {t("about_description")}
          </p>
          <div className='border-t border-gray-500 flex font-semibold '>
            <ul className='flex flex-col justify-center px-1 gap-2 '>
              <li className='flex items-center text-sm gap-2 mt-2'><MdOutlineTaskAlt className='lg:text-4xl text-8xl sm:text-6xl' /> {t("advantages.1")}</li>
              <li className='flex items-center text-sm gap-2'><MdOutlineTaskAlt className='lg:text-4xl text-5xl sm:text-6xl' /> {t("advantages.2")}</li>
              <li className='flex items-center text-sm gap-2'><MdOutlineTaskAlt className='lg:text-4xl text-7xl sm:text-6xl' />{t("advantages.3")}</li>
              <li className='flex items-center text-sm gap-2'><MdOutlineTaskAlt className='lg:text-4xl text-6xl sm:text-6xl' />{t("advantages.4")}</li>
              <li className='flex items-center text-sm gap-2'><MdOutlineTaskAlt className='lg:text-4xl text-7xl sm:text-6xl' />{t("advantages.5")}</li>
              <li className='flex items-center text-sm gap-2'><MdOutlineTaskAlt className='lg:text-4xl text-6xl sm:text-6xl' />{t("advantages.6")}</li>
            </ul>
          </div>
        </div>
        <div className='w-auto sm:h-[300px] lg:h-auto lg:w-1/2 m-5 border-l border-r border-b border-gray-500 rounded-xl'>
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d341.25855087198954!2d29.4852869!3d46.822654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c907aeb69553c9%3A0x6e875e7d7445ee0!2zTEFSRVMg0L3QsNGC0Y_QttC90YvQtSDQv9C-0YLQvtC70LrQuA!5e0!3m2!1sru!2s!4v1763539397052!5m2!1sru!2s" loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
          <div className='flex gap-3 font-bold items-center justify-center'>
            <h2>{t("addressTitle")}</h2>
            <div className='flex flex-col sm:flex-row gap-2  '>
              <p>{t("street")}</p>
              <p>{t("shop")}</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
})

export default About
