const config = {
    columns: [
        { 'accessor': 'title', 'label': 'Product Description', 'label-cn': '品名', 'width': '15em' },
        { 'accessor': 'cas', 'label': 'CAS', 'label-cn': null, 'width': '9em' },
        { 'accessor': 'brand', 'label': 'Brand', 'label-cn': '品牌', 'width': '8em' },
        { 'accessor': 'vendor', 'label': 'Vendor', 'label-cn': null, 'width': '8em' },
        { 'accessor': 'purity', 'label': 'Purity', 'label-cn': '纯度', 'width': '5em' },
        { 'accessor': 'grade', 'label': 'Grade', 'label-cn': '级别', 'width': '5em' },
        { 'accessor': 'size_norm', 'label': 'Pkg Size', 'label-cn': '包装', 'width': '5em' },
        { 'accessor': 'market_price', 'label': 'Price', 'label-cn': '价格', 'width': '4.5em' },
        { 'accessor': 'is_instock', 'label': 'In Stock', 'label-cn': null, 'width': '4em' },
        /*{'accessor': 'instock_qty', 'label': 'In-stock Qty', 'label-cn': null, 'width': '60px'}},*/
        /*{'accessor': 'category', 'label': 'Cat. No.', 'label-cn': '货号', 'width': '55px'}},*/
    ],
    rangeFilters: [
        { 'accessor': 'market_price', 'labelBefore': '¥', 'step': 0.01, 'min': 0 },
        { 'accessor': 'purity', 'labelAfter': '%', 'min': 0 },
        {
            'accessor': 'size_norm', 'unitList': [
                { mult: "1", unit: "- Unit -" },
                { mult: "1", unit: "g" },
                { mult: "0.001", unit: "mg" },
                { mult: "1000", unit: "kg" },
                { mult: "1", unit: "L" },
                { mult: "0.01", unit: "cL" },
                { mult: "0.001", unit: "mL" },
            ]
        }
    ],
    discreteFilters: [
        { 'accessor': 'vendor', values: null },
        { 'accessor': 'brand', values: null },
        { 'accessor': 'is_instock', values: null },
    ]
}

export default config;