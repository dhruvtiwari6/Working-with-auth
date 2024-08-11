import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";


const LoginPage = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const { loginWithRedirect } = useAuth0();


    const handleNavigate = async(e) => {
        e.preventDefault();
     try {
           const data  = {
               firstname : firstName,
               lastname : lastName
           }
   
           const res = await axios.post('http://localhost:8000/api/login' , data , {withCredentials : true});
           console.log(res);
   
   
           navigate('/main');
     } catch (error) {
        console.log('error in logging ' , error);
     }
    }

    return (
        <div>
            <form>
                <label htmlFor="first">FirstName</label>
                <input 
                    type="text" 
                    id="first" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <br />

                <label htmlFor="last">LastName</label>
                <input 
                    type="text" 
                    id="last" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <br />
                
                <button onClick={() => loginWithRedirect()}>Log In</button>
                </form>
            <Outlet />
        </div>
    );
}

export default LoginPage;
