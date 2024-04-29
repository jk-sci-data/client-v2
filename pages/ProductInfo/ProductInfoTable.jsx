import React, { useMemo, useState, useEffect } from "react";
import CategoryTitle5 from "components/CategoryTitle5";
import ProductItem from "components/ProductItem";
import "./ProductInfo.sass";
import Pagination from "components/Pagination";

export default function ProductInfoTable({ data }) {
  console.log("productinfotable data", data);
  const [pageConfig, setPageConfig] = useState({
    "page": 1,
    "size": 25,
  });

  const totalPages = useMemo(() => {
    return Math.ceil((data?.length ?? 0) / pageConfig['size']);
  }, [pageConfig, data?.length]);

  const [minIndex, maxIndex] = useMemo(() => {
    const startIndex = (pageConfig.page - 1) * pageConfig.size;
    const endIndex = startIndex + pageConfig.size;
    return [startIndex, endIndex];
  }, [pageConfig.page, pageConfig.size]);

  const handlePreviousPage = () => {
    const { page } = pageConfig;
    if (page <= 1) {
      console.error("No previous page");
      return;
    }
    setPageConfig((prev) => ({ ...prev, "page": page - 1 }));
  };

  const handleNextPage = () => {
    const { page } = pageConfig;
    if (page >= totalPages) {
      console.error("No next page");
      return;
    }
    setPageConfig((prev) => ({ ...prev, "page": page + 1 }));
  };

  const handlePageChange = (pageNumber) => {
    setPageConfig((prev) => ({ ...prev, "page": pageNumber }));
  };
  return ((data?.length > 0) &&
    <div className="product_container">
      <div className="product-menu_container">
        <div className="flex-row-5 notosanssc-medium-granite-gray-16px" style={{ gap: "10px", textAlign: "left", margin: "6px 23px" }}>
          <div style={{ width: "1em" }}></div>
          <div style={{ flex: "1" }}>{"产品名称"}</div>
          <div style={{ width: "8em" }}>{"产品编号"}</div>
          <div style={{ width: "8em" }}>{"CAS号"}</div>
          <div style={{ width: "8em" }}>{"包装"}</div>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <CategoryTitle5 text={"Search results"} />
        <div className="product-column">
          {data.filter((d, i) => i >= minIndex && i < maxIndex)
            .map((d, i) => {
              console.log("data entry", d);
              return (
                <div key={i} className="product-item_container">
                  <ProductItem {...d} />
                </div>
              );
            })}
        </div>
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={pageConfig['page']}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageChange={handlePageChange}
      />
    </div>
  )
}