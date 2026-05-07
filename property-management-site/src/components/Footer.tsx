"use client";

import type { MouseEvent } from "react";

export default function Footer() {
  const handleOpenOfferModal = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.dispatchEvent(new Event("open-offer-modal"));
  };

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-2 mb-4">
            <div className="footer-link">
              <h3 className="footer-heading">Започнете</h3>
              <ul className="foolter-link-list">
                <li className="foolter-link-item">
                  <a href="/">Начало</a>
                </li>
                <li className="foolter-link-item">
                  <a href="/#plans">Планове</a>
                </li>
                <li className="foolter-link-item">
                  <a href="/#services">Услуги</a>
                </li>
                <li className="foolter-link-item">
                  <a href="/about-us">За нас</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-2 mb-4">
            <div className="footer-link">
              <h3 className="footer-heading">Открийте</h3>
              <ul className="foolter-link-list">
                <li className="foolter-link-item">
                  <a href="/pay">Плащане</a>
                </li>
                <li className="foolter-link-item">
                  <a href="/terms-and-conditions">Общи условия</a>
                </li>
                <li className="foolter-link-item">
                  <a href="/privacy-policy">Поверителност</a>
                </li>
                <li className="foolter-link-item">
                  <a href="#" onClick={handleOpenOfferModal}>
                    Изпратете запитване
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="footer-social">
              <h3 className="footer-heading">Социални мрежи</h3>
              <ul className="foolter-social-list">
                <li className="foolter-link-item">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li className="foolter-link-item">
                  <a href="#">
                    <i className="fa-brands fa-x-twitter" />
                  </a>
                </li>
                <li className="foolter-link-item">
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li className="foolter-link-item">
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-2 mb-4">
            <div className="footer-link">
              <h3 className="footer-heading">Местоположение</h3>
              <ul className="foolter-link-list">
                <li className="foolter-link-item">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Plovdiv+Bulgaria"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Plovdiv, Bulgaria
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="footer-contact-btns">
              <ul>
                <li>
                  <a href="mailto:HAZJAITE@GMAIL.COM">
                    <i className="fa fa-envelope" />
                    HAZJAITE@GMAIL.COM
                  </a>
                </li>
                <li>
                  <a href="tel:+359885668825">
                    <i className="fa fa-phone" />
                    +359885668825
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Plovdiv+Bulgaria"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-map-marker" />
                    Карти и посоки
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-12 col-lg-12">
            <div className="footer-middle-links">
              <ul>
                <li>
                  <a href="/">Начало</a>
                </li>
                <li>
                  <a href="/terms-and-conditions">Общи условия</a>
                </li>
                <li>
                  <a href="/privacy-policy">Политика за поверителност</a>
                </li>
                <li>
                  <a href="#" onClick={handleOpenOfferModal}>
                    Обратна връзка за сайта
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-12 col-lg-12">
            <div className="footer-bottom">
              <p>Всички права запазени @ДомоМениджър.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
