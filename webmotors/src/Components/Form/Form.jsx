import React from "react";

import { MainContent } from "./styles";

const Form = (props) => {
  return (
    <MainContent>
      <section className="wm-section">
        <div className="wm-section__options">
          <nav className="wm-section__options-navigation">
            <ul className="wm-section__options-list">
              <li className="wm-section__options-list-item is--active">
                <i
                  className="fa fa-car wm-section__options-list-icon"
                  aria-hidden="true"
                ></i>
                <div className="wm-section__options-list-item-title">
                  <p className="wm-section__options-list-item-title-text">
                    Comprar
                  </p>
                  <span className="wm-section__options-list-item-title-text">
                    Carros
                  </span>
                </div>
              </li>
              <li className="wm-section__options-list-item">
                <i
                  className="fa fa-motorcycle wm-section__options-list-icon"
                  aria-hidden="true"
                ></i>
                <div className="wm-section__options-list-item-title">
                  <p className="wm-section__options-list-item-title-text">
                    Comprar
                  </p>
                  <span className="wm-section__options-list-item-title-text">
                    Motos
                  </span>
                </div>
              </li>
            </ul>
            <button className="wm-section__options-sell">
              Vender meu carro
            </button>
          </nav>
        </div>
      </section>
    </MainContent>
  );
};

export default Form;
