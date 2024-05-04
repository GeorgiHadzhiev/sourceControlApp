import authService from "../../services/authService";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {

    let navigate = useNavigate()
    const { login } = useContext(AuthContext);

    function onSubmitHandler(e) {

        e.preventDefault();
        let formData = new FormData(e.preventDefault());

        let firstName = formData.get('firstName');
        let lastName = formData.get('lastName');
        let email = formData.get('email');
        let password = formData.get('password');
        //let rePassword = formData.get('repeatPassword');

        authService.register(firstName.toUpperCase(), lastName.toUpperCase(), email, password)
            .then(res => {

                login(res);
                navigate('/catalog');

            })
            .catch(err => {

                console.log(err);

            })

    }

  return (
      <div className="contact-page">
          <div className="contactbg">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="contacttitlepage">
                              <h2>Register</h2>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
          <div className="container">
              <div className="row">
                  <div className=" col-md-6 offset-md-3">
                      <div className="address">

                          <form method="POST" onSubmit={onSubmitHandler}>


                              <div className="alert alert-danger blankFormAlert" role="alert">Please fill out all the blank spaces</div>
                              <div className="row">
                                  <div className="col-sm-12">
                                      <input className="contactus" placeholder="First Name" type="text" name="firstName" />
                                  </div>

                                  <div className="col-sm-12">
                                      <input className="contactus" placeholder="Last Name" type="text" name="lastName" />
                                  </div>

                                  <div className="col-sm-12">
                                      <input className="contactus" placeholder="Email" type="text" name="email" />
                                  </div>

                                  <div className="col-sm-12">
                                      <input id="originalPassword" className="contactus" placeholder="Password" type="password" name="password" />
                                  </div>

                                  <div className="col-sm-12">
                                      <input className="contactus" placeholder="Repeat Password" type="password" name="repeatPassword" />
                                  </div>

                                  <div className="col-sm-12">
                                      <button className="send">Create Account</button>
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

export default Register;