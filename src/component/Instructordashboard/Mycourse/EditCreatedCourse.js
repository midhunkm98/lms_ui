import React from 'react';
import InstructorSidebar from '../../Sidebar/InstructorSidebar';
import '../../../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditCourse = () => {
    return (
        <div className="d-flex">
            {/* Sidebar Section */}
            <div className="col-md-3">
                <InstructorSidebar />
            </div>

            {/* Main Content Section */}
            <div className="col-md-9 p-4">
                <h1 className="mb-4">Edit Course</h1>
                <form>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Course Title"
                            defaultValue="Existing Course Title"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            placeholder="Course Description"
                            rows="3"
                            defaultValue="Existing course description..."
                            required
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Course Category"
                            defaultValue="Category"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Update Course</button>
                </form>
            </div>
        </div>
    );
};

export default EditCourse;
