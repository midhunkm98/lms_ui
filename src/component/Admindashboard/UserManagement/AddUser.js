


import React, { useState } from 'react';
import AdminSidebar from '../../Sidebar/AdminSidebar'; // Adjust the path if necessary
import '../../../styles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const AddUser = () => {
    const [name, setName] = useState('');
    const [role] = useState('Instructor'); // Fixed value for role
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
            const response = await axios.post('https://localhost:7005/api/User/AddStudent', studentData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // // Check if response data has Message
            // if (response.data && response.data.Message) {
            //     alert(response.data.Message); // Show success message
            // } else {
            //     alert("Instructor added"); // Fallback message
            // }

            const idResponse = await axios.get('https://localhost:7005/api/User/last-inserted-user-id');

            const userId = idResponse.data.lastInsertedUserId;

            alert(`Instructor Added Sccessful! ID is: ${userId}`);
           

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
                <h1 className="mb-4">Add New Instructor</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Instructor Name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={role} // Fixed role value
                            placeholder="Instructor Role"
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
                            placeholder="Instructor Email"
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
                    <button type="submit" className="btn btn-primary">Add Instructor</button>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
