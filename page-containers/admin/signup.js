
import React, { useState, useEffect } from 'react';
import styles from './SignupForm.module.css';
const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
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
        if (formData.firstName.length < 1 || formData.firstName.length > 25) {
            setError("First Name must be between 1 and 25 characters");
            return;
        }
        if (formData.lastName.length < 1 || formData.lastName.length > 25) {
            setError("Last Name must be between 1 and 25 characters");
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
            userName: formData.firstName + formData.lastName,
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
                firstName: '',
                lastName: '',
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
        <div className={styles.signupForm}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="role">Role </label>
                    <select id="role" name="role" value={formData.role} onChange={handleChange} required>
                        <option value="">Select Role</option>
                        {roles.length > 0 && roles.map(role => (
                            <option key={role._id} value={role.roleName}>{role.roleName}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="country">Country</label>
                    <select id="country" name="country" value={formData.country} onChange={handleChange} required>
                        <option value="">Select Country</option>
                        {countries.map(country => (
                            <option key={country._id} value={country._id}>{country.info.longName}</option>
                        ))}
                    </select>
                </div>
                <button className='btn' type="text">Register</button>
            </form>
            {loading && <p>Loading roles and countries...</p>}
            {error && <p className={styles.errorMsg}>{error}</p>}

            <div className={styles.loginContainer}>
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
};
export default SignupForm;
