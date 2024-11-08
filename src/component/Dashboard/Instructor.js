


import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to access state
import backgroundImage from '../../Assets/inst.jpg'; // Keep the original background image
import InstructorSidebar from '../Sidebar/InstructorSidebar';
import {
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  const location = useLocation();
  const { name } = location.state || {}; // Retrieve name from state

  return (
    <div style={{ display: 'flex', height: '100vh' }}> {/* Set full height */}
      <InstructorSidebar />
      <MDBContainer fluid className='flex-grow-1 d-flex flex-column'> {/* Use flex column to structure content */}
        <div
          className='p-5 text-center bg-image flex-grow-1' // Ensure this takes available space
          style={{ 
            backgroundImage: `url(${backgroundImage})`, // Keep the original image
            height: '100%' 
          }}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3'>Learning Management System</h1> {/* Retain the heading */}
                {/* <h4 className='mb-3'>Instructor Dashboard</h4> */}
                <h4 className='mb-3'>Welcome  {name}</h4> {/* Display the logged-in user's name */}
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
