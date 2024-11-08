

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed for routing

const StudentSidebar = () => {
  return (
    <div className="sidebar bg-light" style={{ width: '250px', height: '100vh' }}>
      <h3 className="p-3">Student Dashboard</h3>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link as={Link} to="/enrolled-courses" className="font-weight-bold">Enrolled Courses</Nav.Link>
          <Nav.Link as={Link} to="/enrolled-courses/list">Enrolled Courses List</Nav.Link>
          <Nav.Link as={Link} to="/enrolled-courses/progress">Course Progress Tracker</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/assessments" className="font-weight-bold">Assessments and Quizzes</Nav.Link>
          <Nav.Link as={Link} to="/assessments/quizzes">Available Quizzes</Nav.Link>
          <Nav.Link as={Link} to="/assessments/grades">Grade Overview</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/course-content" className="font-weight-bold">Course Content Access</Nav.Link>
          <Nav.Link as={Link} to="/course-content/materials">Course Materials</Nav.Link>
          <Nav.Link as={Link} to="/course-content/forum">Discussion Forum</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/certificate-management" className="font-weight-bold">Certificate Management</Nav.Link>
          <Nav.Link as={Link} to="/certificate-management/earned">Certificates Earned</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/profile-settings" className="font-weight-bold">Profile Settings</Nav.Link>
          <Nav.Link as={Link} to="/profile-settings/edit">Edit Profile</Nav.Link>
          <Nav.Link as={Link} to="/profile-settings/account">Account Settings</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/help-support" className="font-weight-bold">Help & Support</Nav.Link>
          <Nav.Link as={Link} to="/help-support/faqs">FAQs</Nav.Link>
          <Nav.Link as={Link} to="/help-support/contact">Contact Support</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default StudentSidebar;
