

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import log from '../../Assets/login.avif';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username && password) {
      const loginData = {
        Id: username,
        Password: password,
      };

      try {
        // Inside your handleSubmit function in the Login component

        const response = await axios.post('https://localhost:7005/api/User/Login', loginData);
        const { role, name } = response.data; // Destructure to get role and name

        // Redirect based on role
        if (role === "Instructor") {
          navigate('/Instructor', { state: { name } }); // Pass name in the state
        } else if (role === "Student") {
          navigate('/Student', { state: { name } }); // Pass name for Student dashboard
        } else if (role === "Admin") {
          navigate('/Admin', { state: { name } }); // Pass name for Admin dashboard
        }
        else {
          alert('Unexpected role returned: ' + role);
        }
      } catch (error) {
        alert("Login failed: " + (error.response ? error.response.data : error.message));
      }

    } else {
      alert('User ID and password are required.');
    }
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className='g-0'>
          <MDBCol md='6'>
            <MDBCardImage src={log} alt="login form" className='rounded-start w-100' />
          </MDBCol>
          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                <span className="h1 fw-bold mb-0">Learning Management System</span>
              </div>
              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Login into your account</h5>
              <MDBInput
                wrapperClass='mb-4'
                label='User ID'
                id='formControlLg'
                type='text'
                size="lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <MDBInput
                wrapperClass='mb-4'
                label='Password'
                id='formControlLg'
                type='password'
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={handleSubmit}>Login</MDBBtn>
              <a className="small text-muted" href="/home">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                Don't have an account? <a href="/Signup" style={{ color: '#393f81' }}>Register here</a>
              </p>
              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default App;
