import React, { useEffect } from "react";
import TitleContainer from "components/TitleContainer";
import CategoryTitle2 from "components/CategoryTitle2";
import UploadWindowLarge from "components/UploadWindowLarge";
import AdviceContainer from "components/AdviceContainer";
import "./UploadMultiples.sass";
import { InputProvider, FileContext, FileProvider } from "contexts";
import MainApp from "components/MainApp";
import useExcelParser from "hooks/useExcelParser";
import { useForm } from "react-hook-form";


function ParserField(props) {
  const {form} = props;
  const { handleFileChange, clearData, data, jsonData } = useExcelParser(); //React.useContext(ExcelParserContext) || {};

  const file = form.watch("file");
  useEffect(() => {
    handleFileChange(file);
  }, [file]);

  useEffect(() => {
    console.log("jsondata", jsonData);
  }, [jsonData]);

  const handleSubmit = async (evt) => {
    const response = await fetch(process.env.REACT_APP_API_URL + "/api/product-info", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "PUT",
      body: JSON.stringify({ data: jsonData })
    });
    console.log(response);
    const r = await response.json();
    console.log(r);
  }

  if (!data) {
    return (
      <InputProvider field={form.register("file")}>
        <UploadWindowLarge />
      </InputProvider>
    );
  }

  return (
    <div className="test" style={{ display: "flex", flexFlow: "column nowrap", width: "55em" }}>
      <div style={{ textAlign: "right", height: "1.4em" }}>
        <button className="control-btn" type="button" onClick={handleSubmit}>Submit</button>
        <button className="control-btn" type="button" onClick={() => clearData()}>Reset</button>
      </div>
      <div style={{ maxHeight: "550px", width: "100%", overflowX: "auto" }}>
        <table style={{ maxWidth: "100%" }}>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function UploadMultiples(props) {
  const {
    titleContainerProps,
    categoryTitle2Props,
    adviceContainerProps,
  } = props;

  const form = useForm();

  return (
    <MainApp>
      <div className="main_container-5">
        <TitleContainer className={titleContainerProps.className}>{titleContainerProps.children}</TitleContainer>
        <div className="main-content-5">
          <CategoryTitle2
            categorytitle={categoryTitle2Props.categorytitle}
            btnProps={categoryTitle2Props.btnProps}
          />
          <ParserField form={form}/>
          <AdviceContainer
            text30={adviceContainerProps.text30}
            btnText3Props={adviceContainerProps.btnText3Props}
          />
        </div>
      </div>
    </MainApp>
  );
}

export default UploadMultiples;



function UploadField(props) {
  const {form} = props;
  const { handleFileChange, selectedFile } = React.useContext(FileContext);

  const handleSubmit = async (evt) => {
    if (!selectedFile) {
      console.log("no file!");
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:5000/api/update-products-by-file', {
        method: 'POST',
        body: formData,
      });
      console.log(response);
      const json = await response.json();
      console.log(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <InputProvider>
      <UploadWindowLarge />
    </InputProvider>
  )

  return (
    <div className="test" style={{ display: "flex", flexFlow: "column nowrap" }}>
      <div>
        <input type="file" name="file" onChange={handleFileChange} />
      </div>
      <div>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}