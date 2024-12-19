import authService from "../../services/authService";
import { useContext, useState, useRef } from "react";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
function Login() {

    const navigate = useNavigate()
    const { login } = useContext(AuthContext)
    const errorRef = useRef(null)
    const [formError, setFormError] = useState({ wrongDetails: null })

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

                //let errorDiv = errorRef.current

                console.log(err)
                setFormError(formErrors => ({ ...formErrors, wrongDetails: `${err}` }))

                setTimeout(() => {

                    setFormError(formErrors => ({ ...formErrors, wrongDetails: null }))

                },4000)

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
                              <div ref={errorRef} className="alert alert-danger blankFormAlert" role="alert">{formError.wrongDetails}</div>
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