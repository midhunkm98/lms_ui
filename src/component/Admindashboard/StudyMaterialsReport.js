

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminSidebar from '../Sidebar/AdminSidebar'; // Adjust the path if necessary
// import 'bootstrap/dist/css/bootstrap.min.css';

// const UploadedFilesList = () => {
//     const [uploadedFiles, setUploadedFiles] = useState([]);
//     const [errorMessage, setErrorMessage] = useState('');

//     useEffect(() => {
//         const fetchUploadedFiles = async () => {
//             try {
//                 const response = await axios.get('https://localhost:7005/api/User/api/User/GetAllStudyMaterials');
//                 setUploadedFiles(response.data);
//             } catch (error) {
//                 const errorMsg = error.response?.data || error.message || "An unexpected error occurred.";
//                 setErrorMessage(errorMsg);
//             }
//         };

//         fetchUploadedFiles();
//     }, []);

//     const handleDelete = async (fileId) => {
//         if (window.confirm("Are you sure you want to delete this File?")) {
//             try {
//                 await axios.delete(`https://localhost:7005/api/User/files/${fileId}`); // Updated API endpoint
//                 setUploadedFiles(uploadedFiles.filter(file => file.id !== fileId));
//                 alert("File deleted successfully.");
//             } catch (error) {
//                 console.error("Error deleting File:", error);
//                 const errorMessage = error.response && error.response.data
//                     ? error.response.data
//                     : error.message;
//                 setErrorMessage("Error deleting instructor: " + errorMessage);
//             }
//         }
//     };
//     // const handleDelete = async (fileId) => {
//     //     try {
//     //         await axios.delete(`https://localhost:7005/api/User/DeleteFile/${fileId}`);
//     //         setUploadedFiles(uploadedFiles.filter(file => file.id !== fileId));
//     //     } catch (error) {
//     //         const errorMsg = error.response?.data || error.message || "An unexpected error occurred.";
//     //         setErrorMessage(errorMsg);
//     //     }
//     // };

//     return (
//         <div className="d-flex">
//             {/* Sidebar Section */}
//             <div className="col-md-3">
//                 <AdminSidebar />
//             </div>

//             {/* Main Content Section */}
//             <div className="col-md-9 p-4">
//                 <h2>Uploaded Study Materials</h2>
//                 {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//                 <table className="table table-striped">
//                     <thead>
//                         <tr>
//                             <th>Title</th>
//                             <th>Description</th>
//                             <th>Instructor ID</th>
//                             <th>Uploaded Date</th>
//                             <th>File</th>
//                             <th>Delete</th> {/* New column for actions */}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {uploadedFiles.map((file) => (
//                             <tr key={file.id}> {/* Use a unique key */}
//                                 <td>{file.title}</td>
//                                 <td>{file.description}</td>
//                                 <td>{file.instructorId}</td>
//                                 <td>{new Date(file.uploadedDate).toLocaleDateString()}</td>
//                                 <td>
//                                     <a href={file.filePath} target="_blank" rel="noopener noreferrer">View File</a>
//                                 </td>
//                                 <td>
//                                     <button
//                                         className="btn btn-danger"
//                                         onClick={() => handleDelete(file.id)} // Call delete handler on click
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default UploadedFilesList;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminSidebar from '../Sidebar/AdminSidebar'; // Adjust the path if necessary
// import 'bootstrap/dist/css/bootstrap.min.css';

// const UploadedFilesList = () => {
//     const [uploadedFiles, setUploadedFiles] = useState([]);
//     const [errorMessage, setErrorMessage] = useState('');

//     useEffect(() => {
//         const fetchUploadedFiles = async () => {
//             try {
//                 const response = await axios.get('https://localhost:7005/api/User/api/User/GetAllStudyMaterials');
//                 setUploadedFiles(response.data);
//             } catch (error) {
//                 const errorMsg = error.response?.data || error.message || "An unexpected error occurred.";
//                 setErrorMessage(errorMsg);
//             }
//         };

//         fetchUploadedFiles();
//     }, []);

