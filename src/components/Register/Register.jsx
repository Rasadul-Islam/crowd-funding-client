import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const Register = () => {

    const {createUser}= useContext(AuthContext);

    // register form handle
    const handleRagister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email= form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        
        createUser( email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log("error",error);
        })
    }
    return (
        <div className='container mx-auto mt-10 justify-center items-center flex'>
            <form className='flex flex-col gap-2 w-2/3 max-w-xl border-2 border-gray-300 p-10 rounded-lg' onSubmit={handleRagister}>
                <label className="input input-bordered py-3">
                    <input type="text" name='name' className="grow" placeholder="Name" required/>
                </label>
                <label className="input input-bordered py-3">
                    <input type="email" name='email' className="grow" placeholder="Email" required/>
                </label>
                <label className="input input-bordered py-3">
                    <input type="url" name='photoURL' className="grow" placeholder="PhotoURL" required/>
                </label>
                <label className="input input-bordered py-3">
                    <input type="password" name='password' className="grow" placeholder="Password" required/>
                </label>
                <div className="form-control mt-6">
                    <button
                        className="btn hover:text-purple-300 border-2 border-purple-400 px-3 py-2 rounded-lg bg-purple-100 font-bold text-center text-xl"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;