import React, { useState } from 'react'

import fotoPrind from '../data/fotoPrind.json'
import categoriesRu from '../locales/ru/categoryPrint.json'
import categoriesRo from '../locales/ro/categoryPrint.json'
import { useTranslation } from 'react-i18next'
import { div } from 'framer-motion/client'


const Baza = () => {
  const [selectedCategory, setSelectedCategory] = useState([])
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const categories = lang === 'ro' ? categoriesRo : categoriesRu

  const addSelectedCategories = (id) => {
    setSelectedCategory((prev) =>
      prev.includes(id)
        ? prev.filter((cat) => cat !== id)
        : [...prev, id]
    )
  }

  const filteredPrint = fotoPrind.filter((print) =>
    selectedCategory.length === 0 || selectedCategory.includes(print.categoryid)
  )

  return (
    <>
      <section className="border-t-5 mt-[100px] border-gray-500"></section>
      <section className="min-h-screen mt-[50px] flex flex-col lg:flex p-5 gap-8 bg-gray-500">
        <h1 className="z-1 lg:mt-[-70px] text-5xl lg:text-9xl text-gray-200 font-bold">
          {t('gallery_title')}
        </h1>
        <div className="flex gap-5">
          <div className="fixed lg:w-1/3 lg:h-0 duration-600 lg:bg-[#c5c4c4] hover:p-3 lg:rounded-2xl text-center grid grid-cols-2 lg:grid-cols-1">
            {categories.map((category) => (
              <div
                key={category.categoryid}
                className={`h-[50px] flex items-center justify-center cursor-pointer px-4 py-2 hover:drop-shadow-t-xl lg:first:rounded-t-xl lg:last:rounded-b-xl text-lg hover:my-1 ${selectedCategory.includes(category.id)
                  ? 'bg-gray-700 text-gray-300 font-bold shadow-lg scale-95 duration-200'
                  : 'bg-gray-600 text-white duration-200'
                  }`}
                onClick={() => addSelectedCategories(category.id)}
              >
                {category.name}
              </div>
            ))}
          </div>

          <div className="bg-[#c5c4c4] lg:ml-[480px] grid grid-cols-2 lg:grid-cols-4 w-full max-w-6xl p-4 mb-[50px] rounded-2xl gap-5">
            {filteredPrint.map((print) => (
              <div>

              <img
                key={print.categoryid}
                src={`/fotoPrint/${print.image}`}
                alt={print.name }
                className="w-[250px] h-[250px] mb-10 object-cover rounded-xl hover:border hover:border-gray-500 shadow-xl hover:scale-150 duration-700"
                />
            <p>{print.name}</p>
                </div>
            ))}
        
          </div>
        </div>
      </section>
    </>
  )
}

export default Baza
