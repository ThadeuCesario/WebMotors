import React, { useEffect, useState, useCallback } from "react";
import api from "../../services/api";

import { FormSearch } from "./styles";

const Form = (props) => {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [modelsOptions, setModelsOptions] = useState([]);
  const [versions, setVersions] = useState([]);
  const [versionsName, setVersionsName] = useState([]);

  useEffect(() => {
    api.get("Make").then((response) => {
      setMakes([...response.data]);
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
      setModelsOptions(formatModel);
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
    let allModelsOptions = document.getElementsByClassName(
      "form-model__select-options"
    );

    let allVersionsOptions = document.getElementsByClassName(
      "form-version__select-option"
    );

    if (!isNaN(event.target.value)) {
      for (let i = 0; i < allModelsOptions.length; i++) {
        allModelsOptions[i].removeAttribute("selected", "selected");
      }
      for (let i = 0; i < allVersionsOptions.length; i++) {
        allVersionsOptions[i].removeAttribute("selected", "selected");
      }

      allModelsOptions[0].setAttribute("selected", "selected");
      allVersionsOptions[0].setAttribute("selected", "selected");

      let allVersionsName = versions.map((version) => version["Name"]);
      allVersionsName = Array.from(new Set(allVersionsName));

      setVersionsName(allVersionsName);
      setModelsOptions(models);
      return;
    }

    let makeIdUserSelected = makes.filter(
      (make) => make["Name"] === event.target.value
    )[0]["ID"];

    let modelsUserSelected = models.filter(
      (model) => model["MakeID"] === makeIdUserSelected
    );

    let versionsUserSelected = null;
    let versionsNameUserSelected = [];
    for (let i = 0; i < modelsUserSelected.length; i++) {
      versionsUserSelected = versions.filter(
        (version) => version["ModelID"] === modelsUserSelected[i]["ID"]
      );

      for (let j = 0; j < versionsUserSelected.length; j++) {
        versionsNameUserSelected.push(versionsUserSelected[j]["Name"]);
      }
    }

    versionsNameUserSelected = Array.from(new Set(versionsNameUserSelected));

    setModelsOptions(modelsUserSelected);
    setVersionsName(versionsNameUserSelected);
  });

  const handleModelOptions = useCallback((event) => {
    let makeOptions = document.getElementsByClassName(
      "form-make__select-option"
    );

    if (!isNaN(event.target.value)) {
      for (let i = 0; i < makeOptions.length; i++) {
        makeOptions[i].removeAttribute("selected", "selected");
      }

      makeOptions[0].setAttribute("selected", "selected");

      let allVersionsName = versions.map((version) => version["Name"]);
      allVersionsName = Array.from(new Set(allVersionsName));

      setModelsOptions(models);
      setVersionsName(allVersionsName);

      return;
    }

    let modelNameUserSelected = models
      .filter((model) => model["Name"] === event.target.value)
      .map((model) => model["MakeID"])[0];

    let modelIdUserSelected = models.filter(
      (model) => model["Name"] === event.target.value
    )[0]["ID"];

    let makeUserSelected = makes.filter(
      (make) => make["ID"] === modelNameUserSelected
    )[0]["Name"];

    for (let i = 0; i < makeOptions.length; i++) {
      makeOptions[i].removeAttribute("selected", "selected");

      if (makeOptions[i].textContent === makeUserSelected) {
        makeOptions[i].setAttribute("selected", "selected");
        console.log(makeOptions[i]);
      }
    }

    let versionUserSelected = versions.filter(
      (version) => version["ModelID"] === modelIdUserSelected
    );

    let versionsNameUserSelected = [];
    for (let i = 0; i < versionUserSelected.length; i++) {
      versionsNameUserSelected.push(versionUserSelected[i]["Name"]);
    }

    setVersionsName(versionsNameUserSelected);
  });

  const handleVersionOptions = useCallback((event) => {
    let versionUserSelected = versions.filter(
      (version) => version["Name"] === event.target.value
    );

    let allMakeOptions = document.getElementsByClassName(
      "form-make__select-option"
    );

    let allModeOptions = document.getElementsByClassName(
      "form-model__select-options"
    );

    if (!isNaN(event.target.value)) {
      for (let i = 0; i < allMakeOptions.length; i++) {
        allMakeOptions[i].removeAttribute("selected", "selected");
      }
      for (let i = 0; i < allModeOptions.length; i++) {
        allModeOptions[i].removeAttribute("selected", "selected");
      }
      allModeOptions[0].setAttribute("selected", "selected");
      allMakeOptions[0].setAttribute("selected", "selected");

      let allVersionsName = versions.map((version) => version["Name"]);
      allVersionsName = Array.from(new Set(allVersionsName));

      setModelsOptions(models);
      setVersionsName(allVersionsName);

      return;
    }

    if (!isNaN(event.target.value)) {
      console.log("so entra se for igual de todos");
      let modelUserSelected = null;
      let optionsModelUserSelected = [];
      for (let i = 0; i < versionUserSelected.length; i++) {
        modelUserSelected = models.filter(
          (model) => model["ID"] === versionUserSelected[i]["ModelID"]
        )[0];
        optionsModelUserSelected.push(modelUserSelected);
      }
      console.log("atualizando", optionsModelUserSelected);

      setModelsOptions(optionsModelUserSelected);
    }
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
            id="oldCars"
            name="oldCars"
            defaultChecked
          />
          <label className="form-search__option-label" htmlFor="oldCars">
            Usados
          </label>
        </div>
      </div>
      <div className="form-group">
        <div className="form-group__block">Primeiro Bloco</div>
        <div className="form-group__block">
          <div className="form-group__block-details">
            <div className="form-make">
              <select
                onChange={handleMakeOptions}
                className="form-make__select"
              >
                <option className="form-make__select-option" value={0}>
                  Todas
                </option>
                {makes.map((make) => (
                  <option key={make["ID"]} className="form-make__select-option">
                    {make["Name"]}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-model">
              <select
                onChange={handleModelOptions}
                className="form-model__select"
              >
                <option value={0} className="form-model__select-options">
                  Todos
                </option>
                {modelsOptions.map((model) => (
                  <option
                    key={model["ID"]}
                    className="form-model__select-options"
                  >
                    {model["Name"]}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-version">
            <select
              onChange={handleVersionOptions}
              className="form-version__select"
            >
              <option value={0} className="form-version__select-option">
                Todos
              </option>
              {versionsName.map((modelName, index) => (
                <option className="form-version__select-option" key={index}>
                  {modelName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </FormSearch>
  );
};

export default Form;
