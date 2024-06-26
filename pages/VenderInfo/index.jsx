import React, { useState, useMemo, useEffect, useContext } from "react";
import TitleContainer from "components/TitleContainer";
import InputRegular5 from "components/InputRegular5";/*
import InputBoxRegular from "components/InputBoxRegular";
import BtnOption5 from "components/BtnOption5";
import TextOption from "components/TextOption";*/
import InputRegular6 from "components/InputRegular6";/*
import InputRegular7 from "components/InputRegular7";
import InputRegular8 from "components/InputRegular8";
import InputRegular9 from "components/InputRegular9";
import InputRegular10 from "components/InputRegular10";*/
import "./VenderInfo.sass";

import MainApp from "components/MainApp";
import { InputProvider } from "contexts/InputContext";
import Select from 'react-select';
import useCountryStateCity from "./useCountryStateCity";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { AppContext } from "contexts/AppContext";

const prefixUrl = process.env.REACT_APP_API_URL + "/api";

function VenderInfo(props) {
  const [initialized, setInitialized] = useState(false);

  const {
    spanText1,
    spanText2,
    btn,
    titleContainerProps,
    inputRegular51Props,
    inputRegular52Props,
    inputRegular6Props,
    inputRegular53Props,
    inputRegular9Props,
    inputRegular10Props,
    btn22Props
  } = props;

  const form = useForm();
  const { auth } = useContext(AppContext);
  console.log("this is auth", auth);

  const vendorId = useMemo(() => {
    const { account } = auth;
    return account?.orgId;
  }, [auth?.account]);

  const { register, control, handleSubmit } = form;

  const {
    countryOptions,
    provinceOptions,
    cityOptions,
    selectedCountry,
    selectedProvince,
    selectedCity,
    setSelectedCountryByCode,
    setSelectedProvinceByCode,
    setSelectedCityByCode
  } = useCountryStateCity();

  const { data: fetchedData } = useQuery({
    queryKey: ["vendor-info", vendorId],
    queryFn: async () => {
      const res = await fetch(`${prefixUrl}/vendor-info/${vendorId}`, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.accessToken}`
        },
      });
      return res.json();
    },
    enabled: !!vendorId,
    retry: false
  });

  const initialForm = useMemo(() => {
    if (!fetchedData) return null;
    return fetchedData?.[0]?.['data'];
  }, [JSON.stringify(fetchedData)]);

  useEffect(() => {
    if (initialized || !initialForm)
      return;

    form.reset(initialForm);

    // Update country, province, and city in sequence
    if (initialForm.country) {
      setSelectedCountryByCode(initialForm.country);
    }
    else {
      setInitialized(true);
    }
  }, [JSON.stringify(initialForm)]);

useEffect(() => {
  if (initialized || !initialForm)
    return;
  if (initialForm.province) {
    setSelectedProvinceByCode(initialForm.province);
  }
  else {
    setInitialized(true);
  }
}, [selectedCountry]);

const { mutateAsync: saveFormData } = useMutation({
  mutationFn: async ({ formData }) => {
    if (!auth.accessToken) {
      throw new Error("No accessToken");
    }
    const res = await fetch(`${prefixUrl}/vendor-info`, {
      method: "PUT",
      mode: "cors",
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.accessToken}`
      },
      body: JSON.stringify({ data: [{ ...formData, vendor_id: vendorId }] })
    });
    return res;
  }
});

const onSubmit = async (evt) => {
  const formData = form.getValues();
  console.log("submitting formdata", formData);
  const res = await saveFormData({ formData });
}

const handleAddOption = () => { };
const radioOptions = [];

