import React, { useEffect, useState, useDebugValue } from "react";
import api from "../../services/api";

import { FormSearch } from "./styles";

const Form = (props) => {
  const [make, setMake] = useState(null);
  const [makeId, setMakeId] = useState(null);
  const [model, setModel] = useState(null);
  const [modelId, setModelId] = useState(null);
  const [version, setVersion] = useState(null);

  useEffect(() => {
    api.get("Make").then((response) => {
      setMake(response.data);
    });
  }, []);

  useEffect(() => {
    if (make) {
      let makeId = [];
      for (let i = 0; i < make.length; i++) {
        makeId.push(make[i]["ID"]);
      }
      setMakeId(makeId);
    }
  }, [make]);

  useEffect(() => {
    function getModel() {
      if (makeId) {
        for (let i = 0; i < makeId.length; i++) {
          api.get(`Model?MakeID=${makeId[i]}`).then((response) => {
            setModel(response.data);
          });
        }
      }
    }
    getModel();
  }, [makeId]);

  useEffect(() => {
    if (model) {
      let modelId = [];

      for (let i = 0; i < model.length; i++) {
        modelId.push(model[i]["ID"]);
      }
      setModelId(modelId);
    }
  }, [model]);

  useEffect(() => {
    async function getVersion() {
      if (modelId) {
        for (let i = 0; i < modelId.length; i++) {
          await api.get(`Version?ModelID=${modelId[i]}`).then((response) => {
            console.log(response.data, i);
          });
        }
      }
    }
    getVersion();
  }, [modelId]);

  //console.log("make", make);
  //console.log("makeId", makeId);
  //console.log("model", model);
  //console.log("modelId", modelId);

  return (
    <FormSearch>
      <div>AQUI ESTARÁ O FORMULARIO</div>
    </FormSearch>
  );
};

export default Form;
