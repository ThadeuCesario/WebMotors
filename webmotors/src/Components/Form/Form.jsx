import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { FormSearch } from "./styles";

const Form = (props) => {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);

  useEffect(() => {
    api.get("Make").then((response) => {
      setMakes([...response.data]);
    });
  }, []);

  useEffect(() => {
    async function getModel() {
      for (let i = 0; i < makes.length; i++) {
        const response = await api.get(`Model?MakeID=${makes[i]["ID"]}`);
        const model = response.data;
        setModels((models) => [...models, model]);
      }
    }
    getModel();
  }, [makes]);

  console.log("model final", models);
  return (
    <FormSearch>
      <div className="form-search">
        <div className="form-search__option">
          <input
            className="form-search__option-input"
            type="checkbox"
            id="newCars"
            name="newCars"
            defaultChecked
          />
          <label className="form-search__option-label" htmlFor="newCars">
            Novos
          </label>
        </div>
        <div className="form-search__option">
          <input
            className="form-search__option-input"
            type="checkbox"
            id="newCars"
            name="newCars"
            defaultChecked
          />
          <label className="form-search__option-label" htmlFor="newCars">
            Usados
          </label>
        </div>
      </div>
      <div className="form-make">
        <select>
          {makes.map((make) => (
            <option key={make["ID"]}>{make["Name"]}</option>
          ))}
        </select>
      </div>
      <div className="form-model">
        <select>{}</select>
      </div>
    </FormSearch>
  );
};

export default Form;
