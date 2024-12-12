import React from 'react';

const Register = () => {
    const handleRagister = (event) => {
        event.preventDefault();
        const email= event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
    }
    return (
        <div className='container mx-auto mt-10 justify-center items-center flex'>
            <form className='flex flex-col gap-2 w-2/3 max-w-xl border-2 border-gray-300 p-10 rounded-lg' onSubmit={handleRagister}>
                <label className="input input-bordered py-3">
                    <input type="text" name='name' className="grow" placeholder="Name" />
                </label>
                <label className="input input-bordered py-3">
                    <input type="email" name='email' className="grow" placeholder="Email" />
                </label>
                <label className="input input-bordered py-3">
                    <input type="url" name='url' className="grow" placeholder="PhotoURL" />
                </label>
                <label className="input input-bordered py-3">
                    <input type="password" name='password' className="grow" placeholder="Password" />
                </label>
                <div className="form-control mt-6">
                    <button
                        to="/register"
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