import React, { useState, useEffect, useRef } from 'react'
import fotoPrind from '../data/fotoPrind.json'
import categoriesRu from '../locales/ru/categoryPrint.json'
import categoriesRo from '../locales/ro/categoryPrint.json'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { TbCategoryPlus, TbCategoryMinus } from "react-icons/tb"

const FotoPrint = () => {
  const [selectedCategory, setSelectedCategory] = useState([])
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const categories = lang === 'ro' ? categoriesRo : categoriesRu

  const [openCategory, setOpenCategory] = useState(false)
  const [fullScreenIndex, setFullScreenIndex] = useState(null)

  // Добавление/удаление выбранных категорий
  const addSelectedCategories = (id) => {
    setSelectedCategory(prev =>
      prev.includes(id)
        ? prev.filter(cat => cat !== id)
        : [...prev, id]
    )
  }

  const filteredPrint = fotoPrind.filter(print =>
    selectedCategory.length === 0 || selectedCategory.includes(print.categoryid)
  )

  // Навигация по фото клавиатурой
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (fullScreenIndex === null) return
      if (e.key === 'Escape') setFullScreenIndex(null)
      if (e.key === 'ArrowRight') setFullScreenIndex((prev) => (prev + 1) % filteredPrint.length)
      if (e.key === 'ArrowLeft') setFullScreenIndex((prev) => (prev - 1 + filteredPrint.length) % filteredPrint.length)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [fullScreenIndex, filteredPrint.length])

  // Анимация открытия меню категорий
  const sidebarVariants = {
    open: {
      clipPath: `circle(150% at 40px 40px)`,
      transition: { type: 'spring', stiffness: 30, restDelta: 2 },
    },
    closed: {
      clipPath: `circle(35px  at 17px 44px)`,
      transition: { delay: 0.2, type: 'spring', stiffness: 400, damping: 40 },
    },
  }

  return (
    <>




      <section className="min-h-screen bg-gray-500 text-gray-100 px-7 flex flex-col items-center lg:justify-between lg:flex-row  lg:mt-20 ">

        <div className='fixed z-100 w-[230px]  mt-30 left-[-5px] lg:hidden'>

          <button
            onClick={() => setOpenCategory(!openCategory)}
            className="z-110 p-2 bg-gray-800 rounded-full text-white cursor-pointer shadow-xl hover:bg-gray-500 duration-300"
          >
            {openCategory ? <TbCategoryMinus size={32} /> : <TbCategoryPlus size={32} />}
          </button>
          {/* <span className='  text-3xl rotate-270'>Категорий</span> */}
        </div>
        <h1 className="mt-30 text-5xl font-bold">{t('materials')}</h1>

        {/* Кнопка открытия категорий */}

  <div className="fixed z-190 lg:grid grid-cols-2 px-4 gap-2 top-[200px] w-[30%] hidden  ">
            {categories.map((category) => (
              <div
                key={category.categoryid}
                onClick={() => addSelectedCategories(category.id)}
                className={`cursor-pointer  py-3  text-center duration-300
                  ${selectedCategory.includes(category.id)
                    ? 'bg-gray-700 text-gray-200'
                    : 'bg-gray-400 hover:bg-gray-600 hover:text-white'}
                `}
              >
                {category.name}
              </div>
            ))}

          </div>


        {/* Анимированное меню категорий */}
        <motion.nav
          initial={false}
          animate={openCategory ? "open" : "closed"}
          variants={sidebarVariants}
          className="fixed top-25 lg:hidden left-0 bottom-0 w-full lg:w-[550px]  bg-gray-200 text-gray-800 shadow-2xl  overflow-hidden"
        >
          <div className="mt-25  grid grid-cols-2 lg:grid-cols-3 px-4 gap-2">
            {categories.map((category) => (
              <motion.div
                key={category.categoryid}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => addSelectedCategories(category.id)}
                className={`cursor-pointer px-3 py-2  text-center duration-300
                  ${selectedCategory.includes(category.id)
                    ? 'bg-gray-700 text-gray-200'
                    : 'bg-gray-400 hover:bg-gray-600 hover:text-white'}
                `}
              >
                {category.name}
              </motion.div>
            ))}

          </div>

        </motion.nav>

        {/* Сетка изображений */}
        <div className="grid grid-cols-2 sm:grid-cols-4  gap-5 mt-10 lg:w-[65%]">
          {filteredPrint.map((print, index) => (
            <div key={print.image} className="border border-gray-400 rounded-lg p-2 bg-gray-300 text-gray-800 text-center">
              <img
                src={`/fotoPrint/${print.image}`}
                alt={print.name}
                className="w-[170px] h-[200px]  object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setFullScreenIndex(index)}
                loading="lazy"
              />
              <p className="mt-2 font-semibold">#{print.name}</p>
            </div>
          ))}
        </div>

        {/* Модальное окно с фото */}
        <AnimatePresence>
          {fullScreenIndex !== null && (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-20 bg-black/70 flex items-center justify-center z-50"
              onClick={() => setFullScreenIndex(null)}
            >
              <motion.img
                src={`/fotoPrint/${filteredPrint[fullScreenIndex].image}`}
                alt="fullscreen"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                className="max-h-[350px] rounded-lg shadow-xl" loading="lazy"
              />

              {/* Кнопки переключения */}
              <button
                onClick={(e) => { e.stopPropagation(); setFullScreenIndex((prev) => (prev - 1 + filteredPrint.length) % filteredPrint.length) }}
                className="absolute left-10  text-white text-6xl font-bold hover:scale-120 duration-200 cursor-pointer"
              >
                ‹
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setFullScreenIndex((prev) => (prev + 1) % filteredPrint.length) }}
                className="absolute right-10  text-white text-6xl font-bold hover:scale-130 duration-200 cursor-pointer"
              >
                ›
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}

export default FotoPrint