//     const handleDelete = async (fileId) => {
//         if (window.confirm("Are you sure you want to delete this file?")) {
//             try {
//                 await axios.delete(`https://localhost:7005/api/User/files/${fileId}`); // Updated API endpoint
//                 setUploadedFiles(prevFiles => prevFiles.filter(file => file.id !== fileId)); // Update state correctly
//                 alert("File deleted successfully.");
//             } catch (error) {
//                 console.error("Error deleting file:", error);
//                 // Extracting the error message
//                 const errorMsg = error.response?.data || error.message || "An unexpected error occurred.";
//                 setErrorMessage("Error deleting file: " + errorMsg);
//             }
//         }
//     };

  
    

//     return (
//         <div className="d-flex">
//             {/* Sidebar Section */}
//             <div className="col-md-3">
//                 <AdminSidebar />
//             </div>

//             {/* Main Content Section */}
//             <div className="col-md-9 p-4">
//                 <h2>Uploaded Study Materials</h2>
//                 {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//                 <table className="table table-striped">
//                     <thead>
//                         <tr>
//                             <th>Title</th>
//                             <th>Description</th>
//                             <th>Instructor ID</th>
//                             <th>Uploaded Date</th>
//                             <th>File</th>
//                             <th>Delete</th> {/* New column for actions */}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {uploadedFiles.map((file) => (
//                             <tr key={file.id}> {/* Use a unique key */}
//                                 <td>{file.title}</td>
//                                 <td>{file.description}</td>
//                                 <td>{file.instructorId}</td>
//                                 <td>{new Date(file.uploadedDate).toLocaleDateString()}</td>
//                                 <td>
//                                     <a href={file.filePath} target="_blank" rel="noopener noreferrer">View File</a>
//                                 </td>
//                                 <td>
//                                     <button
//                                         className="btn btn-danger"
//                                         onClick={() => handleDelete(file.id)} // Call delete handler on click
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default UploadedFilesList;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminSidebar from '../Sidebar/AdminSidebar'; // Adjust the path if necessary
// import 'bootstrap/dist/css/bootstrap.min.css';

// const UploadedFilesList = () => {
//     const [uploadedFiles, setUploadedFiles] = useState([]);
//     const [errorMessage, setErrorMessage] = useState('');

//     useEffect(() => {
//         const fetchUploadedFiles = async () => {
//             try {
//                 const response = await axios.get('https://localhost:7005/api/User/api/User/GetAllStudyMaterials');
//                 setUploadedFiles(response.data);
//             } catch (error) {
//                 const errorMsg = error.response?.data || error.message || "An unexpected error occurred.";
//                 setErrorMessage(errorMsg);
//             }
//         };

//         fetchUploadedFiles();
//     }, []);

//     const handleDelete = async (fileId) => {
//         if (window.confirm("Are you sure you want to delete this file?")) {
//             try {
//                 const response = await axios.delete(`https://localhost:7005/api/User/files/${fileId}`); // API delete call
//                 if (response.status === 204) { // Check for No Content status code (successful delete)
//                     setUploadedFiles(prevFiles => prevFiles.filter(file => file.id !== fileId)); // Remove the file from the list
//                     alert("File deleted successfully.");
//                 }
//             } catch (error) {
//                 console.error("Error deleting file:", error);
//                 // Extracting the error message
//                 const errorMsg = error.response?.data || error.message || "An unexpected error occurred.";
//                 setErrorMessage("Error deleting file: " + errorMsg);
//             }
//         }
//     };

//     return (
//         <div className="d-flex">
//             {/* Sidebar Section */}
//             <div className="col-md-3">
//                 <AdminSidebar />
//             </div>

//             {/* Main Content Section */}
//             <div className="col-md-9 p-4">
//                 <h2>Uploaded Study Materials</h2>
//                 {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//                 <table className="table table-striped">
//                     <thead>
//                         <tr>
//                             <th>Title</th>
//                             <th>Description</th>
//                             <th>Instructor ID</th>
//                             <th>Uploaded Date</th>
//                             <th>File</th>
//                             <th>Delete</th> {/* Column for Delete button */}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {uploadedFiles.map((file) => (
//                             <tr key={file.id}> {/* Use unique key */}
//                                 <td>{file.title}</td>
//                                 <td>{file.description}</td>
//                                 <td>{file.instructorId}</td>
//                                 <td>{new Date(file.uploadedDate).toLocaleDateString()}</td>
//                                 <td>
//                                     <a href={file.filePath} target="_blank" rel="noopener noreferrer">View File</a>
//                                 </td>
//                                 <td>
//                                     <button
//                                         className="btn btn-danger"
//                                         onClick={() => handleDelete(file.id)} // Call delete handler on click
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default UploadedFilesList;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminSidebar from '../Sidebar/AdminSidebar'; // Adjust the path if necessary
// import 'bootstrap/dist/css/bootstrap.min.css';

