
import React, { useState, useEffect } from 'react';
import styles from './SignupForm.module.css';
const SignupForm = () => {
    const [formData, setFormData] = useState({
        userNameName: '',
        email: '',
        password: '',
        confirmPassword: '',
        countryCode: '+91',
        role: '',
        country: ''

    });
    const [roles, setRoles] = useState([]);
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await fetch('http://3.108.58.161:3001/api/v1/roles');
                if (response.ok) {
                    const data = await response.json();
                    if (data.response && data.response.length > 0) {
                        setRoles(data.response);
                        setFormData(prevState => ({
                            ...prevState,
                            role: data.response[0].roleName
                        }));
                    } else {
                        setRoles([]);
                        setFormData(prevState => ({
                            ...prevState,
                            role: ''
                        }));
                    }
                } else {
                    setError(`Failed to fetch roles: ${response.status}`);
                }
            } catch (error) {
                setError(`Error fetching roles: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        const fetchCountries = async () => {
            try {
                const response = await fetch('http://3.108.58.161:3001/api/v1/countries');
             
                if (response.ok) {
                    const data = await response.json();
                    if (data.data && data.data.length > 0) {
                    
                        setCountries(data.data);
                        setFormData(prevState => ({
                            ...prevState,
                            country: data.data[0].info.longName
                        }));
                    } else {
                        setCountries([]);
                        setFormData(prevState => ({
                            ...prevState,
                            country: ''
                        }));
                    }
                } else {
                    setError(`Failed to fetch countries: ${response.status}`);
                }
            } catch (error) {
                setError(`Error fetching countries: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchRoles();
        fetchCountries();
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedValue = value;
        switch (name) {
            case 'firstName':
                if (value.length > 25) {
                    setError("First Name must be less than 25 characters");
                } else {
                    setError(null);
                }
                updatedValue = value.slice(0, 25);
                break;
            case 'lastName':
                updatedValue = value.slice(0, 25);
                break;
            case 'email':
                if (value.length > 50) {
                    setError("Email must be 50 characters or less");
                } else {
                    setError(null);
                }
                updatedValue = value.slice(0, 50);
                break;
            case 'password':
                const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
                if (passwordRegex.test(value) || value === '') {
                    updatedValue = value.slice(0, 50);
                }
                break;
            default:
                break;
        }
        setFormData(prevState => ({
            ...prevState,
            [name]: updatedValue
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validation checks
        if (formData.userName.length < 1 || formData.userName.length > 25) {
            setError("First Name must be between 1 and 25 characters");
            return;
        }
       
        if (!formData.email.includes('@') || formData.email.length > 50) {
            setError("Please enter a valid Email (up to 50 characters)");
            return;
        }
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        if (!passwordRegex.test(formData.password)) {
            setError("Password must be at least 8 characters long, include one capital letter, and one special symbol (!@#$%^&*)");
            return;
        }
    
        const signupData = {
            userName: formData.userName ,
            email: formData.email,
            packageID: 1,
            password: formData.password,
            loginType: formData.role,
            country_id: formData.country
        };
    
        try {
            const response = await fetch('http://3.108.58.161:3001/api/v1/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signupData),
            });
            const responseData = await response.json();
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status} - ${JSON.stringify(responseData)}`);
            }
    
           
            setFormData({
                userNameName: '',
                email: '',
                password: '',
                confirmPassword: '',
                countryCode: '+91',
                role: roles.length > 0 ? roles[0].roleName : '',
                country: countries.length > 0 ? countries[0].info.longName : ''
            });
            setError(null);
    
           
            window.location.href = "/login"; 
    
        } catch (error) {
            console.error('Error signing up:', error.message);
            setError(`Failed to sign up: ${error.message}`);
        }
    };
    
    return (
        <section>
<div className="container">
        <div className="row justify-content-center" style={{marginTop:"200px"}}>
          <div className="col-md-12 col-lg-9 col-xl-8 my-3">
        <div className={styles.signupForm}>
            <h1>Sign Up</h1>
            {/* <h6>Signup Page</h6> */}
            <div className='mt-4'  >
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-md-6'>
                <div className={styles.formGroup}>
                    <label htmlFor="userName">User Name</label>
                    <input type="text" id="userName" name="userName" value={formData.firstName} onChange={handleChange} required />
                </div>
                </div>
                <div className='col-md-6'>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                </div>
                <div className='col-md-6'>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                </div>
                <div className='col-md-6'>
                <div className={styles.formGroup}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                </div>
                </div>
                <div className='col-md-6'>
                <div className={styles.formGroup}>
                    <label htmlFor="role">Role </label>
                    <select id="role" name="role" value={formData.role} onChange={handleChange} required>
                        <option value="">Select Role</option>
                        {roles.length > 0 && roles.map(role => (
                            <option key={role._id} value={role.roleName}>{role.roleName}</option>
                        ))}
                    </select>
                </div>
                </div>
                <div className='col-md-6'>
                <div className={styles.formGroup}>
                    <label htmlFor="country">Country</label>
                    <select id="country" name="country" value={formData.country} onChange={handleChange} required>
                        <option value="">Select Country</option>
                        {countries.map(country => (
                            <option key={country._id} value={country._id}>{country.info.longName}</option>
                        ))}
                    </select>
                </div>
                </div>
                <button type="btn" className='btn btn-success' >Register &#x2192;</button>
                </div>
            </form>
            </div>
            {loading && <p>Loading roles and countries...</p>}
            {error && <p className={styles.errorMsg}>{error}</p>}
            <div className={`mt-5 ${styles.loginContainer}`} >
                <div className='d-flex align-items-center justify-content-between'>
                <p style={{opacity:".5"}}>Already have an account?</p>
                <a href="/login" type='btn' className='btn btn-outline-success mx-3'>Login</a>
                </div>
            </div>
        </div>
      </div>
      </div>
      </div>
        </section>
    );
};
export default SignupForm;
