
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../Sidebar/AdminSidebar';
import '../../../styles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const EditCourse = () => {
    const [courses, setCourses] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('https://localhost:7005/api/User/GetCourses'); // Adjust API endpoint
                setCourses(response.data);
            } catch (error) {
                console.error("Error fetching courses:", error);
                setErrorMessage("Error fetching courses: " + (error.response ? error.response.data : error.message));
            }
        };

        fetchCourses();
    }, []);

    const handleDelete = async (courseId) => {
        if (window.confirm("Are you sure you want to delete this course?")) {
            try {
                await axios.delete(`https://localhost:7005/api/User/DeleteCourse/${courseId}`); // Updated API endpoint
                setCourses(courses.filter(course => course.id !== courseId));
                alert("Course deleted successfully.");
            } catch (error) {
                console.error("Error deleting course:", error);
                const errorMessage = error.response && error.response.data
                    ? error.response.data
                    : error.message;
                setErrorMessage("Error deleting course: " + errorMessage);
            }
        }
    };
    
    const handleEdit = async (courseId) => {
        const course = courses.find(c => c.id === courseId);
        if (course) {
            const updatedName = prompt("Enter new course name:", course.title);
            const updatedDescription = prompt("Enter new course description:", course.description);
            const updatedCategory = prompt("Enter new course category:", course.category);
            const updatedFees = prompt("Enter new course fees:", course.fees);

            if (updatedName && updatedDescription && updatedCategory && updatedFees) {
                const updatedCourse = {
                    id: course.id, // Ensure to include the id
                    title: updatedName,
                    description: updatedDescription,
                    category: updatedCategory,
                    fees: parseFloat(updatedFees) // Ensure fees is a number
                };

                try {
                    await axios.put(`https://localhost:7005/api/User/EditCourse/${courseId}`, updatedCourse); // Updated API endpoint
                    setCourses(courses.map(c => (c.id === courseId ? updatedCourse : c)));
                    alert("Course updated successfully.");
                } catch (error) {
                    console.error("Error updating course:", error);
                    setErrorMessage("Error updating course: " + (error.response ? error.response.data : error.message));
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
                <h1>Course Management</h1>
                <Link to="/AddCourse" className="btn btn-success mb-3">Add New Course</Link>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <h2>Course List</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Fees</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map(course => (
                            <tr key={course.id}>
                                <td>{course.title}</td>
                                <td>{course.description}</td>
                                <td>{course.category}</td>
                                <td>{course.fees}</td>
                                <td>
                                    <button 
                                        className="btn btn-warning btn-sm me-2" 
                                        onClick={() => handleEdit(course.id)}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        className="btn btn-danger btn-sm" 
                                        onClick={() => handleDelete(course.id)}
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

export default EditCourse;
