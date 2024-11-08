import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Instructor from '../Sidebar/InstructorSidebar';
import '../../styles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ReportLists = () => {
    const [enrollments, setEnrollments] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    console.log("sdfgh",enrollments);
    

    useEffect(() => {
        const fetchEnrollments = async () => {
            try {
                const response = await axios.get('https://localhost:7005/api/User/api/User/GetEnrollDetails'); // Updated API endpoint
                setEnrollments(response.data);
                console.log("xdfgh",setEnrollments);
                
                console.log("datazs",response.data[0]);
                
            } catch (error) {
                console.error("Error fetching enrollments:", error);
                setErrorMessage("Error fetching enrollments: " + (error.response ? error.response.data : error.message));
            }
        };

        fetchEnrollments();
    }, []);

    return (
        <div className="d-flex">
            {/* Sidebar Section */}
            <div className="col-md-3">
                <Instructor />
            </div>

            {/* Main Content Section */}
            <div className="col-md-9 p-4" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 56px)' }}>
                <h1>Enrollment Report</h1>
                <Link to="/AddEnrollment" className="btn btn-success mb-3">Add New Enrollment</Link>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
             
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Birthday</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th>Pincode</th>
                            <th>Email</th>
                            <th>Card Number</th>
                            <th>Expiration Date</th>
                            <th>CVV</th>
                            <th>Course Name</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Fees</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enrollments.map(enrollment => (
                            <tr key={enrollment.Id}>
                                <td>{enrollment.firstName}</td>
                                <td>{enrollment.lastName}</td>
                                <td>{new Date(enrollment.birthday).toLocaleDateString()}</td>
                                <td>{enrollment.gender}</td>
                                <td>{enrollment.address}</td>
                                <td>{enrollment.pincode}</td>
                                <td>{enrollment.email}</td>
                                <td>{enrollment.cardNumber}</td>
                                <td>{enrollment.expirationDate}</td>
                                <td>{enrollment.cvv}</td>
                                <td>{enrollment.courseName}</td>
                                <td>{enrollment.description}</td>
                                <td>{enrollment.category}</td>
                                <td>{enrollment.fees}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportLists;
