import { useState } from "react";

export default function useForm(init=null) {
    const [data, setData] = useState(init || {});

    const setValue = (key, value) => setData((prev) => ({
      ...prev,
      [key]: value
    }));

    const handleChange = (e, inputName=null) => {
        const {name, value} = e.target;
        inputName = inputName ?? name;
        console.log("form.handleChange called", inputName, value)
        setValue(inputName, String(value ?? ""));
    };
  
    return {
      data, setData, setValue,
      onChange: handleChange
    };
  }
  