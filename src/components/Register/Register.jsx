import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import registerLottie from '../../assets/lottie/register.json'

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);

    // register form handle
    const handleRagister = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        // Password validation
        const uppercaseCheck = /[A-Z]/.test(password);
        const lowercaseCheck = /[a-z]/.test(password);
        const lengthCheck = password.length >= 6;

        if (!uppercaseCheck) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must contain at least one uppercase letter.",
            });
            return;
        }
        if (!lowercaseCheck) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must contain at least one lowercase letter.",
            });
            return;
        }
        if (!lengthCheck) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must be at least 6 characters long.",
            });
            return;
        }

        try {
            const result = await createUser(email, password);
            await updateUserProfile(name, photoURL);
            Swal.fire({
                icon: "success",
                title: "Registration successful!",
                showConfirmButton: false,
                timer: 1500,
            });
            // console.log("User created successfully:", result.user);
        } catch (error) {
            console.error("Error creating user:", error);
            Swal.fire({
                icon: "error",
                title: "Registration Failed",
                text: error.message,
            });
        }

    };

    return (
        <div className='flex flex-col md:flex-row justify-center items-center bg-base-200 gap-10 p-10'>
            <div className='lg:size-96'>
                <Lottie animationData={registerLottie}></Lottie>
            </div>
            <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-10 md:my-20'>
                <h1 className="text-2xl font-bold mb-5">Register :</h1>
                <form className='form-control gap-4' onSubmit={handleRagister}>
                    <label className="input input-bordered py-3">
                        <input type="text" name='name' className="grow" placeholder="Name" required />
                    </label>
                    <label className="input input-bordered py-3">
                        <input type="email" name='email' className="grow" placeholder="Email" required />
                    </label>
                    <label className="input input-bordered py-3">
                        <input type="url" name='photoURL' className="grow" placeholder="PhotoURL" required />
                    </label>
                    <label className="input input-bordered py-3">
                        <input type="password" name='password' className="grow" placeholder="Password" required />
                    </label>
                    <div className="form-control mt-4">
                        <button
                            className="btn hover:text-purple-300 border-2 border-purple-400 px-3 py-2 rounded-lg bg-purple-100 font-bold text-center text-xl"
                        >
                            Register
                        </button>
                    </div>
                    <h1 className="mt-5">
                        Already have an account? <Link to="/logIn" className="font-bold">LogIn.</Link>
                    </h1>
                </form>
            </div>
        </div>
    );
};

export default Register;
