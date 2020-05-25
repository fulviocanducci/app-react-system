import React, { useState } from "react";
import { useToken } from "../../context";

import "./index.css";

function Login() {
  const [, setToken] = useToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "fulvio@hotmail.com" && password === "123456") {
      setToken("token_" + new Date().getTime() + "_end");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Login</h5>
              <form className="form-signin" onSubmit={handleSubmit}>
                <div className="form-label-group">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="inputEmail"
                    name="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required
                    autoFocus
                    autoComplete={"off"}
                  />
                  <label htmlFor="inputEmail">E-mail</label>
                </div>

                <div className="form-label-group">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="inputPassword"
                    name="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                    autoComplete={"off"}
                  />
                  <label htmlFor="inputPassword">Senha</label>
                </div>

                <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  {/*<label className="custom-control-label" htmlFor="customCheck1">
                    Remember password
                    </label> */}
                </div>
                <button
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Entrar
                </button>
                {/*
                <hr className="my-4" />
                <button
                  className="btn btn-lg btn-google btn-block text-uppercase"
                  type="submit"
                >
                  <i className="fab fa-google mr-2"></i> Sign in with Google
                </button>
                <button
                  className="btn btn-lg btn-facebook btn-block text-uppercase"
                  type="submit"
                >
                  <i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook
                </button>
                */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
