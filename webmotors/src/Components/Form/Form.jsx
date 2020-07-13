import React, { useEffect, useState, useCallback } from "react";
import api from "../../services/api";

import { FormSearch } from "./styles";

const Form = (props) => {
  const [makes, setMakes] = useState([]);
  const [makesOptions, setMakesOptions] = useState([]);
  const [models, setModels] = useState([]);
  const [versions, setVersions] = useState([]);
  const [versionsName, setVersionsName] = useState([]);

  useEffect(() => {
    api.get("Make").then((response) => {
      setMakes([...response.data]);
      setMakesOptions([...response.data]);
    });
  }, []);

  useEffect(() => {
    async function getModel() {
      let formatModel = [];
      for (let i = 0; i < makes.length; i++) {
        const response = await api.get(`Model?MakeID=${makes[i]["ID"]}`);
        const model = response.data;
        for (let j = 0; j < model.length; j++) {
          formatModel.push(model[j]);
        }
      }
      setModels(formatModel);
    }
    getModel();
  }, [makes]);

  useEffect(() => {
    async function getVersion() {
      let formatVersion = [];
      let namesVersion = [];

      for (let i = 0; i < models.length; i++) {
        const response = await api.get(`Version?ModelID=${models[i]["ID"]}`);
        const version = response.data;

        for (let j = 0; j < version.length; j++) {
          formatVersion.push(version[j]);
          namesVersion.push(version[j]["Name"]);
        }
      }

      namesVersion = Array.from(new Set(namesVersion));

      setVersionsName(namesVersion);
      setVersions(formatVersion);
    }
    getVersion();
  }, [models]);

  const handleMakeOptions = useCallback((event) => {
    let valueSelected = makes.filter(
      (make) => make["Name"] === event.target.value
    );
    setMakes(valueSelected);
  });

  const handleModelOptions = useCallback((event) => {
    console.log("handleModelOptions function");
  });

  const handleVersionOptions = useCallback(() => {
    console.log("handleVersionOptions function", this);
  });

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
      <div className="form-group">
        <div className="form-group__block">Primeiro Bloco</div>
        <div className="form-group__block">
          <div className="form-make">
            <select onChange={handleMakeOptions}>
              <option>Todas</option>
              {makesOptions.map((make) => (
                <option key={make["ID"]}>{make["Name"]}</option>
              ))}
            </select>
          </div>
          <div className="form-model">
            <select onChange={handleModelOptions}>
              <option>Todos</option>
              {models.map((model) => (
                <option key={model["ID"]}>{model["Name"]}</option>
              ))}
            </select>
          </div>
          <div className="form-version">
            <select onChange={handleVersionOptions}>
              <option>Todos</option>
              {versionsName.map((modelName, index) => (
                <option key={index}>{modelName}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </FormSearch>
  );
};

export default Form;
