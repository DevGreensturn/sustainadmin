"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./projectContainer.module.scss";
import { useRouter } from "next/navigation";
import { validateEmail, isValid } from "../../comman/helper";
import storage from "../../comman/localstorage";
import { ADMINAPI } from "../../apiWrapper";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useRouter();
  const [apiErrors, setApiErrors] = useState({ message: "", response: "" });

  const validateAll = () => {
    let err = {};
    err.email = validateEmail(email);
    return err;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    let err = validateAll();
    if (isValid(err)) {
      try {
        let payload = {
          email: email,
          loginType: "SUPERADMIN",
          password: password,
        };

        const response = await ADMINAPI({
          url: `http://3.108.58.161:3001/api/v1/users/login`,
          method: "POST",
          body: { ...payload },
        });

        let userData = response.data;
        if (userData.status) {
          toast.success(response.message);
          localStorage.clear();
          storage().set("token", userData.token);
          storage().set("roleId", userData.roleId);
          storage().set("userData", JSON.stringify(userData));

          setTimeout(() => {
            navigate.push("/dashboard", { scroll: false });
          }, 100);
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        toast.error(error.message || "An error occurred");
      }
    } else {
      setApiErrors({ message: err });
    }
  };

  const userDataDummy = storage().get("userData");
  const userData = userDataDummy ? JSON.parse(userDataDummy) : {};
  const nameValue = userData.userName || "Name Admin";
  const token = storage().get("token");

  const handleLogOut = () => {
    localStorage.clear();
    navigate.push("/");
  };

  return (
    <section className={styles.adminLogin}>
      <ToastContainer />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-9 col-xl-8">
            <div className={styles.adminLoginBox}>
              <div className="row" style={{ marginTop: "200px" }}>
                <div className="col-md-6">
                  <div><img src="./logo.png" alt="" /></div>
                  <div className="py-5 ps-4 pe-3">
                    <form onSubmit={handleLogin}>
                      <div className="form-group mb-1">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      {apiErrors.message && apiErrors.message.email && (
                        <span className="text-danger mb-2 d-block" style={{ fontSize: "14px" }}>
                          {apiErrors.message.email}
                        </span>
                      )}
                      <div className="form-group mt-lg-4 mt-3 position-relative mb-1">
                        <label>Password</label>
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          name="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="showPasswordLogin">
                          <span onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer" }}>
                            {showPassword ? "Hide" : "Show"}
                          </span>
                        </div>
                      </div>
                      {apiErrors.password && (
                        <span className="text-danger" style={{ fontSize: "14px" }}>
                          {apiErrors.password}
                        </span>
                      )}
                      <div className="form-group forget-password text-end mt-3 forgot">
                        <Link href="/admin/forget" className="inline-block">
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="form-group mt-lg-4 mt-3">
                        <button type="submit" className="btn btn-primary btn-lg btn-block">
                          Login
                        </button>
                      </div>
                      <p className="dontAccount mt-2">
                        Don’t have an account?
                        <Link href="/admin/signup" className="mx-2">
                          SignUp
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 d-none d-md-block">
                  <div className="footBallImg">
                    <img className="img-fluid" src="../images/login.jpg" alt="./login.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
