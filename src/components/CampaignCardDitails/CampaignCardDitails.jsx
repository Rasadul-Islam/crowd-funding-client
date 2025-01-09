import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const CampaignCardDetails = () => {
    const campaign = useLoaderData();
    const { image, title, campaign_type, description, donation_amount, deadline } = campaign;
    const { user } = useContext(AuthContext);
    const { displayName, email } = user;
    const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
    const navigate = useNavigate();

    // Donate button function
    const donateButtonHandle = (e) => {
        e.preventDefault();
        const form = e.target;
        const donerName = form.donerName.value;
        const donerEmail = form.donerEmail.value;
        const donationAmount = form.donationAmount.value;
        const campaignTitle = title;
        const minDonationAmount = donation_amount;
        const donationData = { donerName, donerEmail, donationAmount, campaignTitle, minDonationAmount, campaign_type };

        fetch('http://localhost:5000/campaign/donate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donationData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Thank You!",
                        text: "Your Donation Successfully added!",
                        icon: "success"
                    });
                    // Redirect to my apply list
                    navigate(`/donations/my`);
                } else {
                    Swal.fire({
                        title: "Opps!",
                        text: "There is some problem!",
                        icon: "error"
                    });
                }
            })

        setIsDonateModalOpen(false);
    };

    return (
        <div className="container card bg-purple-50 shadow-xl border-2 border-purple-500 mx-auto max-w-6xl mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <img
                        className="rounded-xl md:rounded-tr-none md:rounded-bl-none w-11/12 h-72 md:w-96 mx-auto mt-5 md:mt-0"
                        src={image}
                        alt={title}
                    />
                </div>
                <div className="mt-5 flex flex-col justify-center gap-2 px-5">
                    <h1 className="text-2xl lg:text-4xl text-center font-bold capitalize mb-5">{title}</h1>
                    <h1 className="text-lg lg:text-xl">
                        <span className="font-semibold text-xl lg:text-2xl">Type: </span>
                        {campaign_type}
                    </h1>
                    <h1 className="text-lg lg:text-xl">
                        <span className="font-semibold text-xl lg:text-2xl">Minimum Donation: </span>$ {donation_amount}
                    </h1>
                    <h1 className="text-lg lg:text-xl">
                        <span className="font-semibold text-xl lg:text-2xl">Deadline: </span>{deadline}
                    </h1>
                    <h1 className="text-lg lg:text-xl">
                        <span className="font-semibold text-xl lg:text-2xl">Description: </span>{description}
                    </h1>
                </div>
            </div>
            <div className="flex gap-5 my-10 justify-center items-center">
                <Link
                    to="/campaigns"
                    className="btn hover:text-purple-400 border-2 border-purple-400 px-2 py-1 rounded-lg bg-gray-200 font-bold text-xl w-56"
                >
                    Back
                </Link>
                <button
                    onClick={() => setIsDonateModalOpen(true)}
                    className="btn hover:text-purple-400 border-2 border-purple-400 px-2 py-1 rounded-lg bg-purple-200 font-bold text-xl w-56"
                >
                    Donate
                </button>
            </div>
            {isDonateModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-5 rounded-xl shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">Donate Now</h2>
                        <form onSubmit={donateButtonHandle}>
                            <div className="flex flex-col mt-1">
                                <label className="label text-xl">Your Name : (read only)</label>
                                <input type="text" name='donerName' value={displayName} className="input input-bordered max-w-xs ml-16" readOnly />
                            </div>
                            <div className="flex flex-col mt-1">
                                <label className="label text-xl">Your Email : (read only)</label>
                                <input type="text" name='donerEmail' value={email} className="input input-bordered max-w-xs ml-16" readOnly />
                            </div>
                            <div className="flex flex-col mt-1">
                                <label className="label text-xl">Your Donation Amount :</label>
                                <input type="number" name='donationAmount' defaultValue={donation_amount} className="input input-bordered max-w-xs ml-16" />
                            </div>
                            <div className='flex justify-center mt-5 gap-5'>
                                <button
                                    type="button"
                                    onClick={() => setIsDonateModalOpen(false)}
                                    className="btn bg-gray-300 text-gray-800 px-3 py-1 rounded-xl hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn bg-lime-400 px-5 py-1 hover:bg-lime-500 rounded-xl "
                                >
                                    Donate
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CampaignCardDetails;
