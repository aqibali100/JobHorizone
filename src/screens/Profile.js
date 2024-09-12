import React from 'react';
import '../assets/styles/Profile.css';
import { useSelector } from 'react-redux';

const Profile = () => {
  const isAuthenticated = useSelector((state) => state.users.user);
  return (
    <div>
      <div className="profile-header text-center">
        <div class="profile-pic">
        <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
        <h1 className="profile-para">{isAuthenticated?.user?.name}</h1>
        <p>Full-Stack Developer</p>
      </div>
      <div className="container">
        <div className="row profile-info">
          <div className="col-lg-4 col-md-12">
            <div className="profile-card p-3 bg-light rounded">
              <h4>Contact <span className='common'>Information</span></h4>
              <ul className="list-unstyled">
                <li><strong>Email:</strong> {isAuthenticated?.user?.email}</li>
                <li><strong>Phone:</strong> +123 456 7890</li>
                <li><strong>Location:</strong> New York, USA</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="profile-card p-3 bg-light rounded">
              <h4>About <span className='common'>Me</span></h4>
              <p>
                Experienced Full-Stack Developer with expertise in both front-end and back-end technologies.
                Proficient in building and optimizing responsive web applications, passionate about learning
                new technologies, and problem-solving.
              </p>
              <h4 className="mt-4">Skills</h4>
              <div className="d-flex flex-wrap">
                <span className="badge bg-primary m-1">JavaScript</span>
                <span className="badge bg-primary m-1">React</span>
                <span className="badge bg-primary m-1">Node.js</span>
                <span className="badge bg-primary m-1">MongoDB</span>
                <span className="badge bg-primary m-1">CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
