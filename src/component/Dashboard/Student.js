


import React from 'react';
import backgroundImage from '../../Assets/stud.avif';
import StudentSidebar from '../Sidebar/StudentSidebar';
import { useLocation } from 'react-router-dom'; // Import useLocation for accessing state
import {
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  const location = useLocation(); // Access location to get passed state
  const { name } = location.state || { name: 'User' }; // Default to 'User' if name is not found

  return ( 
    <div style={{ display: 'flex', height: '100vh' }}>
      <StudentSidebar />
      <MDBContainer fluid className='flex-grow-1 d-flex flex-column'>
        <div
          className='p-5 text-center bg-image flex-grow-1'
          style={{ backgroundImage: `url(${backgroundImage})`, height: '100%' }}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3'>Learning Management System</h1>
                <h4 className='mb-3'>Welcome {name}</h4> {/* Display user name */}
                <MDBBtn tag="a" outline size="lg">
                  Call to action 
                </MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
}
