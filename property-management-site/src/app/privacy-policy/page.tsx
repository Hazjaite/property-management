"use client";

export default function PrivacyPolicy() {
  return (
    <div className="main-content-wrapper">
      <div className="pageBanner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="pageBanner-inner">
                <h2>Политика за поверителност</h2>
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

                <h3 className="policy-main-heading">1. За какво се отнася тази политика</h3>
                <p className="policy-description">
                  Настоящата политика описва как ДомоМениджър обработва лични данни
                  при използване на уебсайта и свързаните функционалности: изпращане
                  на запитване през формата за оферта, онлайн плащане през Stripe и
                  административно управление на сгради, апартаменти и плащания.
                </p>

                <h3 className="policy-main-heading">2. Какви данни обработваме</h3>
                <p className="policy-description">
                  Обработваме само данните, необходими за работата на сайта и услугите:
                </p>
                <ul style={{ marginLeft: "20px", marginBottom: "15px" }}>
                  <li>
                    <strong>Данни от формата за оферта:</strong> име, телефон, имейл
                    (по желание), адрес.
                  </li>
                  <li>
                    <strong>Данни за плащане в сайта:</strong> платежен номер
                    (payNumber), период (месец/година), статус и референции на
                    плащане.
                  </li>
                  <li>
                    <strong>Данни за управление на сгради:</strong> адрес на блок,
                    номер/вход на апартамент, имена и контакти на собственици/лица за
                    контакт, когато са въведени от администратор.
                  </li>
                  <li>
                    <strong>Технически данни:</strong> IP адрес и стандартни сървърни
                    логове, както и необходими бисквитки за вход в админ панела.
                  </li>
                </ul>
                <p className="policy-description">
                  Сайтът не изисква създаване на публичен потребителски профил и не
                  събира ЕГН/ЛНЧ през публичните форми.
                </p>

                <h3 className="policy-main-heading">3. Цели и правни основания</h3>
                <ul style={{ marginLeft: "20px", marginBottom: "15px" }}>
                  <li>
                    <strong>Обработка на запитвания за оферта</strong> - чл. 6, пар. 1,
                    б. &quot;б&quot; и/или &quot;е&quot; от ОРЗД (действия преди договор и легитимен интерес).
                  </li>
                  <li>
                    <strong>Обработка на онлайн плащания</strong> - чл. 6, пар. 1, б.
                    &quot;б&quot; от ОРЗД (изпълнение на договор/услуга).
                  </li>
                  <li>
                    <strong>Административен достъп и защита на системата</strong> -
                    чл. 6, пар. 1, б. &quot;е&quot; от ОРЗД (легитимен интерес за сигурност).
                  </li>
                  <li>
                    <strong>Счетоводни и законови задължения</strong> - чл. 6, пар. 1,
                    б. &quot;в&quot; от ОРЗД.
                  </li>
                </ul>

                <h3 className="policy-main-heading">4. Получатели на данни</h3>
                <p className="policy-description">
                  В зависимост от конкретната услуга можем да споделим данни със:
                </p>
                <ul style={{ marginLeft: "20px", marginBottom: "15px" }}>
                  <li>
                    <strong>Stripe</strong> - за обработка на картови плащания.
                  </li>
                  <li>
                    <strong>Доставчик на имейл/SMTP услуга</strong> - за изпращане на
                    запитвания от формата за оферта.
                  </li>
                  <li>
                    <strong>Хостинг/инфраструктурни доставчици</strong> - за работа и
                    защита на сайта.
                  </li>
                  <li>
                    <strong>Компетентни държавни органи</strong> - само при законово
                    основание.
                  </li>
                </ul>

                <h3 className="policy-main-heading">5. Бисквитки</h3>
                <p className="policy-description">
                  Сайтът използва необходими бисквитки за функциониране на
                  административната част (например сесийна бисквитка за вход). Без тях
                  админ функционалността не може да се използва. Можете да управлявате
                  бисквитките от настройките на вашия браузър.
                </p>

                <h3 className="policy-main-heading">6. Срок за съхранение</h3>
                <ul style={{ marginLeft: "20px", marginBottom: "15px" }}>
                  <li>Запитвания за оферта - до обработка на запитването и разумен архивен срок.</li>
                  <li>Данни за плащания - според приложимите счетоводни и данъчни срокове.</li>
                  <li>Админ логове и данни за сигурност - за период, необходим за защита на системата.</li>
                </ul>

                <h3 className="policy-main-heading">7. Вашите права</h3>
                <p className="policy-description">
                  Съгласно ОРЗД имате право на достъп, корекция, изтриване, ограничаване
                  на обработването, възражение и преносимост, когато са приложими.
                </p>
                <p className="policy-description">
                  За упражняване на права се свържете с нас на контактите по-долу.
                  Може да поискаме допълнителна информация за потвърждение на самоличност.
                </p>

                <h3 className="policy-main-heading">8. Сигурност</h3>
                <p className="policy-description">
                  Прилагаме технически и организационни мерки за ограничаване на
                  неоторизиран достъп, промяна, загуба или неправомерно разкриване на
                  данни.
                </p>

                <h3 className="policy-main-heading">9. Промени в политиката</h3>
                <p className="policy-description">
                  Възможно е да актуализираме тази политика при промени в сайта,
                  законовите изисквания или начина на обработка на данни. Актуалната
                  версия винаги е публикувана на тази страница.
                </p>

                <h3 className="policy-main-heading">10. Контакти</h3>
                <p className="policy-description">
                  За въпроси относно поверителността и личните данни:
                </p>
                <p className="policy-description">
                  <strong>Имейл:</strong> HAZJAITE@GMAIL.COM
                  <br />
                  <strong>Адрес:</strong> България, гр. Пловдив
                  <br />
                  <strong>Телефон:</strong> +359 885 668 825
                </p>
                <p className="policy-description">
                  Имате право да подадете жалба до Комисията за защита на личните
                  данни (КЗЛД), ако считате, че правата ви са нарушени.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}