import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { FormSearch } from "./styles";

const Form = (props) => {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [versions, setVersions] = useState([]);

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

  let allModelsName = [];
  if (models.length) {
    allModelsName = [];
    for (let i = 0; i < models.length; i++) {
      for (let j = 0; j < models[i].length; j++) {
        const name = models[i][j];
        allModelsName.push(name);
      }
    }
  }

  useEffect(() => {
    async function getVersion() {
      for (let i = 0; i < allModelsName.length; i++) {
        const modelID = allModelsName[i]["ID"];
        const response = await api.get(`Version?ModelID=${modelID}`);
        const version = response.data;
        setVersions((versions) => [...versions, version]);
      }
    }
    getVersion();
  }, [models]);

  let allVersionsName = [];
  if (versions.length) {
    allVersionsName = [];
    for (let i = 0; i < versions.length; i++) {
      for (let j = 0; j < versions[i].length; j++) {
        const name = versions[i][j]["Name"];
        allVersionsName.push(name);
      }
    }
    allVersionsName = Array.from(new Set(allVersionsName));
  }

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
        <select>
          {allModelsName.map((modelName) => (
            <option key={modelName["ID"]}>{modelName["Name"]}</option>
          ))}
        </select>
      </div>
      <div className="form-version">
        <select>
          {allVersionsName.map((modelName, index) => (
            <option key={index}>{modelName}</option>
          ))}
        </select>
      </div>
    </FormSearch>
  );
};

export default Form;
