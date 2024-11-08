

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/dropdown';

function SidebarMenu() {
    return (
        <div className="bg-dark col-auto col-md-">
            <div className="row">
                <div className="bg-dark min-vh-100 d-flex justify-content-between flex-column">
                    <div>

                        {/* Student Dashboard */}
                        <a className="text-decoration-none d-none d-sm-inline d-flex align-items-center p-3 text-white" href="/Student">
                            <i className="bi bi-laptop fs-4"></i>
                            <span className="ms-2">Student Dashboard</span>
                        </a>
                        <hr className="text-secondary" />

                        {/* Dashboard Link */}
                        <div className="dropdown open">
                            <span className="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
                                <i className="bi bi-speedometer2"></i>
                                <a className="ms-2 text-white" href="/Student"> Dashboard</a>
                            </span>
                        </div>

                        {/* Course Management Link */}
                        <div className="dropdown open">
                            <span className="text-decoration-none text-white dropdown-toggle p-3" type="button" id="triggerId" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-house"></i> <span className="ms-2">Course Management</span>
                            </span>
                            <ul className="dropdown-menu" aria-labelledby="triggerId">
                                <li><a className="dropdown-item" href="/ViewCourses">View all Courses</a></li>
                                <li><a className="dropdown-item" href="/enroll">Enroll Course</a></li>
                            </ul>
                        </div>

                        {/* Files Link */}
                        <div className="dropdown open">
                            <span className="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
                                <i className="bi bi-file-earmark"></i>
                                <a className="ms-2 text-white" href="/Files"> Study Materials</a>
                            </span>
                        </div>

                        {/* Settings Link */}
                        <div className="dropdown open">
                            <span className="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
                                <i className="bi bi-gear"></i>
                                <a className="ms-2 text-white" href="#"> Settings</a>
                            </span>
                        </div>

                        {/* Contact Us Link */}
                        <div className="dropdown open">
                            <span className="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
                                <i className="bi bi-telephone"></i>
                                <a className="ms-2 text-white" href="/ContactUs"> Contact Us</a>
                            </span>
                        </div>

                        {/* Help/Support Link */}
                        <div className="dropdown open">
                            <span className="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
                                <i className="bi bi-person-circle"></i>
                                <a className="ms-2 text-white" href="/HelpSupport"> Help/Support</a>
                            </span>
                        </div>

                    </div>

                    {/* Logout Button */}
                    <div>
                        <button
                            className="btn btn-outline-light w-100 p-3 mt-auto"
                            onClick={() => window.location.href = '/Login'} // Redirect to login page
                            style={{ borderRadius: '0' }}
                        >
                            <i className="bi bi-box-arrow-right"></i> <span className="ms-2">Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SidebarMenu;
