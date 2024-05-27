import { createContext, useContext, useEffect, useState } from "react";
import { AppContext } from "contexts/AppContext";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useQuery, useMutation } from "@tanstack/react-query";

const VendorInfoContext = createContext();

const prefixUrl = process.env.REACT_APP_API_URL + "/api";

function VendorInfoProvider({ children }) {
  const { constants } = useContext(AppContext) || {};
  const { productInfoEditaddProductData } = constants || {};

  const searchParams = new URLSearchParams(window.location.search);
  const productId = searchParams.get("id"); //assume new product if no ID
}
