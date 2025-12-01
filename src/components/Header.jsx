import React, { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const { t, i18n } = useTranslation()
  const [openMenu, setOpenMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("home")
  const [activeLang, setActiveLang] = useState(i18n.language || "ru")

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/") setActive("home")
    else if (location.pathname === "/gallery") setActive("gallery")
    else if (location.pathname === "/fotoprint") setActive("fotoprint")
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItemClass = (name) =>
    `text-xl cursor-pointer relative after:block after:h-0.5 after:bg-gray-500 duration-300
      ${active === name ? "text-yellow-400 after:bg-gray-600" : "text-white"}
      after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left`

  const langButtonClass = (lng) =>
    `h-[30px] w-[30px] rounded-full cursor-pointer flex items-center justify-center 
      ${activeLang === lng ? "bg-yellow-400 text-black scale-110" : "bg-gray-500 text-white"} 
      hover:scale-105 duration-300`

  const handleLangChange = (lng) => {
    i18n.changeLanguage(lng);
    setActiveLang(lng);
    localStorage.setItem("lang", lng);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
      setActiveLang(savedLang);
    }
  }, []);

  // 🔹 Закрываем меню при выборе любого пункта
  const handleMenuClick = (name) => {
    setActive(name)
    setOpenMenu(false)
  }

  return (
    <header
      className="fixed top-0 z-180 h-[100px] w-full duration-200 lg:px-10 flex flex-col lg:flex-row justify-between "
      style={{
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        background: scrolled
          ? 'linear-gradient(0deg, rgba(10, 8, 8, 1) 0%, rgba(99, 99, 99, 1) 84%)'
          : 'transparent',
        color: '#fff',
      }}
    >
      <div className='containter mx-auto w-full px-5 flex flex-col lg:flex-row items-center justify-between'>
        <div className='flex items-center gap-35 sm:gap-20 sm:justify-between'>
          <Link
            className='flex flex-col items-center justify-center '
            reloadDocument to="/" onClick={() => handleMenuClick("home")}>
            <img className=' h-[80px] lg:h-[70px]  lg:w-[180px] mb-[-5px]' src="logo.tif.png" alt="logo" />
            <h1 className='font-semibold text-[13px] '>{t("logo_name")}</h1>
          </Link>
          <button onClick={() => setOpenMenu(!openMenu)} className='lg:hidden'>
            {openMenu
              ? <GrClose className='w-[50px] h-[50px] text-[#d5d5d5] cursor-pointer mr-5' />
              : <CiMenuFries className='w-[50px] h-[50px] text-[#d5d5d5] cursor-pointer mr-5' />
            }
          </button>
        </div>

        <nav
          style={{ left: openMenu ? 0 : "-100%" }}
          className="absolute lg:static flex top-[100px] h-screen lg:h-[150px] lg:top-0 left-0 w-full z-50 justify-center bg-black lg:bg-transparent lg:text-white duration-500"
        >
          <ul className='flex flex-col mt-10 lg:flex-row items-center gap-5'>
            <li className={navItemClass("home")} onClick={() => handleMenuClick("home")}>
              <Link to="/" reloadDocument>{t('home')}</Link>
            </li>
            {/* <li className={navItemClass("gallery")} onClick={() => handleMenuClick("gallery")}>
              <Link to="/gallery">{t('foto')}</Link>
            </li> */}
            <li className={navItemClass("fotoprint")} onClick={() => handleMenuClick("fotoprint")}>
              <Link to="/fotoprint" reloadDocument>{t('materials')}</Link>
            </li>
            <li className={navItemClass("contacts")} onClick={() => handleMenuClick("contacts")}>
              <HashLink smooth to="/#contacts">{t('contacts')}</HashLink>
            </li>
            <li className={navItemClass("about")} onClick={() => handleMenuClick("about")}>
              <HashLink smooth to="/#about">{t('about')}</HashLink>
            </li>

            <li>
              <div className='flex flex-col items-center lg:ml-5 gap-5'>
                <div className='flex gap-3'>
                  <div className='h-[30px] w-[30px] bg-gray-500 flex items-center justify-center rounded-full hover:scale-105 duration-300'>
                    <Link to="https://www.instagram.com/lares.pmr?igsh=ZzFxaGI2bWdubjR5" target="_blank" ><FaInstagram /></Link>
                  </div>
                  <div className='h-[30px] w-[30px] bg-gray-500 flex items-center justify-center rounded-full hover:scale-105 duration-300'>
                    <Link to="https://t.me/LaresPmr" target="_blank"><FaTelegramPlane /></Link>
                  </div>
                  <div className='h-[30px] w-[30px] bg-gray-500 flex items-center justify-center rounded-full hover:scale-105 duration-300'>
                    <Link to="tel:+373 77 996 886"><BsTelephoneFill /></Link>
                  </div>
                </div>
                <div className='flex lg:hidden items-center gap-2'>
                  <button className={langButtonClass("ro")} onClick={() => handleLangChange("ro")}>RO</button>
                  <button className={langButtonClass("ru")} onClick={() => handleLangChange("ru")}>RU</button>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <div className='hidden lg:flex items-center gap-2 lg:mt-6'>
          <button className={langButtonClass("ro")} onClick={() => handleLangChange("ro")}>RO</button>
          <button className={langButtonClass("ru")} onClick={() => handleLangChange("ru")}>RU</button>
        </div>
      </div>
    </header>
  )
}

export default Header
