// import Login from '../pages/Login';
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import { setUserdata } from "../redux/features/cardSlice";

const SignUpForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState(0);
    const [collegeId, setCollegeID] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password, collegeId, phoneNo }),
                credentials: "include"
            });
            if (response.ok) {
                const responseData = await response.json();
                // console.log(responseData);
                dispatch(setUserdata(responseData));
                console.log("Registration successful");
            } else {
                console.error("Registration failed");
            }
            navigate("/");
        } catch (error) {
            console.error("Error Registring in:", error);
        }
    };
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-300">
                        <form onSubmit={handleSubmit} className="flex flex-col">
                            <div className="flex flex-col">
                                <h1 className="mb-8 text-4xl font-semibold text-center ">Sign up</h1>
                                <div className="flex flex-col">
                                    <label htmlFor="name" className=" w-full rounded ">Name
                                    </label>
                                    <input type="text" value={name} id="name" onChange={(e) => { setName(e.target.value) }} placeholder="full name" required className="block border border-gray-300 w-full p-3 rounded mb-4 hover:shadow-md hover:border-gray-400" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="w-full rounded">Email
                                    </label>
                                    <input type="text" value={email} id="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="email" required className="block border border-gray-300 w-full p-3 rounded mb-4 hover:shadow-md hover:border-gray-400" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="password" className="w-full rounded">Password
                                    </label>
                                    <input type="password" value={password} id="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="password" required className="block border border-gray-300 w-full p-3 rounded mb-4 hover:shadow-md hover:border-gray-400" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="collegeId" className="w-full rounded">College ID
                                    </label>
                                    <input type="text" value={collegeId} id="collegeId" onChange={(e) => { setCollegeID(e.target.value) }} placeholder="college ID (Ex. 2021CTAE0000)" required className="block border border-gray-300 w-full p-3 rounded mb-4 hover:shadow-md hover:border-gray-400" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="phoneNo" className="w-full rounded">Mobile No.
                                        <input type="number" value={phoneNo} id="phoneNO" onChange={(e) => { setPhoneNo(e.target.value) }} placeholder="Mobile No." required className="block border border-gray-300 w-full p-3 rounded mb-4 hover:shadow-md hover:border-gray-400" />
                                    </label>
                                </div>
                                <button type="submit" className="w-full py-3 px-4 bg-gray-800 hover:bg-gray-700 hover:shadow-xl text-white font-bold rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">Create Account</button>
                            </div>
                        </form>
                    </div>
                    <div className="text-white mt-6 flex items-center">
                        Already have an account?
                        <Link className="no-underline border-b border-white text-white ml-2" to="/user/Login">
                            Login
                        </Link>.
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUpForm;
