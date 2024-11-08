import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Home/Login';
import Signup from './component/Home/Signup';
import Home from './component/Home/Home';
import Admin from './component/Dashboard/Admin';
import Student from './component/Dashboard/Student';
import Instructor from './component/Dashboard/Instructor';
import Course from './component/Course/CourseCreation';

import AdminSidebar from './component/Sidebar/AdminSidebar';
import StudentSidebar from './component/Sidebar/StudentSidebar';
import InstructorSidebar from './component/Sidebar/InstructorSidebar';

import AddCourse from './component/Admindashboard/CourseManagement/Addcourse';
import CourseList from './component/Admindashboard/CourseManagement/Courselist';
import EditCourse from './component/Admindashboard/CourseManagement/Editcourse';
import AddUser from './component/Admindashboard/UserManagement/AddUser';
import EditUser from './component/Admindashboard/UserManagement/EditUser';
import UserList from './component/Admindashboard/UserManagement/UserList';

import CreateCourse from './component/Instructordashboard/Mycourse/CreateCourse';
import ViewCourse from './component/Instructordashboard/Mycourse/ViewCourse';
import EditCreatedCourse from './component/Instructordashboard/Mycourse/EditCreatedCourse';
import Reports from './component/Instructordashboard/reports'
import ContactUs from './component/Home/ContactUs';
import HelpSupport from './component/Home/Help';

import Enrolls from './component/Studentdashboard/CourseManagements/EnrollCourse'
import ViewCourses from './component/Studentdashboard/CourseManagements/ViewCourses';
import StudentList from './component/Admindashboard/StudentManagement/StudentList';
import StudentEdit from './component/Admindashboard/StudentManagement/StudentEdit';
import AddStudent from './component/Admindashboard/StudentManagement/AddStudents';
import StudentReport from './component/Admindashboard/StudyMaterial';
import StudyReport from './component/Admindashboard/StudyMaterialsReport';

import ViewStudents from './component/Instructordashboard/Studentmanagement/ViewStudent';
import StudentEdits from './component/Instructordashboard/Studentmanagement/EditStudent';
import StudentAdd from './component/Instructordashboard/Studentmanagement/Addstudent';

import Report from './component/Admindashboard/report';
import FileUpload from './component/Instructordashboard/FileUpload';
import Files from './component/Studentdashboard/files';
import StudyFiles from './component/Instructordashboard/StudyFiles';



function App() {
  return (
 
    <Router>
    <Routes>
        <Route path="/" element={<Login/>} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/student" element={<Student/>}/>
        <Route path="/instructor" element={<Instructor/>}/>
        <Route path="/enroll" element={<Enrolls/>}/>
        <Route path="/course" element={<Course/>}/>
        <Route path="/AdminSidebar" element={<AdminSidebar/>}/>
        <Route path="/StudentSidebar" element={<StudentSidebar/>}/>
        <Route path="/InstructorSidebar" element={<InstructorSidebar/>}/>
        <Route path="/AddCourse" element={<AddCourse/>}/>
        <Route path="/CourseList" element={<CourseList/>}/>
        <Route path="/EditCourse" element={<EditCourse/>}/>
        <Route path="/AddUser" element={<AddUser/>}/>
        <Route path="/EditUser" element={<EditUser/>}/>
        <Route path="/UserList" element={<UserList/>}/>
        <Route path="/CreateCourse" element={<CreateCourse/>}/>
        <Route path="/ViewCourse" element={<ViewCourse/>}/>
        <Route path="/EditCreatedCourse" element={<EditCreatedCourse/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/HelpSupport" element={<HelpSupport/>}/>
        <Route path="/ViewCourses" element={<ViewCourses/>}/>
        <Route path="/StudentList" element={<StudentList/>}/>
        <Route path="/StudentEdit" element={<StudentEdit/>}/>
        <Route path="/ViewStudents" element={<ViewStudents/>}/>
        <Route path="/StudentEdits" element={<StudentEdits/>}/>
        <Route path="/AddStudent" element={<AddStudent/>}/>
        <Route path="/Report" element={<Report/>}/>
        <Route path="/StudentAdd" element={<StudentAdd/>}/>
        <Route path="/Reports" element={<Reports/>}/>
        <Route path="/StudentReport" element={<StudentReport/>}/>
        <Route path="/StudyReport" element={<StudyReport/>}/>
        <Route path="/FileUpload" element={<FileUpload/>}/>
        <Route path="/Files" element={<Files/>}/>
        <Route path="/StudyFiles" element={<StudyFiles/>}/>













        
{/* 

        <Route path="/users" exact component={UserList} />
                <Route path="/add-user" component={AddUser} />
                <Route path="/edit-user/:id" component={EditUser} />
                <Route path="/courses" exact component={CourseList} />
                <Route path="/add-course" component={AddCourse} />
                <Route path="/edit-course/:id" component={EditCourse} /> */}


    </Routes>
</Router>
  );
}

export default App;
