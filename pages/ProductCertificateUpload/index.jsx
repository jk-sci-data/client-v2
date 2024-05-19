import React from "react";
import TitleContainer from "components/TitleContainer";
import CategoryTitle3 from "components/CategoryTitle3";
import UploadWindowLarge from "components/UploadWindowLarge";
import PromptContainer from "components/PromptContainer";
import "./ProductCertificateUpload.sass";
import MainApp from "components/MainApp";
import useFileUpload from "hooks/useFileUpload";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { InputProvider } from "contexts/InputContext";

function ProductCertificateUpload(props) {
  const { titleContainerProps, categoryTitle3Props, footerProps } = props;

  const { data: uploadResponse, mutateAsync: uploadFile } = useMutation({
    mutationFn: async () => {
      const res = await fetch(process.env.REACT_APP_API_URL + "/api/files/upload-certificate");
      return res;
    }
  });

  const { register, control } = useForm();

  return (
    <MainApp>
      <div className="main_container-1">
        <TitleContainer className={titleContainerProps.className}>{titleContainerProps.children}</TitleContainer>
        <div className="main-content-1">
          <CategoryTitle3 categorytitle={categoryTitle3Props.categorytitle} />
          <InputProvider field={register("file")} >
            <UploadWindowLarge />
          </InputProvider>
          <PromptContainer />
        </div>
      </div>
      {true && <DevTool control={control} />}
    </MainApp>
  );
}

export default ProductCertificateUpload;