// const UploadedFilesList = () => {
//     const [uploadedFiles, setUploadedFiles] = useState([]);
//     const [errorMessage, setErrorMessage] = useState('');

//     useEffect(() => {
//         const fetchUploadedFiles = async () => {
//             try {
//                 const response = await axios.get('https://localhost:7005/api/User/api/User/GetAllStudyMaterials');
//                 setUploadedFiles(response.data);
//             } catch (error) {
//                 // Extract error message properly
//                 const errorMsg = error.response?.data?.message || error.message || "An unexpected error occurred.";
//                 setErrorMessage(errorMsg);
//             }
//         };

//         fetchUploadedFiles();
//     }, []);

//     const handleDelete = async (fileId) => {
//         if (window.confirm("Are you sure you want to delete this file?")) {
//             try {
//                 const response = await axios.delete(`https://localhost:7005/api/User/files/${fileId}`);
                
//                 if (response.status === 204) {
//                     setUploadedFiles(prevFiles => prevFiles.filter(file => file.id !== fileId));
//                     alert("File deleted successfully.");
//                 }
//             } catch (error) {
//                 // Improved error handling
//                 console.error("Error deleting file:", error);
//                 // Extract meaningful error message
//                 let errorMsg = "An unexpected error occurred while deleting the file.";
                
//                 if (error.response) {
//                     // Check for server-side error response
//                     errorMsg = error.response?.data?.message || "Error from the server: " + error.response?.data || errorMsg;
//                 } else if (error.message) {
//                     // If no response, use the general error message
//                     errorMsg = error.message;
//                 }
                
//                 setErrorMessage("Error deleting file: " + errorMsg);
//             }
//         }
//     };

//     return (
//         <div className="d-flex">
//             {/* Sidebar Section */}
//             <div className="col-md-3">
//                 <AdminSidebar />
//             </div>

