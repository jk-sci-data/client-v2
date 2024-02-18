import { useState } from "react";

export default function useForm(init={}) {
    const [data, setData] = useState(init);

    const setValue = (key, value) => setData((prev) => ({
      ...prev,
      [key]: value
    }));

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log("form.handleChange called", name, value)
        setValue(name, String(value ?? ""));
    };
  
    return {
      data, setData, setValue,
      onChange: handleChange
    };
  }
  