
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
                        </tr>
                    </thead>
                    <tbody>
                        {instructors.map(instructor => (
                            <tr key={instructor.id}>
                                <td>{instructor.name}</td>
                                <td>{instructor.email}</td>
                                <td>{instructor.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;
