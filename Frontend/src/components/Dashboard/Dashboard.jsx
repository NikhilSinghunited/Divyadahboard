import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import logo from '/images/logo.png';
import axios from 'axios';
import './Dashboard.css';
import { Outlet, useNavigate } from 'react-router-dom';
function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = atob(localStorage.getItem("token"));
    if (token) {
      setIsLogin(true);
      if (token.split(":")[0] !== "divya@gmail.com") {
        setIsLogin(false);
      }
    } else {
      navigate("/admin");
    }
  }, []);


  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/login", { username: email, password: pass });
      console.log(response.data);
      localStorage.setItem("token", btoa(email + ":" + pass))
      setIsLogin(true);
    } catch (error) {
      console.error(error);
      alert("Login Failed! " + error);
    }
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      {isLogin ? <Outlet /> :
        <>
          <div>
            <div className="container bg-dark">
              <div style={{ width: "75vw" }} className="row d-flex p-20 justify-content-center align-items-center">
                <div className="col-md-8 col-lg-6 col-xs-12">
                  <div className="card shadow bg-light bg-gradient border-2 border-error">
                    <div className="card-body">
                      <div className="mb-3 md-4">
                        <div className="d-flex gap-4 mb-2 justify-content-between align-items-center">
                          <h2 className="fw-bold mb-2 text-uppercase text-pink">Divya Escorts Services</h2>
                          <img style={{ width: "100px" }} src={logo} alt="Logo" />
                        </div>
                        <hr className='mb-2' />
                        <p className="mb-5">Please enter your login and password!</p>
                        <div className="mb-4">
                          <form>
                            <div className="form-group mb-3" id="formBasicEmail">
                              <label htmlFor='email' className="text-center">Email address</label>
                              <input value={email} onChange={(e) => { setEmail(e.target.value.toLowerCase()) }} id='email' type="email" className="form-control" placeholder="Enter email" autoComplete='email' required />
                            </div>

                            <div className="form-group mb-4" id="formBasicPassword">
                              <label htmlFor='pass'>Password</label>
                              <input value={pass} onChange={(e) => { setPass(e.target.value) }} id='pass' type="password" className="form-control" placeholder="Password" autoComplete='new-password' required />
                            </div>
                            <div className="form-group mb-3" id="formBasicCheckbox">
                              <p className="small">
                                <a className="text-primary" href="#!">Forgot password?</a>
                              </p>
                            </div>
                            <div className="d-grid">
                              <button onClick={handleLogin} className="btn btn-primary fs-5">Login</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </>
      }
    </div>
  );
}

export default Dashboard;
