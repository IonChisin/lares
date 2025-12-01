import { useState } from "react";
import { useTranslation } from "react-i18next";


export default function Calculator() {
  const { t } = useTranslation('calculator');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('')

  const sendtelegram = async (e) => {
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
    alert('Отправельно!')
  }
  const [area, setArea] = useState('0');
  const [lights, setLights] = useState('');
  const [type, setType] = useState("glossy");

  const [pipes, setPipes] = useState('');
  const [corners, setCorners] = useState('');
  const [edging, setEdging] = useState("not");

  const prices = {
    glossy: 130,
    matte: 120,
    satin: 130,
    color: 150,
  };

  const lightPrice = 75;
  const pipePrice = 75;
  const cornerPrice = 75;
  const edgingPrices = {
    not: 0,
    white: 30,
    black: 40,
  };

  const calculateTotal = () => {
    const numericArea = Number(area) || 0;
    const numericLights = Number(lights) || 0;
    const numericPipes = Number(pipes) || 0;
    const numericCorners = Number(corners) || 0;

    const ceilingPrice = prices[type] * numericArea;
    const lightsPrice = numericLights * lightPrice;
    const pipesPrice = numericPipes * pipePrice;
    const cornersPrice = numericCorners * cornerPrice;
    const edgingPrice = edgingPrices[edging] * numericArea; // цена за метр

    return ceilingPrice + lightsPrice + pipesPrice + cornersPrice + edgingPrice;
  };

  return (
    < >
      <section className=" overflow-hidden ml-[-55px] sm:ml-0 bg-white  relative  pt-10 w-[500px] lg:h-[460px] sm:w-auto sm:h-[650px]  ">
        <h2 className="text-black text-4xl font-bold absolute  mb-5  ml-25 sm:ml-40 z-1 ">
          {t("calculator")}
        </h2>

        <div className="mx-20 mt-5 z-200">
          <div className="grid sm:grid-cols-2 sm:shadow-2xl lg:grid-cols-4 gap-5 bg-white lg:rounded-4xl md:items-center  p-5 sm:p-20 md:absolute lg:mt-[-40px]">

            <div className="z-50">
              <label className="block mb-3 text-xl z-201 text-black font-bold">{t("area_label")}</label>
              <input
                type="number"
                value={area}
                onChange={(e) => setArea(e.target.value.replace(/^0+/, ''))}
                className="w-full z-202 h-10 p-2 border text-black font-bold  rounded"
              />
            </div>

            {/* Тип потолка */}
            <div>
              <label className="block mb-3 text-xl font-bold">{t("type_label")}</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full h-10 p-2 border text-black font-bold  rounded"
              >
                <option value="glossy">{t("glossy_option")}</option>
                <option value="matte">{t("matte_option")}</option>
                <option value="satin">{t("satin_option")}</option>
                <option value="color">{t("color_option")}</option>
              </select>
            </div>

            {/* Светильники */}
            <div>
              <label className="block mb-3 text-xl font-bold">{t("lights_label")}</label>
              <input
                type="number"
                value={lights}
                onChange={(e) => setLights(e.target.value.replace(/^0+/, ''))}
                className="w-full h-10 p-2 border text-black font-bold rounded"
              />
            </div>

            {/* Обход трубы */}
            <div>
              <label className="block mb-3 text-xl font-bold">{t("pipe_bypass")}</label>
              <input
                type="number"
                value={pipes}
                onChange={(e) => setPipes(e.target.value.replace(/^0+/, ''))}
                className="w-full h-10 p-2 border text-black  font-bold rounded"
              />
            </div>

            {/* Дополнительный угол */}
            <div>
              <label className="block mb-3 text-xl font-bold">Дополнительный угол (шт)</label>
              <input
                type="number"
                value={corners}
                onChange={(e) => setCorners(e.target.value.replace(/^0+/, ''))}
                className="w-full h-10 p-2 border text-black font-bold  rounded"
              />
            </div>

            {/* Окантовка по периметру */}
            <div>
              <label className="block mb-3 text-xl font-bold">Окантовка по периметру</label>
              <select
                value={edging}
                onChange={(e) => setEdging(e.target.value)}
                className="w-full h-10 p-2 border text-black  font-bold rounded"
              >
                <option className="font-bold" value="not">-</option>
                <option className="font-bold" value="white">Белая (30₽/м)</option>
                <option className="font-bold" value="black">Чёрная (40₽/м)</option>
              </select>
            </div>

            {/* Итог */}
            <div className="flex p-5 text-lg font-semibold rounded-b-xl lg:absolute lg:right-0 lg:mr-15 lg:mt-35 lg:border-none gap-10">
              <span className="font-bold">
                {t("total_price")}{" "}
                <span className="px-1 text-4xl">{calculateTotal()}₽</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="  flex items-center shadow-2xl h-60 lg:h-5  bg-white w-[500px] sm:w-full lg:w-full  sm:pt-20 lg:pt-10 pl-11 sm:pl-6  lg:pl-30   ">
        <form onSubmit={sendtelegram} className=" grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-3  items-center h-10  mb-35 z-50 sm:px-20   lg:w-full gap-5">
          <input type="text"
            placeholder={t("name")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-400 shadow-xl  !text-black font-black h-10 pl-5 rounded" />
          <input type="tel"
            placeholder={t("phone_work")}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="border border-gray-400 shadow-xl font-black items-center pl-5 rounded h-10" />
          <button type="submit"
            className=" w-[300px] sm:w-[200px] h-10 bg-yellow-500 rounded font-bold cursor-pointer">{t("btn_work")}</button>
        </form>
      </section>
    </>
  );
}