return (
  <MainApp>
    <div className="main_container" style={{ width: '100%' }}>
      <div className="cont-2 mb-3 ml-5">
        <TitleContainer className={titleContainerProps.className}>{titleContainerProps.children}</TitleContainer>

        <div className="cont-2">
          <InputProvider field={register("company_name", { required: true })}>
            <InputRegular5
              inputSubtitleContainer9Props={inputRegular51Props.inputSubtitleContainer9Props}
              inputBoxRegularProps={inputRegular51Props.inputBoxRegularProps}
            />
          </InputProvider>
          <label className="input_regular-4">
            <div className="input_subtitle_container-20">
              <div className="subtitle-32 notosanssc-normal-white-20px">
                <span className="notosanssc-normal-well-read-20px">*</span>
                <span className="notosanssc-normal-shark-20px">经营性质</span>{/*business type */}
              </div>
            </div>
            <Controller control={control}
              name="business_type"
              render={({ field }) => (
                <Select {...field}
                  options={[
                    { value: "", label: "必填" },
                    { value: "option1", label: "Option1" },
                    { value: "option2", label: "Option2" },
                    { value: "option3", label: "Option3" }
                  ]}
                  onChange={(selectedOption) => {
                    field.onChange(selectedOption);
                  }}
                  classNamePrefix="select-field"
                  onSelectResetsInput={false}
                />
              )}
            />
          </label>
          <label className="input_container_regular">
            <div className="input_title_container">
              <div className="text-172 notosanssc-normal-white-20px">
                <span className="notosanssc-normal-well-read-20px">{spanText1}</span>
                <span className="notosanssc-normal-shark-20px">{spanText2}</span>
              </div>
            </div>
            <div className="t_column">
              <div className="input_container-1">
                <div className="input-box_regular-3">
                  <input {...register("point_of_contact")}
                    className="placeholder-3 valign-text-middle notosanssc-normal-quick-silver-20px"
                    style={{ border: "none", backgroundColor: "transparent", color: "#303030" }}
                    placeholder="请输入全名"
                    // You can also add an onKeyDown handler to submit on Enter key press
                    onKeyDown={(e) => e.key === 'Enter' && handleAddOption()}
                  />
                </div>
                <img className="btn-31" src={btn} alt="btn" onClick={handleAddOption} style={{ cursor: 'pointer' }} />
              </div>
              {radioOptions.map((option, index) => (
                <div key={option.id}>
                  <label>
                    {option.label}
                    <input {...register("options")}
                      type="radio"
                      /*name="options"*/
                      value={option.id}
                    /*checked={selectedOption === option.id}
                    onChange={handleRadioChange}*/
                    />
                  </label>
                  {selectedOption === option.id && <span> 默认联系人</span>}
                </div>
              ))}
            </div>
          </label>
          <InputProvider field={register("phone_number", { required: true })}>
            <InputRegular5
              inputSubtitleContainer9Props={inputRegular52Props.inputSubtitleContainer9Props}
              inputBoxRegularProps={inputRegular52Props.inputBoxRegularProps}
            />
          </InputProvider>
          <InputProvider field={register("mobile_number", { required: false })}>
            <InputRegular6
              inputSubtitleContainer2Props={inputRegular6Props.inputSubtitleContainer2Props}
              inputBoxRegularProps={inputRegular6Props.inputBoxRegularProps}
            />
          </InputProvider>
          <label className="input_regular-4">
            <div className="input_subtitle_container-20">
              <div className="subtitle-32 notosanssc-normal-white-20px">
                <span className="notosanssc-normal-well-read-20px">*</span>
                <span className="notosanssc-normal-shark-20px">国家</span>
              </div>
            </div>
            <Controller control={control}
              name="country"
              render={({ field }) => (
                <Select {...field}
                  options={[{"name": "- Select Country -", "isoCode": ""}].concat(countryOptions)}
                  //value={selectedCountry}
                  value={countryOptions.find(option => option.isoCode === field.value) || null}
                  onChange={(selectedOption) => {
                    field.onChange(selectedOption ? selectedOption.isoCode : selectedOption);
                    setSelectedCountryByCode(selectedOption?.isoCode);
                  }}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.isoCode}
                  classNamePrefix="select-field"
                  onSelectResetsInput={false}
                  inputProps={{ autocomplete: 'off' }}
                />
              )}
            />
          </label>
          <label className="input_regular-4">
            <div className="input_subtitle_container-20">
              <div className="subtitle-32 notosanssc-normal-white-20px">
                <span className="notosanssc-normal-well-read-20px">*</span>
                <span className="notosanssc-normal-shark-20px">省</span>
              </div>
            </div>
            <Controller control={control}
              name="province"
              rules={{ required: true }}
              render={({ field }) => (
                <Select {...field}
                  options={[{"name": "- Select Province -", "isoCode": ""}].concat(provinceOptions)}
                  //value={selectedProvince}
                  value={provinceOptions.find(option => option.isoCode === field.value) || null}
                  onChange={(selectedOption) => {
                    field.onChange(selectedOption ? selectedOption.isoCode : selectedOption);
                    setSelectedProvinceByCode(selectedOption?.isoCode);
                    //handeProvinceChange(selectedOption);
                  }}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.isoCode}
                  classNamePrefix="select-field"
                  onSelectResetsInput={false}
                  inputProps={{ autocomplete: 'off' }}
                />
              )}
            />
          </label>
          <label className="input_regular-4">
            <div className="input_subtitle_container-20">
              <div className="subtitle-32 notosanssc-normal-white-20px">
                <span className="notosanssc-normal-well-read-20px">*</span>
                <span className="notosanssc-normal-shark-20px">市</span>
              </div>
            </div>
            <Controller control={control}
              name="city"
              rules={{ required: true }}
              render={({ field }) => (
                <Select {...field}
                  options={[{"name": "- Select City -", "isoCode": ""}].concat(cityOptions)}
                  //value={selectedCity}
                  value={cityOptions.find(option => option.isoCode === field.value) || null}
                  onChange={(selectedOption) => {
                    field.onChange(selectedOption ? selectedOption.isoCode : selectedOption);
                    setSelectedCityByCode(selectedOption?.name);
                  }}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.name}
                  classNamePrefix="select-field"
                  onSelectResetsInput={false}
                  inputProps={{ autocomplete: 'off' }}
                />
              )}
            />
          </label>
          <label className="input_regular-4">
            <div className="input_subtitle_container-20">
              <div className="subtitle-32 notosanssc-normal-white-20px">
                <span className="notosanssc-normal-well-read-20px">*</span>
                <span className="notosanssc-normal-shark-20px">区</span>
              </div>
            </div>
            <Controller control={control}
              name="district"
              render={({ field }) => (
                <Select {...field}
                  options={[
                    { value: "", label: "必填" },
                    { value: "option1", label: "Option1" },
                    { value: "option2", label: "Option2" },
                    { value: "option3", label: "Option3" }
                  ]}
                  onChange={(selectedOption) => {
                    field.onChange(selectedOption);
                  }}
                  classNamePrefix="select-field"
                  onSelectResetsInput={false}
                  inputProps={{ autocomplete: 'off' }}
                />
              )}
            />
          </label>
          {/* 
            <InputRegular5 //landline
              inputSubtitleContainer9Props={inputRegular53Props.inputSubtitleContainer9Props}
              inputBoxRegularProps={inputRegular53Props.inputBoxRegularProps}
              />*/}
          {/* 
            <InputRegular9 //fax
              spanText1={inputRegular9Props.spanText1}
              spanText2={inputRegular9Props.spanText2}
              inputBoxRegularProps={inputRegular9Props.inputBoxRegularProps}
            />*/}
          {/*
            <InputRegular10 //mailbox
              inputSubtitleContainer10Props={inputRegular10Props.inputSubtitleContainer10Props}
              inputBoxRegularProps={inputRegular10Props.inputBoxRegularProps}
            />
          */}
        </div>
        {/* //beneficiary
          <label className="input_regular-10">
            <div className="input_subtitle_container-20">
              <div className="subtitle-32 notosanssc-normal-white-20px">
                <span className="notosanssc-normal-well-read-20px">*</span>
                <span className="notosanssc-normal-shark-20px">受益人</span>
              </div>
            </div>
            <div className="input-box_regular-3">
              <input className="placeholder-3 valign-text-middle notosanssc-normal-quick-silver-20px"
                style={{ border: "none", backgroundColor: "trasnparent", color: "#303030" }} placeholder="必填"
              />
            </div>
        </label>*/
        }
        <label className="input_regular-10">
          <div className="input_subtitle_container-20">
            <div className="subtitle-32 notosanssc-normal-white-20px">
              <span className="notosanssc-normal-well-read-20px">*</span>
              <span className="notosanssc-normal-shark-20px">开户银行</span>

            </div>
          </div>
          <div className="input-box_regular-3">
            <input {...register("bank", { required: true })}
              className="placeholder-3 valign-text-middle notosanssc-normal-quick-silver-20px"
              style={{ border: "none", backgroundColor: "trasnparent", color: "#303030" }} placeholder="必填"
            />
          </div>
        </label>
        <label className="input_regular-10">
          <div className="input_subtitle_container-20">
            <div className="subtitle-32 notosanssc-normal-white-20px">
              <span className="notosanssc-normal-well-read-20px">*</span>
              <span className="notosanssc-normal-shark-20px">银行账号</span>

            </div>
          </div>
          <div className="input-box_regular-3">
            <input {...register("bank_number", { required: true })}
              className="placeholder-3 valign-text-middle notosanssc-normal-quick-silver-20px"
              style={{ border: "none", backgroundColor: "trasnparent", color: "#303030" }} placeholder="必填"
            />
          </div>
        </label>
      </div>
      <button onClick={onSubmit} className="btn-4" style={{ margin: '0 auto' }}>
        <div className="text_label-87 valign-text-middle notosanssc-medium-white-16px">保存</div>
      </button>

    </div>
    <DevTool control={control} />
  </MainApp>
);
}

export default VenderInfo;
