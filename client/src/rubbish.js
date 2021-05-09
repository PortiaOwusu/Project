import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./Login.css";

// function Login() {
// const [email, setEmail] = useState( "" )
// const [password, setPassword] = useState( "" )

// const signIn = e => {
//     e.preventDefault()

//     // mongodb signin
// }

// const register = e => {
//     e.preventDefault();

//     // mongodb register
// }

//   return (
//     <div className="login">
//       <Link to="/">
//         <img className="login_logo" src="demo2.jpg" alt="" />
//       </Link>

//       <div className="login_container">
//         <h1>Sign In</h1>

//         <form>
//           <h5>E-mail</h5>
//           <input type="text" value={email}
//           onChange={e => setEmail(e.target.value)}
//           />

//           <h5>Password</h5>
//           <input type="password" value={password}
//           onChange={e => setPassword(e.target.value)}
//           />

//           <button type="submit" onClick={signIn}
//            className="signin_button">Sign In</button>
//         </form>

//         <p>
//           By signing-in you agree to Pharma Ghana's Conditions of Use & Sale.
//           Please see our Privacy Notice, our Cookies Notice and our
//           Interest-Based Ads Notice.
//         </p>

//         <button onClick={register}
//          className="register_button">Create An Account </button>
//       </div>
//     </div>
//   );
// }

// export default Login;

const Login = () => {
  return (
    <div className="login">
      <Link exact to="/">
        <img className="login_logo" src="demo2.jpg" alt="" />
      </Link>
      <BrowserRouter>
        <Switch>
          <Route path="/pharmacy/registerpharmacy" component="./PharmSignup" />
          <Route path="/pharmacy/pharmacylogin" component="" />
          <Route path="/buyer/registerbuyer" component="" />
          <Route path="/buyer/buyerlogin" component="" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Login;
