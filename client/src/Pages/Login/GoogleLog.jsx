import GoogleLogin from "react-google-login";
import jwt_decode from "jwt-decode";
import { useGoogleLogin } from "react-google-login";
import axios from "axios";
import { FaGoogle } from "react-icons/fa";

const GoogleLog = () => {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get("http://example.com/api/google", {
          headers: {
            Authorization: `Bearer ${response.accessToken}`,
          },
        });

        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={login} className="text-white border-slate-50 border">
          <FaGoogle className="mr-2" />
          Continue with Google
        </button>
        <GoogleLogin
          clientId="your-client-id"
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse.credential);
            var decoded = jwt_decode(credentialResponse.credential);
            console.log(decoded);
          }}
          onFailure={() => {
            console.log("Login Failed");
          }}
        />
      </header>
    </div>
  );
};

export default GoogleLog;
