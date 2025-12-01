import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import '../style.css'

import workGallery from '../data/workGallery.json'
import categoriesRu from '../locales/ru/categories.json'
import categoriesRo from '../locales/ro/categories.json'

import { useTranslation } from 'react-i18next'

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState([])
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const categories = lang === 'ro' ? categoriesRo : categoriesRu

  // вместо fullScreenImg
  const [fullScreenIndex, setFullScreenIndex] = useState(null)

  const addSelectedCategories = (id) => {
    setSelectedCategory((prev) =>
      prev.includes(id)
        ? prev.filter((cat) => cat !== id)
        : [...prev, id]
    )
  }

  const filteredWorks = workGallery.filter((work) =>
    selectedCategory.length === 0 || selectedCategory.includes(work.categoryId)
  )

  const closeModal = () => setFullScreenIndex(null)

  const showPrev = (e) => {
    e.stopPropagation()
    setFullScreenIndex((prev) =>
      prev === 0 ? filteredWorks.length - 1 : prev - 1
    )
  }

  const showNext = (e) => {
    e.stopPropagation()
    setFullScreenIndex((prev) =>
      prev === filteredWorks.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <section className='flex flex-col gap-8'>
      <h1 className='mt-[30px] sm:mt-[0px] ml-5 sm:ml-26 text-6xl lg:text-8xl  font-bold'>
        {t('catalog')}
      </h1>

      <div className='flex flex-col items-center gap-8'>
        <div className='w-full max-w-6xl px-4 mb-[50px]'>
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
              bulletClass: 'custom-bullet',
              bulletActiveClass: 'custom-bullet-active',
            }}
            modules={[Pagination, Autoplay]}
            className='mySwiper'
          >
            {filteredWorks.map((work, index) => (
              <SwiperSlide key={work.img}>
                <img
                  src={`/work/${work.img}`}
                  alt='img'
                  className='w-full h-[300px] mb-10 object-cover rounded-xl shadow cursor-pointer'
                  onClick={() => setFullScreenIndex(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {fullScreenIndex !== null && (
            <div
              className='fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50'
              onClick={closeModal}
            >

              <button
                className='absolute left-4 text-black sm:text-gray-500 text-8xl font-bold hover:scale-115 duration-300 cursor-pointer'

                onClick={showPrev}
              >
                ‹
              </button>


              <img
                src={`/work/${filteredWorks[fullScreenIndex].img}`}
                alt='fullscreen'
                className='max-w-full max-h-full rounded-lg shadow-lg'
              />


              <button
                className='absolute right-4 text-black sm:text-gray-500 text-8xl font-bold hover:scale-115 duration-300 cursor-pointer'
                onClick={showNext}
              >
                ›
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Catalog
