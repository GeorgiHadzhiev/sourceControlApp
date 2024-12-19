import './Login.css'
import authService from "../../services/authService";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
function Login() {

    const navigate = useNavigate()
    const { login } = useContext(AuthContext)
    const [formError, setFormError] = useState({ wrongDetails: null })
    const [showError, setShowError] = useState(false);

    const onLoginHandler = (e) => {

        e.preventDefault();

        let formData = new FormData(e.currentTarget)

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then(res => {

                login(res)
                navigate('/MyProfile')

            })
            .catch(err => {

                setFormError({ wrongDetails: `${err}` });
                setShowError(true)

                setTimeout(() => setShowError(false), 5000)

            })

    }



  return (
      <div className="contact-page">
          <div className="contactbg">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="contacttitlepage">
                              <h2>Log In</h2>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
          <div className="container">
              <div className="row">
                  <div className=" col-md-6 offset-md-3">
                      <div className="address">

                          <form method="POST" onSubmit={onLoginHandler}>
                              <div className={`alert alert-danger blankFormAlert ${showError ? 'fade' : ''}`} role="alert">{formError.wrongDetails}</div>
                              <div className="row">
                             
                                  <div className="col-sm-12">
                                      <input className="contactus"  placeholder="Email" type="text" name="email" />
                                  </div>

                                  <div className="col-sm-12">
                                      <input id="originalPassword" className="contactus" placeholder="Password" type="password" name="password" />
                                  </div>
                                  <div className="col-sm-12">
                                      <button className="send">Log In</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>



      </div>
  );
}

export default Login;