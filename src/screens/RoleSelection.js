import React, { useEffect, useState } from 'react';
import employerImg from '../assets/images/employer.png';
import jobSeekerImg from '../assets/images/jobseeker.png';
import '../assets/styles/Role.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getUserById, updateUserRole } from '../reducers/UserSlice';
import Loading from '../components/loading/Loading';


const RoleSelection = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedRole, setSelectedRole] = useState(null);
    const user = useSelector((state) => state.users.user);
    const [loading, setLoading] = useState(false);
    console.log(user, 'user');
    useEffect(() => {
        if (userId) {
            dispatch(getUserById(userId));
        }
    }, [dispatch, userId]);
    const handleCheckboxChange = (role) => {
        if (selectedRole === role) {
            setSelectedRole(null);
        } else {
            setSelectedRole(role);
        }
    };
    const handleNextClick = async () => {
        if (selectedRole) {
            setLoading(true);
            try {
                await dispatch(updateUserRole({ userId, role: selectedRole }));
                toast.success('Registration successful!');
                navigate('/login');
            } catch (error) {
                toast.error('An error occurred while updating the role.');
            } finally {
                setLoading(false);
            }
        }
    };
    const isChecked = (role) => selectedRole === role;
    return (
        <>
            <div className="role-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='role-title'>
                                {user?.name}, Your account has been created! What brings you to Job<span>Horizon?</span>
                            </h1>
                            <p className='text-center mt-3'>
                                We want to tailor your experience to your needs. Please select your role below:
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="role-card" style={{ border: isChecked('employer') ? '2px solid #17B8FC' : '1px solid rgb(218, 213, 213)' }}>
                                <div className="role-checkbox">
                                    <input
                                        onChange={() => handleCheckboxChange('employer')}
                                        type="checkbox"
                                        checked={isChecked('employer')}
                                    />
                                </div>
                                <div className="role-image">
                                    <img src={employerImg} alt="Employer" />
                                </div>
                                <div className="role-text">
                                    <h5 className='mt-3 text-center'>
                                        I want to be an employer
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="role-card" style={{ border: isChecked('user') ? '2px solid #17B8FC' : '1px solid rgb(218, 213, 213)' }}>
                                <div className="role-checkbox">
                                    <input
                                        onChange={() => handleCheckboxChange('user')}
                                        type="checkbox"
                                        checked={isChecked('user')}
                                    />
                                </div>
                                <div className="role-image">
                                    <img src={jobSeekerImg} alt="Job Seeker" />
                                </div>
                                <div className="role-text">
                                    <h5 className='mt-3 text-center'>
                                        I want to be a job seeker
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    {selectedRole && (
                        <div className="row mt-3">
                            <div className="col-12">
                                <div className="role-btn">
                                    <button type="submit" onClick={handleNextClick}>{loading ? <Loading /> : 'Next'}</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default RoleSelection;