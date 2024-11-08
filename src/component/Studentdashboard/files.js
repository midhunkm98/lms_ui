
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudentSidebar from '../Sidebar/StudentSidebar'; // Adjust the path if necessary
import 'bootstrap/dist/css/bootstrap.min.css';

const UploadedFilesList = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchUploadedFiles = async () => {
            try {
                const response = await axios.get('https://localhost:7005/api/User/api/User/GetAllStudyMaterials');
                setUploadedFiles(response.data);
            } catch (error) {
                // Extract error message properly
                const errorMsg = error.response?.data?.message || error.message || "An unexpected error occurred.";
                setErrorMessage(errorMsg);
            }
        };

        fetchUploadedFiles();
    }, []);

    const handleDownload = (filePath) => {
        const link = document.createElement('a');
        link.href = filePath;
        link.download = filePath.split('/').pop(); // Extracts the filename from the URL
        link.click();
    };

    return (
        <div className="d-flex">
            {/* Sidebar Section */}
            <div className="col-md-3">
                <StudentSidebar />
            </div>

            {/* Main Content Section */}
            <div className="col-md-9 p-4">
                <h2> Study Materials</h2>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Instructor ID</th>
                            <th>Uploaded Date</th>
                            {/* <th>File</th> */}
                            <th>Actions</th> {/* Added Actions column for Download button */}
                        </tr>
                    </thead>
                    <tbody>
                        {uploadedFiles.map((file) => (
                            <tr key={file.id}> {/* Use unique key */}
                                <td>{file.title}</td>
                                <td>{file.description}</td>
                                <td>{file.instructorId}</td>
                                <td>{new Date(file.uploadedDate).toLocaleDateString()}</td>
                                {/* <td>
                                    <a href={file.filePath} target="_blank" rel="noopener noreferrer">View File</a>
                                </td> */}
                                <td>
                                    {/* Download Button */}
                                    <button 
                                        className="btn btn-success btn-sm"
                                        onClick={() => handleDownload(file.filePath)}
                                    >
                                        Download
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UploadedFilesList;
