// import React, { useState } from "react";
// import "./Login.css";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Username: ${username} Password: ${password}`);
//   };

//   return (
//     <>
//         <div className="container p-5 my-5 about2">
//             <div className="row">
//                 <div className="col-sm-3">
//                 <form className="form-container" onSubmit={handleSubmit}>
//                     <label>
//                         Username:
//                         <input
//                         type="text"
//                         value={username}
//                         onChange={(event) => setUsername(event.target.value)}
//                         />
//                     </label>
//                     <br />
//                     <label>
//                         Password:
//                         <input
//                         type="password"
//                         value={password}
//                         onChange={(event) => setPassword(event.target.value)}
//                         />
//                     </label>
//                     <br />
//                     <button type="submit">Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </>
//   );
// };

// export default Login;

import React, { useState } from "react";
import "./Login.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="d-flex align-items-center vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <a href="/signup" className="btn btn-link">
                Sign Up
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;