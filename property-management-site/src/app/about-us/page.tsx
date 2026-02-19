"use client";

export default function AboutUs() {
  const services = [
    "Касови услуги и ясно финансово отчитане",
    "Професионален домоуправител и организация на общи събрания",
    "Юридическа консултация по казуси в етажната собственост",
    "Почистване и грижа за общите части",
    "Техническа поддръжка и контрол на изпълнители",
    "Пълно управление на сградата с регулярна комуникация",
  ];

  const values = [
    {
      title: "Прозрачност",
      text: "Всеки разход и всяко решение са видими и обяснени навреме.",
      image: "/images/trust.png",
    },
    {
      title: "Ред и предвидимост",
      text: "Работим по ясен план, за да няма изненади за входа.",
      image: "/images/seller.png",
    },
    {
      title: "Бърза реакция",
      text: "При сигнал действаме бързо и държим собствениците информирани.",
      image: "/images/project-management.png",
    },
    {
      title: "Качество",
      text: "Подбираме надеждни партньори и следим изпълнението до край.",
      image: "/images/excellence.png",
    },
  ];

  const steps = [
    {
      title: "1. Запознаване със сградата",
      text: "Правим оглед и разговор със собствениците, за да разберем реалните приоритети.",
    },
    {
      title: "2. План за управление",
      text: "Изготвяме конкретен месечен план: поддръжка, бюджет, срокове и отговорности.",
    },
    {
      title: "3. Реално изпълнение",
      text: "Координираме дейностите, следим качеството и комуникираме всяка важна стъпка.",
    },
    {
      title: "4. Постоянно подобрение",
      text: "Оптимизираме процесите според обратната връзка от живущите.",
    },
  ];

  const openOfferModal = () => {
    window.dispatchEvent(new Event("open-offer-modal"));
  };

  return (
    <div className="main-content-wrapper">
      <div className="section pageHeading">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-main-heading text-left">
                <h2 className="text-left">За ДомоМениджър</h2>
                <p className="mt-2">
                  Професионална грижа за етажната собственост в Пловдив, с фокус
                  върху спокойствие за собствениците и подредена среда за
                  живущите.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="page-banner-wrapper">
                <img
                  loading="lazy"
                  className="img-fluid"
                  src="/images/modern-apartment-architecture.jpg"
                  alt="Жилищна сграда"
                />
                <div className="page-banner-content">
                  <h3>Какво правим</h3>
                  <p>
                    ДомоМениджър е екип за цялостно управление на входове и
                    жилищни сгради. Комбинираме оперативна работа на място с
                    ясни правила, добра комуникация и отчетност.
                  </p>
                  <p>
                    Работим така, че входът да е чист, поддържан и добре
                    организиран, а финансовите процеси да са разбираеми за
                    всички. За нас доброто управление не е еднократно действие,
                    а постоянна грижа.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section welcome">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-4">
              <div className="welcome-image">
                <img
                  loading="lazy"
                  className="img-fluid"
                  src="/images/welcome.png"
                  alt="Екип на ДомоМениджър"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="welcome-content">
                <h3>Нашата мисия</h3>
                <p>
                  Да превърнем управлението на етажната собственост в работещ и
                  спокоен процес. Без хаос, без неясни разходи и без отложени
                  проблеми.
                </p>
                <p>
                  Вярваме, че когато има ред в общите части, има повече комфорт
                  за всеки собственик и по-добра среда за целия вход.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section weBelieve">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-8">
              <div className="section-main-heading">
                <h2>Услуги, които реално улесняват входа</h2>
                <p className="mt-2 text-center">
                  Използваме практичен модел на работа, който покрива
                  ежедневните нужди на сградата.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="webelive-list">
                <ul>
                  {services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section points pt-4">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-8">
              <div className="section-main-heading">
                <h2>Как работим</h2>
                <p className="mt-2 text-center">
                  Ясен процес от първия разговор до ежедневната поддръжка.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="about-point-wrapper">
                <ul>
                  {steps.map((step) => (
                    <li className="about-point-item" key={step.title}>
                      <div className="about-point-item-inner">
                        <h2>{step.title}</h2>
                        <p>{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section points pt-4">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-8">
              <div className="section-main-heading">
                <h2>В какво вярваме</h2>
                <p className="mt-2 text-center">
                  Основните принципи, по които управляваме всяка сграда.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="about-point-wrapper">
                <ul>
                  {values.map((value) => (
                    <li className="about-point-item" key={value.title}>
                      <div className="about-point-item-inner">
                        <img
                          loading="lazy"
                          className="img-fluid"
                          src={value.image}
                          alt={value.title}
                        />
                        <h2>{value.title}</h2>
                        <p>{value.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section linkCards">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mb-4">
              <div className="linkCards-wrapper team">
                <h3>Имате нужда от професионално управление?</h3>
                <button
                  type="button"
                  className="theme-btn linkCards-btn"
                  onClick={openOfferModal}
                >
                  Направете запитване
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="linkCards-wrapper team">
                <h3>Искате да разгледате повече?</h3>
                <a href="/" className="theme-btn linkCards-btn">
                  Към началната страница
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
