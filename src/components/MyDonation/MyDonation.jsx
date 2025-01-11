import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationCard from '../DonationCard/DonationCard';

const MyDonation = () => {
    const loadedDonationList = useLoaderData();

    return (
        <div >
            <h1 className='text-xl md:text-2xl font-bold text-center'>My Donation :</h1>
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center text-center gap-5 md:max-w-3xl lg:max-w-7xl mx-auto mt-10'>
                {loadedDonationList.map((donation) => (
                    <div key={donation._id} className="justify-center items-center flex">
                        <DonationCard
                            donation={donation}
                        >
                        </DonationCard>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyDonation;

// const donationData = { donerName, donerEmail, donationAmount, campaignTitle, minDonationAmount, campaign_type };