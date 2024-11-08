
import React, { useRef, useEffect, useState } from 'react';
import StudentSidebar from '../../Sidebar/StudentSidebar'; // Adjust the path as necessary
import axios from 'axios'; // Ensure axios is installed

function App() {
  const [courses, setCourses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const birthdayRef = useRef();
  const addressRef = useRef();
  const pincodeRef = useRef();
  const courseRef = useRef();
  const emailRef = useRef();
  const cardNumberRef = useRef();
  const expirationDateRef = useRef();
  const cvvRef = useRef();

  // Fetch courses from the API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://localhost:7005/api/User/api/courses');
        setCourses(response.data); // Assuming response.data is an array of courses
      } catch (error) {
        setErrorMessage("Error fetching courses: " + (error.response ? error.response.data : error.message));
      }
    };

    fetchCourses();
  }, []);

  // Handle form submission
  const handleSubmit = async () => {
    const registration = {
      FirstName: firstNameRef.current.value,
      LastName: lastNameRef.current.value,
      Birthday: birthdayRef.current.value,
      Gender: document.querySelector('input[name="gender"]:checked')?.value,
      Address: addressRef.current.value,
      Pincode: pincodeRef.current.value,
      CourseId: courseRef.current.value, // This should be the course ID
      Email: emailRef.current.value,
      CardNumber: cardNumberRef.current.value,
      ExpirationDate: expirationDateRef.current.value,
      CVV: cvvRef.current.value
    };
  
    try {
      const response = await axios.post('https://localhost:7005/api/User/register', registration);
      setSuccessMessage(response.data);
      handleReset(); // Optionally reset the form after successful submission
    } catch (error) {
      console.error(error); // Log the error for debugging
      setErrorMessage("Error registering course: " + (error.response ? error.response.data : error.message));
    }
  };
  


  // Reset function to clear all fields
  const handleReset = () => {
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    birthdayRef.current.value = '';
    addressRef.current.value = '';
    pincodeRef.current.value = '';
    courseRef.current.value = ''; // Reset dropdown
    emailRef.current.value = '';
    cardNumberRef.current.value = '';
    expirationDateRef.current.value = '';
    cvvRef.current.value = '';
    // Reset radio buttons
    const genderRadios = document.getElementsByName('gender');
    genderRadios.forEach((radio) => {
      radio.checked = false;
    });
  };

  return (
    <div className='d-flex' style={{ height: '100vh' }}>
      {/* Sidebar Section */}
      <div className='col-md-3 bg-light'>
        <StudentSidebar />
      </div>

      {/* Main Content Section */}
      <div className='col-md-9 d-flex align-items-center justify-content-center p-4'>
        <div className='card w-100' style={{ maxHeight: '90vh', overflowY: 'auto' }}>
          <div className='card-body text-black d-flex flex-column'>
            <h3 className='mb-5 text-uppercase fw-bold'>Course Registration Form</h3>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <div className='row'>
              <div className='col-md-6'>
                <input
                  className='form-control mb-4'
                  id='form1'
                  type='text'
                  placeholder='First Name'
                  ref={firstNameRef}
                />
              </div>
              <div className='col-md-6'>
                <input
                  className='form-control mb-4'
                  id='form2'
                  type='text'
                  placeholder='Last Name'
                  ref={lastNameRef}
                />
              </div>
            </div>
            <input
              className='form-control mb-4'
              id='form3'
              type='date' // Changed to 'date'
              placeholder='Birthday'
              ref={birthdayRef}
            />

            <div className='d-md-flex justify-content-start align-items-center mb-4'>
              <h6 className='fw-bold mb-0 me-4'>Gender: </h6>
              <div className='form-check form-check-inline'>
                <input className='form-check-input' type='radio' name='gender' id='inlineRadio1' value='Female' />
                <label className='form-check-label' htmlFor='inlineRadio1'>Female</label>
              </div>
              <div className='form-check form-check-inline'>
                <input className='form-check-input' type='radio' name='gender' id='inlineRadio2' value='Male' />
                <label className='form-check-label' htmlFor='inlineRadio2'>Male</label>
              </div>
              <div className='form-check form-check-inline'>
                <input className='form-check-input' type='radio' name='gender' id='inlineRadio3' value='Other' />
                <label className='form-check-label' htmlFor='inlineRadio3'>Other</label>
              </div>
            </div>

            {/* Address Text Area */}
            <textarea
              className='form-control mb-4'
              id='address'
              rows='4'
              placeholder='Address'
              ref={addressRef}
            ></textarea>

            <input
              className='form-control mb-4'
              id='form4'
              type='text'
              placeholder='Pincode'
              ref={pincodeRef}
            />

            {/* Course Dropdown */}
            {/* <select
              className='form-control mb-4'
              id='form5'
              ref={courseRef}
            >
              <option value=''>Select Course</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>
                  {course.title} 
                </option>
              ))}
            </select> */}


            <select className='form-control mb-4' id='form5' ref={courseRef}>
              <option value=''>Select Course</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>
                  {course.title} {/* Ensure this matches your API structure */}
                </option>
              ))}
            </select>


            <input
              className='form-control mb-4'
              id='form6'
              type='text'
              placeholder='Email ID'
              ref={emailRef}
            />

            {/* Payment Section */}
            <h5 className='mt-4 mb-3'>Payment Information</h5>
            <input
              className='form-control mb-4'
              id='cardNumber'
              type='text'
              placeholder='Card Number'
              ref={cardNumberRef}
            />
            <div className='row'>
              <div className='col-md-6'>
                <input
                  className='form-control mb-4'
                  id='expirationDate'
                  type='text'
                  placeholder='Expiration Date (MM/YY)'
                  ref={expirationDateRef}
                />
              </div>
              <div className='col-md-6'>
                <input
                  className='form-control mb-4'
                  id='cvv'
                  type='text'
                  placeholder='CVV'
                  ref={cvvRef}
                />
              </div>
            </div>

            <div className='d-flex justify-content-end pt-3'>
              <button type='button' className='btn btn-light me-2' onClick={handleReset}>Reset all</button>
              <button type='button' className='btn btn-warning' onClick={handleSubmit}>Submit form</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
