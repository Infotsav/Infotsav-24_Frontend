import { useState } from 'react';
import ParticlesBackground from "../Components/ParticlesBackground";

function Login() {
  const [isRegistering, setIsRegistering] = useState(true);

  const [regformData, setRegFormData] = useState({
    name: "",
    email: "",
    collegeName: "",
    contactNumber: "",
    password: "",
  });

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleRegistrationSubmit = async (e: any) => {
    e.preventDefault();

    const regData = {
      username: regformData.name,
      email: regformData.email,
      collegeName: regformData.collegeName,
      contactNumber: regformData.contactNumber,
      password: regformData.password
    }
    const response = await fetch('http://localhost:8000/api/v1/ambassador/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(regData),
    });
    console.log(regData);

    const data = await response.json();
    // data contains name,token,referral_id same them in local storge and use them in the app
    console.log(data);
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('referralId', data.referralNumber);
      localStorage.setItem('name', data.username);
      console.log('Registration successful');
    } else {
      console.log('Registration failed');
    }
    window.location.reload();
  };

  const handleInputChange = (e: any) => {
    setRegFormData({
      ...regformData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = async (e: any) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:8000/api/v1/ambassador/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,  // Include the token in the Authorization header
      },
      body: JSON.stringify(loginFormData),
    });

    const data = await response.json();
    // console.log(data);
    if (data.token) {
      // If the login is successful and a new token is received, update the token in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('referralId', data.referralNumber);
      localStorage.setItem('name', data.username);
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }

    window.location.reload();
  };

  const handleLoginChange = (e: any) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleForm = (event: any) => {
    event.preventDefault();
    setIsRegistering(!isRegistering);
  };

  return (
    <div className='h-full w-full'>
      <div className="h-screen w-full flex justify-center items-center ">
        <ParticlesBackground />
        <div className='form-container h-full w-full flex justify-center items-center flex-col z-[20] relative'>
          {isRegistering ? (
            <form onSubmit={handleRegistrationSubmit} className='h-[80%] w-[60%] mt-[5%]  backdrop-blur-sm flex flex-col justify-center items-center rounded-2xl border border-2 borer-white'>
              <div className='h-[100%] w-[100%] flex flex-col justify-start items-center gap-[7%] py-[2.5%] items-center'>
                <h2 className=' text-4xl h-[20px] mb-[20px] text-white'>Register</h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={regformData.name}
                  onChange={handleInputChange}
                  className='h-[2.5rem] w-[80%] px-[10px] bg-transparent border-2 text-white rounded-md '
                  style={{ borderColor: 'rgb(255, 73, 16)' }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={regformData.email}
                  onChange={handleInputChange}
                  className='h-[2.5rem] w-[80%] px-[10px] bg-transparent border-2 border-orange-500 text-white rounded-md '
                  style={{ borderColor: 'rgb(255, 73, 16)' }}
                />
                <input
                  type="text"
                  name="collegeName"
                  placeholder="College Name"
                  value={regformData.collegeName}
                  onChange={handleInputChange}
                  className='h-[2.5rem] w-[80%] px-[10px] bg-transparent border-2 border-orange-500 text-white rounded-md '
                  style={{ borderColor: 'rgb(255, 73, 16)' }}
                />
                <input
                  type="text"
                  name="contactNumber"
                  placeholder="Contact Number"
                  value={regformData.contactNumber}
                  onChange={handleInputChange}
                  className='h-[2.5rem] w-[80%] px-[10px] bg-transparent border-2 border-orange-500 text-white rounded-md '
                  style={{ borderColor: 'rgb(255, 73, 16)' }}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={regformData.password}
                  onChange={handleInputChange}
                  className='h-[2.5rem] w-[80%] px-[10px] bg-transparent border-2 border-orange-500 text-white rounded-md '
                  style={{ borderColor: 'rgb(255, 73, 16)' }}
                />
              </div>
              <button type="submit" className='bg-red-600 h-[40px] w-[200px] rounded-3xl mb-[20px]'>Register</button>
              <button onClick={toggleForm} className='toggle-button bg-blue-600 h-[40px] w-[200px] rounded-3xl '>
                {isRegistering ? "Switch to Login" : "Switch to Register"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleLoginSubmit} className='h-[80%] w-[60%] mt-[5%]   flex flex-col justify-center items-center border border-2 borer-white rounded-xl' >
              <div className='h-[100%] w-[100%] flex flex-col justify-start gap-[5%] py-[2.5%] items-center'>
                <h2 className=' text-4xl text-white'>Login</h2>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={loginFormData.email}
                  onChange={handleLoginChange}
                  className='h-[2.5rem] w-[80%] px-[10px] bg-transparent border-2 border-orange-500 text-white rounded-md '
                  style={{ borderColor: 'rgb(255, 73, 16)' }}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginFormData.password}
                  onChange={handleLoginChange}
                  className='h-[2.5rem] w-[80%] px-[10px] bg-transparent border-2 border-orange-500 text-white rounded-md '
                  style={{ borderColor: 'rgb(255, 73, 16)' }}
                />
              </div>
              <button type="submit" className='bg-red-600 h-[40px] w-[200px] mb-[20px] rounded-3xl items-end'>Login</button>
              <button onClick={toggleForm} className='toggle-button bg-blue-600 h-[40px] w-[200px] rounded-3xl '>
                {isRegistering ? "Switch to Login" : "Switch to Register"}
              </button>
            </form>
          )}


        </div>
      </div>
    </div>
  );
}

export default Login;
