import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from "./projectContainer.module.scss";

const LogoutComponent = () => {
  const [confirmLogout, setConfirmLogout] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.push('/login'); // Replace '/login' with your actual login route
  };

  const toggleConfirmLogout = () => {

    setConfirmLogout(!confirmLogout);
    router.push('/dashboard');
  };

  return (
    <section className={` my-5 ${styles.adminLogin}`}>
         <div className="row justify-content-center">
         <div className="col-md-12 col-lg-9 col-xl-8">
    <div>
      {true ? (
        <div className={styles.adminLoginBox}>
          <h4>Are you sure you want to logout?</h4>
          <div className="col-md-6" style={{ paddingTop: '5%', display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={handleLogout} type='btn' className='btn btn-success'>Yes</button>
          <button onClick={toggleConfirmLogout} type='btn' className='btn btn-success'>No</button>
          </div>
        </div>
      ) : (
        <button onClick={toggleConfirmLogout}>Logout</button>
      )}
    </div>
    </div>
    </div>
    </section>
  );
};

export default LogoutComponent;
