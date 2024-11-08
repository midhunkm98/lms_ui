

import React from 'react';
import { useLocation } from 'react-router-dom';
import backgroundImage from '../../Assets/admn.jpg';
import AdminSidebar from '../Sidebar/AdminSidebar';
import {
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  const location = useLocation();
  const { name } = location.state || { name: 'User' }; // Default to 'User' if name is not provided

  return (
    <div style={{ display: 'flex', height: '100vh' }}> {/* Set full height */}
      <AdminSidebar />
      <MDBContainer fluid className='flex-grow-1 d-flex flex-column'> {/* Use flex column to structure content */}
        <div
          className='p-5 text-center bg-image flex-grow-1' // Ensure this takes available space
          style={{ backgroundImage: `url(${backgroundImage})`, height: '100%' }} // Set height to 100%
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3'>Learning Management System</h1>
                {/* <h4 className='mb-3'>Admin Dashboard</h4> */}
                <h4 className='mb-4'>Welcome  {name}</h4> {/* Display the user's name */}
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
