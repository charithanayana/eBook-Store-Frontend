import { useState } from 'react';
import SignUpInputs from './SignUpInputs'
import { useNavigate } from 'react-router-dom';


function SignUp() {

  const [values, setValues] = useState({

    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    postalCode: "",
    password: "",
    confirmPassword: ""
  });

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "Charitha",
      errorMessage:"First Name Max 16 characters and should not include any special characters!",
      label: "First Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Punchihewa",
      errorMessage:"Last Name Max 16 characters  and should not include any special characters!",
      label: "Last Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "example@gmail.com",
      errorMessage:"It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "phoneNumber",
      type: "",
      placeholder: "0770000000",
      errorMessage:"Phone number should be 10 digit long!",
      label: "Phone Number",
      pattern: "^[0-9]{10}$", 
      required: true,
    },
    {
      id: 5,
      name: "address",
      type: "text",
      placeholder: "No:00 Colombo, Sri Lanka",
      errorMessage:"",
      label: "Address"
    },
    {
      id: 6,
      name: "postalCode",
      type: "text",
      placeholder: "00000",
      errorMessage:"",
      label: "Postal Code"
    },
    {
      id: 7,
      name: "password",
      type: "password",
      placeholder: "******",
      errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$",
      required: true,
    },
    {
      id: 8,
      name: "confirmPassword",
      type: "password",
      placeholder: "******",
      errorMessage:"Password don' t match! ",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    }
  ]


  const handleSubmit = (e: any) => {
    e.preventDefult();
  };

  const onChange = (e:any) => {
    setValues({...values, [e.target.name]: e.target.value});
  }

  const navigate = useNavigate();

  console.log(values);


  return (
    <div>
      <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
        <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-md lg:max-w-md w-full">

          <div className="w-full p-8 lg:w-md">
            <p className="text-2xl text-blue-700 text-center font-semibold">Register</p>
            <form onSubmit={handleSubmit}>
              {inputs.map((input) =>(
                <SignUpInputs key={input.id} {... input} value={values[input.name as keyof typeof values]} onChange={onChange}/>
              ))}
              <button className="mt-8 bg-blue-700 text-white font-semibold py-2 px-4 w-full rounded hover:bg-blue-600">
                Sign up
              </button>
            </form>
            <a
              href="#"
              className=" flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
            >
              <div className="flex px-5 justify-center w-full py-3">
                <div className="min-w-[30px]">
                  <svg className="h-6 w-6" viewBox="0 0 40 40">
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#1976D2"
                    />
                  </svg>
                </div>
                <div className="flex w-full justify-center">
                  <h1 className="whitespace-nowrap text-gray-600 font-semibold">
                    Sign in with Google
                  </h1>
                </div>
              </div>
            </a>
            <div className="mt-4 flex items-center w-full text-center">
              <div className="text-xs text-gray-500 capitalize text-center w-full">
                Already have an account?
                <span className="text-blue-700">
                  <button onClick={() => navigate("/login")}>Login</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default SignUp