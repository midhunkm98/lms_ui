

import React, { useState } from 'react';
import AdminSidebar from '../../Sidebar/AdminSidebar'; // Adjust the path if necessary
import '../../../styles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const AddStudent = () => {
    const [name, setName] = useState('');
    const [role] = useState('Student'); // Fixed value for role
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const studentData = {
            Name: name,
            Role: role, // Include role in the data sent to the API
            Email: email,
            Password: password,
        };

        try {
            // First API call to add the student
            const response = await axios.post('https://localhost:7005/api/User/AddStudent', studentData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Check if response data has Message
                // Second API call to get the last inserted user ID
                const idResponse = await axios.get('https://localhost:7005/api/User/last-inserted-user-id');

                // Access the lastInsertedUserId from the response
                const userId = idResponse.data.lastInsertedUserId;

                // Alert the user with the registration success message and the ID
                alert(`Student Added Sccessful! ID is: ${userId}`);
                // alert("Student addeds"); // Fallback message
            

            // Reset form fields after successful submission
            setName('');
            setEmail('');
            setPassword('');
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
                <h1 className="mb-4">Add New Student</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Student Name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={role} // Fixed role value
                            placeholder="Student Role"
                            readOnly // Make the input read-only
                            disabled // Disable the input field
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Student Email"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Student</button>
                </form>
            </div>
        </div>
    );
};

export default AddStudent;
