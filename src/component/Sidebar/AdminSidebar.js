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




//                         <a className="text-decoration-none d-none d-sm-inline d-flex align-items-center p-3 text-white" href="/Admin">
//                             <i className="bi bi-laptop fs-4"></i> {/* <i className="bi bi-book fs-4"></i>  */}
//                             <span className="ms-2">Admin Dashboard</span>
//                         </a>





//                         <hr className="text-secondary " />

//                         <div class="dropdown open">
//                             <span class="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
//                                 <i className=" bi bi-house"></i>
//                                 <a class="ms-2 text-white" href="/Admin"> Dashboard</a>
//                             </span>
//                         </div>




//                         <div class="dropdown open">
//                             <span class="text-decoration-none text-white dropdown-toggle p-3" type="button" id="triggerId" data-bs-toggle="dropdown" aria-expanded="false">
//                                 <i className="bi bi-file-earmark-text "></i> <span className="ms-2">Instructor Management</span>
//                             </span>

//                             <ul class="dropdown-menu" aria-labelledby="triggerId">
//                                 <li><a class="dropdown-item" href="/UserList">View all Instructor</a></li>
//                                 <li><a class="dropdown-item" href="/AddUser">Add Instructor</a></li>
//                                 <li><a class="dropdown-item" href="/EditUser">Edit Instructor</a></li>
//                             </ul>
//                         </div>


//                         <div class="dropdown open">
//                             <span class="text-decoration-none text-white dropdown-toggle p-3" type="button" id="ordersDropdown" data-bs-toggle="dropdown" aria-expanded="false">
//                                 <i className="bi bi-table"></i>
//                                 <span class="ms-2">Course Management</span>
//                             </span>

//                             <ul class="dropdown-menu" aria-labelledby="ordersDropdown">
//                                 <li><a class="dropdown-item" href="/CourseList">View all courses</a></li>
//                                 <li><a class="dropdown-item" href="/AddCourse">Add courses</a></li>
//                                 <li><a class="dropdown-item" href="/EditCourse">Edit Course</a></li>
//                             </ul>
//                         </div>

//                         <div class="dropdown open">
//                             <span class="text-decoration-none text-white dropdown-toggle p-3" type="button" id="ordersDropdown" data-bs-toggle="dropdown" aria-expanded="false">
//                                 <i className="bi bi-mortarboard"></i>
//                                 <span class="ms-2">Student Management</span>
//                             </span>

//                             <ul class="dropdown-menu" aria-labelledby="ordersDropdown">
//                                 <li><a class="dropdown-item" href="/StudentList">View all Students</a></li>
//                                 <li><a class="dropdown-item" href="/AddStudent">Add Student</a></li>
//                                 <li><a class="dropdown-item" href="/StudentEdit">Edit Student</a></li>
//                             </ul>
//                         </div>

//                         <div class="dropdown open">
//                             <span class="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
//                                 <i className="bi bi-book"></i>
//                                 <a className="ms-2 text-white" href="/StudentReport"> Study Materials Upload</a>

//                             </span>
//                         </div>
//                         <div class="dropdown open">
//                             <span class="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
//                                 <i class="bi bi-file-earmark"></i>
//                                 <a class="ms-2 text-white" href="/StudyReport"> Files</a>
//                             </span>
//                         </div>


//                         <div class="dropdown open">
//                             <span class="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
//                                 <i className="bi bi-graph-up"></i>
//                                 <a class="ms-2 text-white" href="/Report"> Reports and Analytics</a>
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
//                                     Help/Support
//                                 </a>
//                             </span>
//                         </div>



//                     </div>
//                     {/* <div class="dropdown open">
//                         <span class="text-decoration-none text-white dropdown-toggle p-3" type="button" id="triggerId" data-bs-toggle="dropdown" aria-expanded="false" >
//                             <i className="bi bi-user-circle "></i> <span className="ms-2">Admin</span>
//                         </span>

