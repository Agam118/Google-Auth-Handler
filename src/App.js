import "./App.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";


function App() {
  return (
     <>
      <h1>Google Authentication Check</h1>
      <div style={{ width : "180px"}}>
      <GoogleOAuthProvider clientId="<secret>">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse.credential);
            console.log(decoded);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        ;
      </GoogleOAuthProvider>
      ;
     </div>
    </>
  );
}

export default App;
