import { useState } from 'react';

function useFileUpload(endpoint) {
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const [formData, setFormData] = useState(null);


    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        console.log('Selected file:', selectedFile);
    
        const _formData = new FormData();
        _formData.append("file", selectedFile);
    
        // Convert FormData to an object for logging
        const formDataObject = {};
        for (const [key, value] of _formData.entries()) {
          formDataObject[key] = value;
        }
        console.log("this is formdata", formDataObject);
    
        setFormData(_formData);
      };
    

    const handleUpload = async () => {
        if (!file) {
            setUploadStatus('Please select a file first.');
            return;
        }

        console.log("This is the formData", formData);

        try {
            setUploadStatus('Uploading...');
            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                setUploadStatus(`Upload successful: ${result.message}`);
            } else {
                throw new Error('Failed to upload file');
            }
        } catch (error) {
            setUploadStatus(`Upload failed: ${error.message}`);
            throw new Error(`Upload failed: ${error.message}`); // Re-throw the error for external handling if necessary
        }
    };

    return {
        file,
        uploadStatus,
        handleFileChange,
        handleUpload
    };
}

export default useFileUpload;
