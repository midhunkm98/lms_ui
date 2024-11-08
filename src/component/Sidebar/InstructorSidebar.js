// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/js/dist/dropdown';



// function SidebarMenu() {
//     return (
//         <div className="bg-dark col-auto col-md-">
//             <div className="row ">
//                 <div className="bg-dark  min-vh-100 d-flex justify-content-between flex-column">
//                     <div >
                       
//                     <a className="text-decoration-none d-none d-sm-inline d-flex align-items-center p-3 text-white" href="/Instructor">
//                             <i className="bi bi-laptop fs-4"></i> {/* <i className="bi bi-book fs-4"></i>  */}
//                             <span className="ms-2">Instructor Dashboard</span>

//                         </a>
//                         <hr className="text-secondary " />

//                         <div class="dropdown open">
//                             <span class="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
//                                 <i className="bi bi-speedometer2"></i>
//                                 <a class="ms-2 text-white" href="/Instructor"> Dashboard</a>
//                             </span>
//                         </div>




//                         <div class="dropdown open">
//                             <span class="text-decoration-none text-white dropdown-toggle p-3" type="button" id="triggerId" data-bs-toggle="dropdown" aria-expanded="false">
//                                 <i className="bi bi-house"></i> <span className="ms-2">My Courses</span>
//                             </span>

//                             <ul class="dropdown-menu" aria-labelledby="triggerId">
//                                 <li><a class="dropdown-item" href="/ViewCourse">View all courses</a></li>
//                                 <li><a class="dropdown-item" href="/CreateCourse">Create new courses</a></li>
//                                 {/* <li><a class="dropdown-item" href="/EditCreatedCourse">Edit Course</a></li> */}
//                             </ul>
//                         </div>

//                         <div class="dropdown open">
//                             <span class="text-decoration-none text-white dropdown-toggle p-3" type="button" id="ordersDropdown" data-bs-toggle="dropdown" aria-expanded="false">
//                             <i className="bi bi-mortarboard"></i>
//                                 <span class="ms-2">Student Management</span>
//                             </span>

//                             <ul class="dropdown-menu" aria-labelledby="ordersDropdown">
//                                 <li><a class="dropdown-item" href="/ViewStudents">View all Students</a></li>
//                                 <li><a class="dropdown-item" href="/StudentAdd">Add Student</a></li>
//                                 <li><a class="dropdown-item" href="/StudentEdits">Edit Student</a></li>
//                             </ul>
//                         </div>

                        
                       
//                         <div class="dropdown open">
//                             <span class="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
//                                 <i className="bi bi-graph-up"></i>
//                                 <a class="ms-2 text-white" href="/Reports"> Student Report</a>
//                             </span>
//                         </div>
//                         <div class="dropdown open">
//                             <span class="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
//                                 <i className="bi bi-book"></i>
//                                 <a className="ms-2 text-white" href="/FileUpload"> Study Materials Upload</a>

//                             </span>
//                         </div>
                        
//                         <div class="dropdown open">
//                             <span class="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
//                                 <i className="bi bi-gear"></i>
//                                 <a class="ms-2 text-white" href="#"> Settings</a>
//                             </span>
//                         </div>

//                         <div class="dropdown open">
//                             <span class="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
//                                 <i className="bi bi-telephone"></i>
//                                 <a class="ms-2 text-white" href="/ContactUs">
//                                     Contact Us
//                                 </a>
//                             </span>
//                         </div>

//                         <div class="dropdown open">
//                             <span class="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
//                                 <i className="bi bi-person-circle"></i>
//                                 <a class="ms-2 text-white" href="/HelpSupport">
//                                     <i className="fas fa-question-circle"></i> Help/Support
//                                 </a>
//                             </span>
//                         </div>
//                     </div>
//                     <div class="dropdown open">
//                         <span class="text-decoration-none text-white dropdown-toggle p-3" type="button" id="triggerId" data-bs-toggle="dropdown" aria-expanded="false" >
//                             <i className="bi bi-user-circle "></i> <span className="ms-2">Instructor</span>
//                         </span>

//                         <ul class="dropdown-menu" aria-labelledby="triggerId">
//                             <li><a class="dropdown-item" href="/Course">Action</a></li>
//                             <li><a class="dropdown-item" href="/Home">Settings</a></li>
//                             <li><a class="dropdown-item" href="/Login">Logout</a></li>

//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default SidebarMenu



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
                        {/* Instructor Dashboard */}
                        <a className="text-decoration-none d-none d-sm-inline d-flex align-items-center p-3 text-white" href="/Instructor">
                            <i className="bi bi-laptop fs-4"></i>
                            <span className="ms-2">Instructor Dashboard</span>
                        </a>
                        <hr className="text-secondary" />

                        {/* Dashboard Link */}
                        <div className="dropdown open">
                            <span className="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
                                <i className="bi bi-speedometer2"></i>
                                <a className="ms-2 text-white" href="/Instructor"> Dashboard</a>
                            </span>
                        </div>

                        {/* My Courses Link */}
                        <div className="dropdown open">
                            <span className="text-decoration-none text-white dropdown-toggle p-3" type="button" id="triggerId" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-house"></i> <span className="ms-2">My Courses</span>
                            </span>
                            <ul className="dropdown-menu" aria-labelledby="triggerId">
                                <li><a className="dropdown-item" href="/ViewCourse">View all courses</a></li>
                                <li><a className="dropdown-item" href="/CreateCourse">Create new courses</a></li>
                            </ul>
                        </div>

                        {/* Student Management Link */}
                        <div className="dropdown open">
                            <span className="text-decoration-none text-white dropdown-toggle p-3" type="button" id="ordersDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-mortarboard"></i>
                                <span className="ms-2">Student Management</span>
                            </span>
                            <ul className="dropdown-menu" aria-labelledby="ordersDropdown">
                                <li><a className="dropdown-item" href="/ViewStudents">View all Students</a></li>
                                <li><a className="dropdown-item" href="/StudentAdd">Add Student</a></li>
                                <li><a className="dropdown-item" href="/StudentEdits">Edit Student</a></li>
                            </ul>
                        </div>

                        {/* Reports Link */}
                        <div className="dropdown open">
                            <span className="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
                                <i className="bi bi-graph-up"></i>
                                <a className="ms-2 text-white" href="/Reports"> Student Report</a>
                            </span>
                        </div>

                        {/* Study Materials Upload Link */}
                        <div className="dropdown open">
                            <span className="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
                                <i className="bi bi-book"></i>
                                <a className="ms-2 text-white" href="/FileUpload"> Study Materials Upload</a>
                            </span>
                        </div>
                        <div className="dropdown open">
                            <span className="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
                                <i className="bi bi-file-earmark"></i>
                                <a className="ms-2 text-white" href="/StudyFiles"> Files</a>
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

                    {/* Logout Button (Replaces User Dropdown) */}
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
