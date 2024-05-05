
function Test() {


    const onLoginHandler = (e) => {

        e.preventDefault();
        testEndpoint();

      
    }

    async function testEndpoint() {

        const response = await fetch(`https://localhost:7035/User`);
        const res = await response.text();
        console.log(res);

    }





  return (
      <div className="container">
          <div className="row">
              <div className=" col-md-6 offset-md-3">
                  <div className="address">

                      <form method="GET" onSubmit={onLoginHandler}>


                          <div className="alert alert-danger blankFormAlert" role="alert">Please fill out all the blank spaces</div>
                          <div className="row">

                              <div className="col-sm-12">
                                  <button className="send">Test Endpoint</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Test;