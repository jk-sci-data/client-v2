import { useMemo, useState } from 'react';
import { parse } from 'papaparse';
import * as XLSX from 'xlsx';

const readFileAsArrayBuffer = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            resolve(event.target.result);
        };
        reader.onerror = (event) => {
            reject(event.target.error);
        };
        reader.readAsArrayBuffer(file);
    });
};

const readFileAsText = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            resolve(event.target.result);
        };
        reader.onerror = (event) => {
            reject(event.target.error);
        };
        reader.readAsText(file);
    });
};

async function parseFile(file) {
    const fileExtension = file.name.split('.').pop().toLowerCase();
    if (fileExtension === 'csv') {
        return parseCSV(file);
    } else if (fileExtension === 'xls' || fileExtension === 'xlsx') {
        return parseExcel(file);
    } else {
        throw new Error('Unsupported file format');
    }
}

/*
const parseCSV = async (file) => {
    const result = await readFileAsText(file);
    const { data } = parse(result, { header: true });
    return data;
};*/

const parseCSV = async (file) => {
    const result = await readFileAsText(file);
    const { data } = parse(result, { header: true });
    const headers = Object.keys(data[0]);
    const rows = data.map((row) => headers.map((header) => row[header]));
    return [headers, ...rows];
};

const parseExcel = async (file) => {
    const arrayBuffer = await readFileAsArrayBuffer(file);
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    return data;
};

function convertToJsonArray(data) {
    const headers = data[0];
    const jsonArray = data.slice(1)
        .map((row) => {
            const jsonObject = {};
            headers.forEach((header, index) => {
                jsonObject[header] = row[index];
            });
            return jsonObject;
        })
        .filter((row) => {
            return Object.values(row).some((value) => {
                return value !== null && value !== undefined && value !== "";
            });
        });
    return jsonArray;
}

function useExcelParser() {
    const [currentFile, setCurrentFile] = useState(null);
    const [data, setData] = useState(null);

    const jsonData = useMemo(() => {
        if (!data) return null;
        return convertToJsonArray(data);
    }, [data]);

    const clearData = () => setData(null);

    const handleFileChange = async (file /*event*/) => {
        //const file = event.target.files[0];
        setCurrentFile(file);
        if (file) {
            const parsedData = await parseFile(file);
            setData(parsedData);
        } else {
            setData(null);
        }
    };

    return {
        currentFile,
        clearData,
        data, jsonData,
        handleFileChange,
    };
}

export default useExcelParser;