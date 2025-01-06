import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CampaignCardDitails = () => {
    const campaign = useLoaderData();
    const { image, title, campaign_type, description, donation_amount, deadline } = campaign;



    // donate button function
    const donateButtonHandle = () => {
        // if (isRegistrationOpen) {
        //     navigate(`/marathon-register/${_id}`);
        // } else {
        //     alert("Registration Not Valid");
        // }
    };


    return (
        <div className="container card bg-purple-50 shadow-xl border-2 border-purple-500 mx-auto max-w-6xl mt-10">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div>
                    <img className='rounded-xl md:rounded-tr-none md:rounded-bl-none w-11/12 h-72 md:w-96 mx-auto mt-5 md:mt-0' src={image} alt={title} />
                </div>
                <div className='mt-5 flex flex-col justify-center gap-2 px-5'>
                    <h1 className='text-2xl lg:text-4xl text-center font-bold capitalize mb-5'>{title}</h1>
                    <h1 className='text-lg lg:text-xl'><span className='font-semibold text-xl lg:text-2xl'>Type : </span>{campaign_type}</h1>
                    <h1 className='text-lg lg:text-xl'><span className='font-semibold text-xl lg:text-2xl'>Minimun Donation : </span>$ {donation_amount}</h1>
                    <h1 className='text-lg lg:text-xl'><span className='font-semibold text-xl lg:text-2xl'>Deadline : </span>{deadline}</h1>
                    <h1 className='text-lg lg:text-xl'><span className='font-semibold text-xl lg:text-2xl '>Description : </span>{description}</h1>
                </div>

            </div>
            <div className='flex gap-5 my-10 justify-center items-center '>
            <Link to='/campaigns' className='btn hover:text-purple-400 border-2 border-purple-400 px-2 py-1 rounded-lg bg-gray-200 font-bold text-xl w-56'>
                Back
            </Link>
            <button
                onClick={donateButtonHandle}
                className='btn hover:text-purple-400 border-2 border-purple-400 px-2 py-1 rounded-lg bg-purple-200 font-bold text-xl w-56'>
                Donate
            </button>
            </div>
        </div>
    );
};

export default CampaignCardDitails;