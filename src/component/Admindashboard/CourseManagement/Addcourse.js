

import React, { useState } from 'react';
import AdminSidebar from '../../Sidebar/AdminSidebar'; // Adjust the path if necessary
import '../../../styles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const AddCourse = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [fees, setFees] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
    
        const courseData = {
            Title: title,
            Description: description,
            Category: category,
            Fees: parseFloat(fees), // Convert fees to a number
        };
    
        try {
            const response = await axios.post('https://localhost:7005/api/User/AddCourse', courseData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            // Check if response data has Message
            if (response.data && response.data.Message) {
                alert(response.data.Message); // Show success message
            } else {
                alert("Course added"); // Fallback message
            }
    
            // Reset form fields after successful submission
            setTitle('');
            setDescription('');
            setCategory('');
            setFees('');
        } catch (error) {
            // Capture the error message directly for alert
            const errorMessage = error.response?.data || error.message || "An unexpected error occurred.";
            alert(errorMessage); // Show error message directly
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
                <h1 className="mb-4">Add New Course</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Course Title"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Course Description"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder="Course Category"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            className="form-control"
                            value={fees}
                            onChange={(e) => setFees(e.target.value)}
                            placeholder="Course Fees"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Course</button>
                </form>
            </div>
        </div>
    );
};
export default AddCourse;
