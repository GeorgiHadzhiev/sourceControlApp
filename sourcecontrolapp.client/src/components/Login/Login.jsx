import authService from "../../services/authService";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext.jsx";

/* eslint-disable react/no-unescaped-entities */
function Login() {

    const { login } = useContext(AuthContext);

    const onLoginHandler = (e) => {

        e.preventDefault();

        let formData = new FormData(e.currentTarget)

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then(res => {

                login(res)

            })
            .catch(err => {

                console.log(err)

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


                              <div  className="alert alert-danger blankFormAlert" role="alert">Please fill out all the blank spaces</div>
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