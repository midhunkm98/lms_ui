import React, { useState } from 'react';
import AdminSidebar from '../Sidebar/AdminSidebar'; // Adjust the path if necessary
import '../../styles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const UploadStudyMaterial = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [instructorId, setInstructorId] = useState('');
    const [file, setFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        if (!file) {
            setErrorMessage("No file uploaded.");
            return;
        }

        const formData = new FormData();
        formData.append('Title', title);
        formData.append('Description', description);
        formData.append('InstructorId', instructorId);
        formData.append('File', file);

        try {
            const response = await axios.post('https://localhost:7005/api/User/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setSuccessMessage(response.data); // Show success message
            setTitle('');
            setDescription('');
            setInstructorId('');
            setFile(null); // Reset the file input
            setErrorMessage(''); // Clear any previous error messages
        } catch (error) {
            const errorMsg = error.response?.data || error.message || "An unexpected error occurred.";
            setErrorMessage(errorMsg); // Show error message directly
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
                <h1 className="mb-4">Upload Study Material</h1>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            id="title"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter title"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            id="description"
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter description"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="instructorId" className="form-label">Instructor ID</label>
                        <input
                            type="text"
                            id="instructorId"
                            className="form-control"
                            value={instructorId}
                            onChange={(e) => setInstructorId(e.target.value)}
                            placeholder="Enter instructor ID"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="file" className="form-label">Upload File</label>
                        <input
                            type="file"
                            id="file"
                            className="form-control"
                            onChange={handleFileChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Upload Study Material</button>
                </form>
            </div>
        </div>
    );
};

export default UploadStudyMaterial;