//             {/* Main Content Section */}
//             <div className="col-md-9 p-4">
//                 <h2>Uploaded Study Materials</h2>
//                 {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//                 <table className="table table-striped">
//                     <thead>
//                         <tr>
//                             <th>Title</th>
//                             <th>Description</th>
//                             <th>Instructor ID</th>
//                             <th>Uploaded Date</th>
//                             <th>File</th>
//                             <th>Delete</th> {/* Column for Delete button */}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {uploadedFiles.map((file) => (
//                             <tr key={file.id}> {/* Use unique key */}
//                                 <td>{file.title}</td>
//                                 <td>{file.description}</td>
//                                 <td>{file.instructorId}</td>
//                                 <td>{new Date(file.uploadedDate).toLocaleDateString()}</td>
//                                 <td>
//                                     <a href={file.filePath} target="_blank" rel="noopener noreferrer">View File</a>
//                                 </td>
//                                 <td>
//                                     <button
//                                         className="btn btn-danger"
//                                         onClick={() => handleDelete(file.id)} // Call delete handler on click
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default UploadedFilesList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminSidebar from '../Sidebar/AdminSidebar'; // Adjust the path if necessary
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
                const errorMsg = error.response?.data?.message || error.message || "An unexpected error occurred.";
                setErrorMessage(errorMsg);
            }
        };

        fetchUploadedFiles();
    }, []);

    const handleDelete = async (fileId) => {
        if (window.confirm("Are you sure you want to delete this file?")) {
            try {
                await axios.delete(`https://localhost:7005/api/User/files/${fileId}`);
                setUploadedFiles(uploadedFiles.filter(file => file.id !== fileId)); // Remove deleted file from state
                alert("File deleted successfully.");
            } catch (error) {
                console.error("Error deleting file:", error);
                setErrorMessage("Error deleting file: " + (error.response ? error.response.data : error.message));
            }
        }
    };

    return (
        <div className="d-flex">
            {/* Sidebar Section */}
            <div className="col-md-3">
                <AdminSidebar />
            </div>

            {/* Main Content Section */}
            <div className="col-md-9 p-4">
                <h2>Uploaded Study Materials</h2>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Instructor ID</th>
                            <th>Uploaded Date</th>
                            <th>File</th>
                            <th>Actions</th> {/* Rename Delete to Actions for consistency */}
                        </tr>
                    </thead>
                    <tbody>
                        {uploadedFiles.map((file) => (
                            <tr key={file.id}> {/* Use unique key */}
                                <td>{file.title}</td>
                                <td>{file.description}</td>
                                <td>{file.instructorId}</td>
                                <td>{new Date(file.uploadedDate).toLocaleDateString()}</td>
                                <td>
                                    <a href={file.filePath} target="_blank" rel="noopener noreferrer">View File</a>
                                </td>
                                <td>
                                    {/* Action buttons */}
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(file.id)} // Delete button triggers handleDelete
                                    >
                                        Delete
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


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminSidebar from '../Sidebar/AdminSidebar'; // Adjust the path if necessary
// import 'bootstrap/dist/css/bootstrap.min.css';

// const UploadedFilesList = () => {
//     const [uploadedFiles, setUploadedFiles] = useState([]);
//     const [errorMessage, setErrorMessage] = useState('');

//     // Fetch uploaded files when the component mounts
//     useEffect(() => {
//         const fetchUploadedFiles = async () => {
//             try {
//                 // Make sure the URL is correct and the server is running
//                 const response = await axios.get('https://localhost:7005/api/User/GetAllStudyMaterials');
//                 setUploadedFiles(response.data); // Store response data in the state
//             } catch (error) {
//                 // Handle API call errors
//                 const errorMsg = error.response?.data || error.message || "An unexpected error occurred.";
//                 setErrorMessage(errorMsg);
//             }
//         };

//         fetchUploadedFiles();
//     }, []); // Empty dependency array, runs once on mount

//     // Handle file deletion
//     const handleDelete = async (fileId) => {
//         if (window.confirm("Are you sure you want to delete this file?")) {
//             try {
//                 // Make sure to use the correct DELETE endpoint for deleting the file
//                 const response = await axios.delete(`https://localhost:7005/api/User/DeleteStudyMaterial/${fileId}`);
                
//                 // Check if the delete operation was successful
//                 if (response.status === 200) {
//                     // Update state to remove the deleted file from the list
//                     setUploadedFiles(uploadedFiles.filter(file => file.id !== fileId));
//                     alert("File deleted successfully.");
//                 } else {
//                     setErrorMessage("Failed to delete the file.");
//                 }
//             } catch (error) {
//                 console.error("Error deleting file:", error);
//                 const errorMsg = error.response?.data || error.message || "An unexpected error occurred.";
//                 setErrorMessage("Error deleting file: " + errorMsg);
//             }
//         }
//     };

//     return (
//         <div className="d-flex">
//             {/* Sidebar Section */}
//             <div className="col-md-3">
//                 <AdminSidebar />
//             </div>

//             {/* Main Content Section */}
//             <div className="col-md-9 p-4">
//                 <h2>Uploaded Study Materials</h2>
//                 {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//                 <table className="table table-striped">
//                     <thead>
//                         <tr>
//                             <th>Title</th>
//                             <th>Description</th>
//                             <th>Instructor ID</th>
//                             <th>Uploaded Date</th>
//                             <th>File</th>
//                             <th>Delete</th> {/* New column for actions */}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {uploadedFiles.length > 0 ? (
//                             uploadedFiles.map((file) => (
//                                 <tr key={file.id}> {/* Use a unique key */}
//                                     <td>{file.title}</td>
//                                     <td>{file.description}</td>
//                                     <td>{file.instructorId}</td>
//                                     <td>{new Date(file.uploadedDate).toLocaleDateString()}</td>
//                                     <td>
//                                         {file.filePath ? (
//                                             <a href={file.filePath} target="_blank" rel="noopener noreferrer">View File</a>
//                                         ) : (
//                                             <span>No file available</span> // If no file path exists
//                                         )}
//                                     </td>
//                                     <td>
//                                         <button
//                                             className="btn btn-danger"
//                                             onClick={() => handleDelete(file.id)} // Call delete handler on click
//                                         >
//                                             Delete
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="6" className="text-center">No study materials available.</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default UploadedFilesList;
