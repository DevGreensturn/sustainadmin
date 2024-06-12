"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { AiFillAndroid } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { FaApple, FaMinus, FaUserAlt, FaUserCircle } from "react-icons/fa";
import { FaAngleDown, FaPlus } from "react-icons/fa6";
import Link from "next/link";
import styles from './Header.module.css'; // Import your CSS module for styling
import { useRouter } from "next/navigation";
import { Button, Modal } from 'react-bootstrap';

const HeaderSection =()=>{
    const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const navigate = useRouter();
    const searchParams = useSearchParams();
    const [respMenu, setRespMenu] = useState();
    const [openToggle, setOpenToggle] = useState(-1);
    const [isHover, setIsHover] = useState(false);
    
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    
   
    const btnRespMenu = () => {
      setRespMenu(!respMenu);
    };
  
    const toggleDropdown = (index) => {
      if (openToggle === index) {
        setOpenToggle(-1);
      } else {
        setOpenToggle(index);
      }
    };
  
    const handleClick = (event) => {
      setIsHover((current) => !current);
      setRespMenu(!respMenu);
    };
  

    const handleClose = () => setShow(false); // Function to close the modal
    const handleShow = () => setShow(true); // Function to open the modal
    
    const handleCloses = () => setShowPopup(false); // Function to close the modal
    const handleShows = () => setShowPopup(true); // Function to open the modal

    return(
      
      <header id="header" className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
        <div className="container-fluid px-xl-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-6 col-lg-3">
              <Link href={"/"}>
                <Image
                  alt="turnKey"
                  width={227}
                  height={55}
                  className="newlogo"
                  src="/Images/sustainLogo.png"
                />
              </Link>
            </div>
            <div className="col-6 col-lg-7">
              <button className="threeLine" onClick={btnRespMenu}>
                <FiMenu />
              </button>
              <div className={`responsiveMenu ${respMenu && "active"}`}>
                <nav className="d-lg-flex align-items-center justify-content-end">
                  <div className="custamNevBar">
                    <ul>
                      <li
                        className={`${
                          openToggle === 1 ? "show" : " "
                        } dropHover`}
                        onMouseOver={() => setIsHover(false)}
                      >
                        <span onClick={() => toggleDropdown(1)}>
                          Enterprises <span style={{opacity:"0"}}>satya</span> <FaAngleDown className="arrow" />{" "}
                          <FaPlus className="plus" />
                          <FaMinus className="minus" />
                        </span>
                        <div
                          className={`${isHover ? "d-none" : ""} dropDownBox`}
                        >
                          <div className="row justify-content-center">
                            <div className="col-lg col-xxl-auto">
                              <h3>
                                <Link
                                  onClick={handleClick}
                                  href="/ai-scheduler"
                                >
                                 Impact on supply chain
                                </Link>
                              </h3>
                              <h3>
                                <Link
                                  onClick={handleClick}
                                  href="/registration"
                                >
                                  Industries {"&"} Examples
                                </Link>
                              </h3>

                              <h3>
                                <Link
                                  onClick={handleClick}
                                  href="/ai-powered-live-stream">
                                    Plans {"&"} pricing
                                </Link>
                              </h3>
                            </div>
                        
                          </div>
                        </div>
                      </li>

                      <li
                        className={`${
                          openToggle === 2 ? "show" : " "
                        } dropHover`}
                        onMouseOver={() => setIsHover(false)}
                      >
                        <span onClick={() => toggleDropdown(2)}>
                            Suppliers <FaAngleDown className="arrow" />{" "}
                          <FaPlus className="plus" />
                          <FaMinus className="minus" /> 
                        </span>
                        <div
                          className={`${isHover ? "d-none" : ""} dropDownBox`}
                        >
                          <div className="row justify-content-center">
                            
                            <div className="col-lg col-xxl-auto">
                              <h3>Why rating Suppliers</h3>
                              <h3>Rating Methodology</h3>
                              <h3>Rating Areas</h3>
                              <h3>Plans & Pricing</h3>
                            </div>
                          
                          </div>
                        </div>
                      </li>

                      <li
                        className={`${
                          openToggle === 3 ? "show" : " "
                        } dropHover`}
                        onMouseOver={() => setIsHover(false)}
                      >
                        <span onClick={() => toggleDropdown(3)}>
                        Learning Center <FaAngleDown className="arrow" />{" "}
                          <FaPlus className="plus" />
                          <FaMinus className="minus" />
                        </span>
                       
                      </li>

                     

                      <li
                        className={`${
                          openToggle === 4 ? "show" : " "
                        } dropHover`}
                        onMouseOver={() => setIsHover(false)}
                      >
                        <span onClick={() => toggleDropdown(4)}>
                        About Us 
                        </span>
                        <div
                          className={`${isHover ? "d-none" : ""} dropDownBox`}
                        >
                          <div className="row justify-content-center">
                            <div className="col-lg-3">
                              <Image
                                alt="turnKey"
                                width={300}
                                height={100}
                                className="img-fluid dropMenuImage"
                                src="/Images/Header/resource.png"
                              />
                            </div>

                            <div className="col-lg col-xxl-auto ps-xl-5">
                              <h3>
                                <Link onClick={handleClick} href="/aboutUs">
                                  About Us
                                </Link>
                              </h3>
                            </div>

                            <div className="col-lg col-xxl-auto ps-xl-5">
                              <h3>
                                <Link onClick={handleClick} href="/careers">
                                  Careers
                                </Link>
                              </h3>
                            </div>

                          </div>
                        </div>
                      </li> 

                      <li
                        className={`${
                          openToggle === 5 ? "show" : " "
                        } dropHover`}
                        onMouseOver={() => setIsHover(false)}
                      >
                        <span onClick={() => toggleDropdown(5)}>
                        <button onClick={handleShow} type="btn" className="btn btn-outline-primary" style={{color:"#fff", fontWeight:"600"}} >Login </button> 
                        </span>
                        
                        <div
                          className={`${isHover ? "d-none" : ""} dropDownBox`}
                        >
                          <div className="row justify-content-center">
                            <div className="col-lg-3">
                              <Image
                                alt="turnKey"
                                width={300}
                                height={100}
                                className="img-fluid dropMenuImage"
                                src="/Images/Header/resource.png"
                              />
                            </div>

                            <div className="col-lg col-xxl-auto ps-xl-5">
                              <h3>
                                <Link onClick={handleClick} href="/aboutUs">
                                  About Us
                                </Link>
                              </h3>
                            </div>

                            <div className="col-lg col-xxl-auto ps-xl-5">
                              <h3>
                                <Link onClick={handleClick} href="/careers">
                                  Careers
                                </Link>
                              </h3>
                            </div>

                          </div>
                        </div>
                      </li> 

                      <li
                        className={`${
                          openToggle === 6 ? "show" : " "
                        } dropHover`}
                        onMouseOver={() => setIsHover(false)}
                      >
                        <span onClick={() => toggleDropdown(6)}>
                        <button type="btn" className="btn btn-outline-primary" style={{color:"#fff", fontWeight:"600"}}>Contact Us</button> {" "}
                          
                        </span>
                      </li> 
                    </ul>
                  </div>


                  
                </nav>
              </div>

            
          </div>
        </div>
        </div>


        <Modal
        show={show}
        onHide={handleClose}
        centered
        backdrop="static"
        >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                <form>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div class="form-group my-3">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                      </div>
                      <div class="form-check my-3">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                      <button type="submit" class="btn btn-primary">Submit</button>
                      <Button variant="secondary" onClick={handleClose}> Close </Button>
                      <button type="submit" class="btn btn-primary" onClick={handleShows}>Sign Up</button>
                      </div>
                    </form>

                </div>
              </div>
            </div>
          </Modal.Body>
      </Modal>

      <Modal
        show={showPopup}
        onHide={handleCloses}
        centered
        backdrop="static"
        >
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                <form>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div class="form-group my-3">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                      </div>
                      <div class="form-check my-3">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                      <button type="submit" class="btn btn-primary">Submit</button>
                      <Button variant="secondary" onClick={handleCloses}> Close </Button>
                      </div>
                    </form>
                </div>
              </div>
            </div>
          </Modal.Body>
      </Modal>
      </header>
    )
}

export default HeaderSection;
