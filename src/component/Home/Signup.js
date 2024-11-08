
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from 'mdb-react-ui-kit';
import axios from 'axios';

function App() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      role: selectedRole,
      email,
      password,
    };

    try {
      // First API call to insert user data
      await axios.post('https://localhost:7005/api/User/InsertUser', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Second API call to get the last inserted user ID
      const idResponse = await axios.get('https://localhost:7005/api/User/last-inserted-user-id');

      // Access the lastInsertedUserId from the response
      const userId = idResponse.data.lastInsertedUserId;

      // Alert the user with the registration success message and the ID
      alert(`Registration successful! ID is: ${userId}`);

      // Reset fields after successful registration
      setName('');
      setSelectedRole('');
      setEmail('');
      setPassword('');
      
    } catch (error) {
      if (error.response) {
        alert("Error: " + error.response.data);
      } else {
        alert("An error occurred: " + error.message);
      }
    }
  };
    
  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row align-items-center mb-4 w-100">
                  <MDBIcon fas icon="user me-2" size='lg' />
                  <MDBInput 
                    label='Your Name' 
                    id='form1' 
                    type='text' 
                    className='w-100' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4 w-100">
                  <MDBIcon fas icon="user-tag me-2" size='lg' />
                  <MDBInput 
                    label='Role (Instructor/Student)' 
                    id='roleInput' 
                    type='text' 
                    className='w-100' 
                    value={selectedRole} 
                    onChange={(e) => setSelectedRole(e.target.value)} 
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4 w-100">
                  <MDBIcon fas icon="envelope me-2" size='lg' />
                  <MDBInput 
                    label='Your Email' 
                    id='form2' 
                    type='email' 
                    className='w-100' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4 w-100">
                  <MDBIcon fas icon="lock me-2" size='lg' />
                  <MDBInput 
                    label='Password' 
                    id='form3' 
                    type='password' 
                    className='w-100' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                </div>

                <div className='d-flex justify-content-between mb-4' style={{ width: '100%' }}>
                  <MDBBtn className='mb-4 me-1' size='lg' type='submit'>Register</MDBBtn>
                  <MDBBtn className='mb-4' size='lg' color='secondary' onClick={() => navigate('/login')}>Login</MDBBtn>
                </div>
              </form>
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage
                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default App;
