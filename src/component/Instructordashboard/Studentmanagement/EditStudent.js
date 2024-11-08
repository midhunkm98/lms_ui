
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Instructor from '../../Sidebar/InstructorSidebar';
import '../../../styles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const StudentEdit = () => {
    const [students, setStudents] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    // const navigate = useNavigate(); // For navigation after editing

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('https://localhost:7005/api/User/students');
                setStudents(response.data);
            } catch (error) {
                console.error("Error fetching students:", error);
                setErrorMessage("Error fetching students: " + (error.response ? error.response.data : error.message));
            }
        };

        fetchStudents();
    }, []);

    const handleDelete = async (studentId) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            try {
                await axios.delete(`https://localhost:7005/api/User/students/${studentId}`);
                setStudents(students.filter(student => student.id !== studentId)); // Remove deleted student from state
                alert("Student deleted successfully.");
            } catch (error) {
                console.error("Error deleting student:", error);
                setErrorMessage("Error deleting student: " + (error.response ? error.response.data : error.message));
            }
        }
    };

    const handleEdit = async (studentId) => {
        const student = students.find(s => s.id === studentId);
        if (student) {
            const updatedName = prompt("Enter new name:", student.name);
            const updatedEmail = prompt("Enter new email:", student.email);
            const updatedRole = prompt("Enter new role:", student.role);

            if (updatedName && updatedEmail && updatedRole) {
                const updatedStudent = {
                    ...student,
                    name: updatedName,
                    email: updatedEmail,
                    role: updatedRole
                };

                try {
                    await axios.put(`https://localhost:7005/api/User/students/${studentId}`, updatedStudent);
                    setStudents(students.map(s => (s.id === studentId ? updatedStudent : s))); // Update student in state
                    alert("Student updated successfully.");
                } catch (error) {
                    console.error("Error updating student:", error);
                    setErrorMessage("Error updating student: " + (error.response ? error.response.data : error.message));
                }
            }
        }
    };

    return (
        <div className="d-flex">
            {/* Sidebar Section */}
            <div className="col-md-3">
                <Instructor />
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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.role}</td>
                                <td>
                                    <button 
                                        className="btn btn-warning btn-sm me-2" 
                                        onClick={() => handleEdit(student.id)}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        className="btn btn-danger btn-sm" 
                                        onClick={() => handleDelete(student.id)}
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

export default StudentEdit;
