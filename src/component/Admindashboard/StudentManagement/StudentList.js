import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../Sidebar/AdminSidebar';
import '../../../styles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('https://localhost:7005/api/User/students'); // Adjust the endpoint if necessary
                setStudents(response.data);
            } catch (error) {
                console.error("Error fetching students:", error);
                setErrorMessage("Error fetching students: " + (error.response ? error.response.data : error.message));
            }
        };

        fetchStudents();
    }, []);

    return (
        <div className="d-flex">
            {/* Sidebar Section */}
            <div className="col-md-3">
                <AdminSidebar />
            </div>

            {/* Main Content Section */}
            <div className="col-md-9 p-4" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 56px)' }}>
                <h1>Student Management</h1>
                <Link to="/AddStudent" className="btn btn-success mb-3">Add New Student</Link>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <h2>Student List</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentList;
