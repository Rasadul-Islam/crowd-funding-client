import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import Lottie from 'lottie-react';
import logInLottie from '../../assets/lottie/logIn.json';

const LogIn = () => {


    const { logInUser, logInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/'


    // Handle Google Sign-In
    const handleGoogleLogIn = async () => {
        try {
            await logInWithGoogle()
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "LogIn Successful",
                showConfirmButton: false,
                timer: 1000
            });
            navigate(from, { replace: true })
        }
        catch (error) {
            // console.log(error)
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "LogIn Faild",
                showConfirmButton: false,
                timer: 1000
            });
        }
    }

    // email & password logIn function
    const handleLogIn = async e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        try {
            await logInUser(email, password)
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "LogIn Successful",
                showConfirmButton: false,
                timer: 1000
            });
            navigate(from, { replace: true })
        }
        catch (error) {
            console.log(error)
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "LogIn Faild",
                text: "Check your Email or Password and try again",
                showConfirmButton: false,
                timer: 2000
            });
        }
    }

    return (
        <div className="flex justify-center bg-base-200 p-10">

            <div className="card flex-col md:flex-row items-center justify-center md:gap-10 bg-base-100 w-full max-w-4xl shrink-0 shadow-2xl p-10 md:my-20">
                <div className='lg:size-96'>
                    <Lottie animationData={logInLottie}></Lottie>
                </div>
                <form onSubmit={handleLogIn} className="">
                    <h1 className="text-2xl font-bold mb-5">LogIn:</h1>
                    {/* google logIn botton */}
                    <div className="form-control mt-6">
                        <button
                            type='button'
                            onClick={handleGoogleLogIn}
                            className="btn bg-transparent font-semibold text-lg"
                        >
                            <img src="https://i.ibb.co.com/ZdHFgMk/png-clipart-google-google.png" alt="Google Logo" className='w-8 h-8 bg-transparent rounded-full' />
                            <h1>Sign in with Google</h1>
                        </button>
                        <h1 className='divider my-5'>Or</h1>
                    </div>
                    {/* email, password logIn form */}
                    <div className="form-control">
                        <label className="text-lg font-semibold mb-2">Email</label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="text-lg font-semibold mb-2">Password</label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="LogIn" className="btn hover:text-purple-300 border-2 border-purple-400 px-3 py-2 rounded-lg bg-purple-100 font-bold text-center text-xl" />
                    </div>
                    <h1 className="mt-5">
                        Don't you have an account? <Link to="/register" className="font-bold">Register.</Link>
                    </h1>
                </form>
            </div>
        </div>
    );
};

export default LogIn;