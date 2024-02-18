import { useState, useEffect } from 'react';

export default function useDataNav(_data, _rowsPerPage=null, _pageNumber=1) {
    const [data, setData] = useState(_data);
    const [rowsPerPage, setRowsPerPage] = useState(_rowsPerPage ?? _data.length);
    const [pageNumber, setPageNumber] = useState(_pageNumber);

    const maxPage = Math.max(1, Math.ceil((data.length ?? 0) / rowsPerPage));

    useEffect(() => {
        if (pageNumber > maxPage) {
            console.warn("Page number exceeds max page. Value will be readjusted.");
            setPageNumber(maxPage);
        }
    }, [data, rowsPerPage, pageNumber]);

    const startIndex = (pageNumber - 1) * limit;
    const endIndex = pageNumber * limit;
    const pageData = data.slice(startIndex, endIndex)
    
    return {
        pageData,
        maxPage,
        pageNumber,
        rowsPerPage,
        setPageNumber,
        setRowsPerPage,
        setData
    }
}