//                         <ul class="dropdown-menu" aria-labelledby="triggerId">
//                             <li><a class="dropdown-item" href="/Course">Action</a></li>
//                             <li><a class="dropdown-item" href="/Home">Settings</a></li>
//                             <li><a class="dropdown-item" href="/Login">Logout</a></li>

//                         </ul>
//                     </div> */}

// <div>
//     <button 
//         className="btn btn-danger p-3" 
//         onClick={() => window.location.href = '/Login'} // Redirect to login page
//     >
//         <i className="bi bi-box-arrow-right"></i> <span className="ms-2">Logout</span>
//     </button>
// </div>

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
                        {/* Sidebar Menu Links */}
                        <a className="text-decoration-none d-none d-sm-inline d-flex align-items-center p-3 text-white" href="/Admin">
                            <i className="bi bi-laptop fs-4"></i>
                            <span className="ms-2">Admin Dashboard</span>
                        </a>

                        <hr className="text-secondary" />

                        <div className="dropdown open">
                            <span className="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
                                <i className="bi bi-house"></i>
                                <a className="ms-2 text-white" href="/Admin"> Dashboard</a>
                            </span>
                        </div>

                        {/* Other Menu Items */}
                        <div className="dropdown open">
                            <span className="text-decoration-none text-white dropdown-toggle p-3" type="button" id="triggerId" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-file-earmark-text"></i> <span className="ms-2">Instructor Management</span>
                            </span>
                            <ul className="dropdown-menu" aria-labelledby="triggerId">
                                <li><a className="dropdown-item" href="/UserList">View all Instructor</a></li>
                                <li><a className="dropdown-item" href="/AddUser">Add Instructor</a></li>
                                <li><a className="dropdown-item" href="/EditUser">Edit Instructor</a></li>
                            </ul>
                        </div>

                        <div className="dropdown open">
                            <span className="text-decoration-none text-white dropdown-toggle p-3" type="button" id="ordersDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-table"></i>
                                <span className="ms-2">Course Management</span>
                            </span>
                            <ul className="dropdown-menu" aria-labelledby="ordersDropdown">
                                <li><a className="dropdown-item" href="/CourseList">View all courses</a></li>
                                <li><a className="dropdown-item" href="/AddCourse">Add courses</a></li>
                                <li><a className="dropdown-item" href="/EditCourse">Edit Course</a></li>
                            </ul>
                        </div>

                        <div className="dropdown open">
                            <span className="text-decoration-none text-white dropdown-toggle p-3" type="button" id="ordersDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-mortarboard"></i>
                                <span className="ms-2">Student Management</span>
                            </span>
                            <ul className="dropdown-menu" aria-labelledby="ordersDropdown">
                                <li><a className="dropdown-item" href="/StudentList">View all Students</a></li>
                                <li><a className="dropdown-item" href="/AddStudent">Add Student</a></li>
                                <li><a className="dropdown-item" href="/StudentEdit">Edit Student</a></li>
                            </ul>
                        </div>

                        <div className="dropdown open">
                            <span className="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
                                <i className="bi bi-book"></i>
                                <a className="ms-2 text-white" href="/StudentReport"> Study Materials Upload</a>
                            </span>
                        </div>
                        <div className="dropdown open">
                            <span className="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
                                <i className="bi bi-file-earmark"></i>
                                <a className="ms-2 text-white" href="/StudyReport"> Files</a>
                            </span>
                        </div>

                        <div className="dropdown open">
                            <span className="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
                                <i className="bi bi-graph-up"></i>
                                <a className="ms-2 text-white" href="/Report"> Reports and Analytics</a>
                            </span>
                        </div>

                        <div className="dropdown open">
                            <span className="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
                                <i className="bi bi-gear"></i>
                                <a className="ms-2 text-white" href="#"> Settings</a>
                            </span>
                        </div>

                        <div className="dropdown open">
                            <span className="text-decoration-none text-white p-3" type="button" id="dashboardLink" aria-current="page">
                                <i className="bi bi-telephone"></i>
                                <a className="ms-2 text-white" href="/ContactUs"> Contact Us</a>
                            </span>
                        </div>

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
