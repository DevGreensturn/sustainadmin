// import React from 'react';
// import styles from './SignupForm.module.css';

// const SignupForm = () => {
//     return (
//         <div className={styles.signupForm}>
//             <h2>Sign Up</h2>
//             <form>
//                 <div className={styles.formGroup}>
//                     <label htmlFor="username">Username</label>
//                     <input type="text" id="username" name="username" required />
//                 </div>
//                 <div className={styles.formGroup}>
//                     <label htmlFor="email">Email</label>
//                     <input type="email" id="email" name="email" required />
//                 </div>
//                 <div className={styles.formGroup}>
//                     <label htmlFor="password">Password</label>
//                     <input type="password" id="password" name="password" required />
//                 </div>
//                 <div className={styles.formGroup}>
//                     <label htmlFor="confirm_password">Confirm Password</label>
//                     <input type="password" id="confirm_password" name="confirm_password" required />
//                 </div>
//                 <div className={styles.formGroup}>
//                     <label htmlFor="role">Role</label>
//                     <select id="role" name="role" required>
//                         <option value="">Select Role</option>
//                         <option value="user">User</option>
//                         <option value="admin">Admin</option>
//                     </select>
//                 </div>
//                 <div className={styles.formGroup}>
//                     <label htmlFor="city">City</label>
//                     <select id="city" name="city" required>
//                         <option value="">Select City</option>
//                         <option value="new-york">New York</option>
//                         <option value="los-angeles">Los Angeles</option>
//                         <option value="chicago">Chicago</option>
//                         <option value="houston">Houston</option>
//                     </select>
//                 </div>
//                 <button type="submit">Sign Up</button>
//             </form>
//         </div>
//     );
// };

// export default SignupForm;




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
                    if (data.data && data.data) {
                        const countryInfo = data.data;
        
                        // Example of handling countries based on an array (if applicable)
                        if (Array.isArray(countryInfo)) {
                            // Handle if countryInfo is an array of countries
                            setCountries(countryInfo);
                            console.log("bb",countryInfo)
                            setFormData(prevState => ({
                                ...prevState,
                                country: countryInfo.length > 0 ? countryInfo[0].longName : ''
                            }));
                        } else {
                            // Handle if countryInfo is a single country object
                            setCountries([countryInfo]);
                            setFormData(prevState => ({
                                ...prevState,
                                country: countryInfo.longName
                            }));
                        }
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
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        
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
                    <label htmlFor="role">Role</label>
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
                        {countries.length > 0 && countries.map(country => (
                            <option key={country._id} value={country.longName}>{country.countryName}</option>
                        ))}
                    </select>
                </div>
                <button className='btn' type="submit">Submit</button>
            </form>
            {loading && <p>Loading roles and countries...</p>}
            {error && <p className={styles.errorMsg}>{error}</p>}
        </div>
    );
};
export default SignupForm;
