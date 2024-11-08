
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../Sidebar/AdminSidebar'; // Adjust the path if necessary
import '../../../styles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('https://localhost:7005/api/User/GetCourses'); // Adjust API endpoint if necessary
                setCourses(response.data); // Assuming the API returns an array of courses
            } catch (error) {
                setErrorMessage("Error fetching courses: " + (error.response ? error.response.data : error.message));
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="d-flex">
            {/* Sidebar Section */}
            <div className="col-md-3">
                <AdminSidebar />
            </div>

            {/* Main Content Section */}
            <div className="col-md-9 p-4" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 56px)' }}> {/* Adjust maxHeight to accommodate header height */}
                <h1>Course Management</h1>
                <Link to="/AddCourse" className="btn btn-success mb-3">Add New Course</Link>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <h2>Course List</h2>
                <div className="row">
                    {courses.map(course => (
                        <div key={course.id} className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{course.title}</h5>
                                    <p className="card-text">{course.description}</p>
                                    <p className="card-text"><strong>Category:</strong> {course.category}</p>
                                    <p className="card-text"><strong>Fees:</strong> ₹ {course.fees.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseList;

