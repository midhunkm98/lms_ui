

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../Sidebar/AdminSidebar';
import '../../../styles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const UserList = () => {
    const [instructors, setInstructors] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchInstructors = async () => {
            try {
                const response = await axios.get('https://localhost:7005/api/User/instructors');
                setInstructors(response.data);
            } catch (error) {
                console.error("Error fetching instructors:", error);
                setErrorMessage("Error fetching instructors: " + (error.response ? error.response.data : error.message));
            }
        };

        fetchInstructors();
    }, []);

    const handleDelete = async (instructorId) => {
        if (window.confirm("Are you sure you want to delete this instructor?")) {
            try {
                await axios.delete(`https://localhost:7005/api/User/instructor/${instructorId}`); // Updated API endpoint
                setInstructors(instructors.filter(instructor => instructor.id !== instructorId));
                alert("Instructor deleted successfully.");
            } catch (error) {
                console.error("Error deleting instructor:", error);
                const errorMessage = error.response && error.response.data
                    ? error.response.data
                    : error.message;
                setErrorMessage("Error deleting instructor: " + errorMessage);
            }
        }
    };
    
    const handleEdit = async (instructorId) => {
        const instructor = instructors.find(i => i.id === instructorId);
        if (instructor) {
            const updatedName = prompt("Enter new name:", instructor.name);
            const updatedEmail = prompt("Enter new email:", instructor.email);
            const updatedRole = prompt("Enter new role:", instructor.role);

            if (updatedName && updatedEmail && updatedRole) {
                const updatedInstructor = {
                   userId: instructor.id, // Ensure to include the id
                    name: updatedName,
                    email: updatedEmail,
                    role: updatedRole
                };

                try {
                    await axios.put(`https://localhost:7005/api/User/instructor/${instructorId}`, updatedInstructor); // Updated API endpoint
                    setInstructors(instructors.map(i => (i.id === instructorId ? updatedInstructor : i)));
                    alert("Instructor updated successfully.");
                } catch (error) {
                    console.error("Error updating instructor:", error);
                    setErrorMessage("Error updating instructor: " + (error.response ? error.response.data : error.message));
                }
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
            <div className="col-md-9 p-4" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 56px)' }}>
                <h1>Instructor Management</h1>
                <Link to="/AddUser" className="btn btn-success mb-3">Add New User</Link>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <h2>Instructor List</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {instructors.map(instructor => (
                            <tr key={instructor.id}>
                                <td>{instructor.name}</td>
                                <td>{instructor.email}</td>
                                <td>{instructor.role}</td>
                                <td>
                                    <button 
                                        className="btn btn-warning btn-sm me-2" 
                                        onClick={() => handleEdit(instructor.id)}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        className="btn btn-danger btn-sm" 
                                        onClick={() => handleDelete(instructor.id)}
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

export default UserList;
