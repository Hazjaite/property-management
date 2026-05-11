"use client";

export default function TermsAndConditions() {
  return (
    <div className="main-content-wrapper">
      <div className="pageBanner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="pageBanner-inner">
                <h2>Общи условия</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section terms-policy">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="privacy-policy-wrapper">
                <p className="policy-description">
                  Последна актуализация: 11.05.2026
                </p>

                <h3 className="policy-main-heading">1. Предмет и обхват</h3>
                <p className="policy-description">
                  Настоящите общи условия уреждат използването на уебсайта на
                  ДомоМениджър и достъпните в него функционалности, включително:
                  изпращане на запитване за оферта, онлайн плащане на такса
                  поддръжка и административна част за управление на данни за сгради,
                  апартаменти и плащания.
                </p>

                <h3 className="policy-main-heading">2. Характер на услугата</h3>
                <p className="policy-description">
                  Сайтът е насочен към управление на етажна собственост. Публичната
                  част предоставя информация за услугите, форма за запитване и
                  функционалност за плащане. Използването на сайта не създава
                  автоматично договор за управление, освен ако страните не сключат
                  отделен писмен договор.
                </p>

                <h3 className="policy-main-heading">3. Запитване за оферта</h3>
                <p className="policy-description">
                  При изпращане на запитване чрез формата потребителят предоставя
                  коректни данни за контакт. Изпратеното запитване има информативен
                  характер и не представлява обвързваща оферта или приемане на договор.
                </p>

                <h3 className="policy-main-heading">4. Онлайн плащане</h3>
                <p className="policy-description">
                  Плащането през сайта се извършва чрез външен доставчик (Stripe).
                  ДомоМениджър не съхранява пълни данни от банкови карти в системата
                  на сайта.
                </p>
                <ul style={{ marginLeft: "20px", marginBottom: "15px" }}>
                  <li>Потребителят въвежда валиден платежен номер и период.</li>
                  <li>Плащането се счита за извършено след успешно потвърждение от платежния доставчик.</li>
                  <li>
                    При технически проблеми, дублиране или неяснота относно плащане,
                    може да се свържете с нас на контактите по-долу.
                  </li>
                </ul>

                <h3 className="policy-main-heading">5. Административен достъп</h3>
                <p className="policy-description">
                  Достъпът до админ зоната е ограничен и предназначен само за
                  упълномощени лица. Неразрешен достъп, опити за заобикаляне на
                  защитата или злоупотреба със системата са забранени.
                </p>

                <h3 className="policy-main-heading">6. Права и задължения на потребителите</h3>
                <ul style={{ marginLeft: "20px", marginBottom: "15px" }}>
                  <li>Да използват сайта законосъобразно и добросъвестно.</li>
                  <li>Да не въвеждат неверни, подвеждащи или чужди данни без основание.</li>
                  <li>Да не извършват действия, които могат да нарушат сигурността на сайта.</li>
                </ul>

                <h3 className="policy-main-heading">7. Интелектуална собственост</h3>
                <p className="policy-description">
                  Съдържанието на сайта (текстове, дизайн, изображения, структура и
                  софтуерни компоненти) е защитено от приложимото законодателство.
                  Използване извън обичайното лично ползване е допустимо само с
                  предварително писмено съгласие.
                </p>

                <h3 className="policy-main-heading">8. Ограничаване на отговорността</h3>
                <p className="policy-description">
                  ДомоМениджър полага разумни усилия за непрекъсната и сигурна работа
                  на сайта, но не гарантира липса на временни прекъсвания, технически
                  грешки или външни фактори извън наш контрол.
                </p>

                <h3 className="policy-main-heading">9. Лични данни</h3>
                <p className="policy-description">
                  Обработването на лични данни се извършва съгласно
                  <a
                    href="/privacy-policy"
                    style={{ color: "#007bff", textDecoration: "underline", marginLeft: "4px" }}
                  >
                    Политиката за поверителност
                  </a>.
                </p>

                <h3 className="policy-main-heading">10. Промени в условията</h3>
                <p className="policy-description">
                  ДомоМениджър може да актуализира настоящите условия при промяна в
                  функционалностите, законодателството или модела на работа. Новата
                  версия има действие от публикуването и на тази страница.
                </p>

                <h3 className="policy-main-heading">11. Приложимо право</h3>
                <p className="policy-description">
                  За неуредените въпроси се прилага действащото законодателство на
                  Република България.
                </p>

                <h3 className="policy-main-heading">12. Контакти</h3>
                <p className="policy-description">
                  Ако имате въпроси относно тези условия, свържете се с нас:
                </p>
                <p className="policy-description">
                  <strong>Имейл:</strong> HAZJAITE@GMAIL.COM
                  <br />
                  <strong>Адрес:</strong> България, гр. Пловдив
                  <br />
                  <strong>Телефон:</strong> +359 885 668 825
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}