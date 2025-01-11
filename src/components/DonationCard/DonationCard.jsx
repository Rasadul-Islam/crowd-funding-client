import React from 'react';

const DonationCard = ({ donation }) => {
    const { donerName, donerEmail, donationAmount, campaignTitle, minDonationAmount, campaign_type } = donation;
    return (
        <div>
            <div className="card bg-base-100 w-80 md:w-96 shadow-xl">
                
                    <div className='border rounded-lg shadow-lg p-5 bg-white'>
                        <h2 className='text-xl font-bold text-gray-800'>{campaignTitle}</h2>
                        <p className='text-sm text-gray-600'>Campaign Type: {campaign_type}</p>
                        <p className='text-sm text-gray-600'>Minimum Donation Amount: ${minDonationAmount}</p>
                        <hr className='my-2' />
                        <h3 className='text-md font-semibold text-gray-800'>Donor Information</h3>
                        <p className='text-sm text-gray-600'>Name: {donerName}</p>
                        <p className='text-sm text-gray-600'>Email: {donerEmail}</p>
                        <p className='text-sm text-gray-600'>Donation Amount: ${donationAmount}</p>
                    </div>
                
            </div>
        </div>
    );
};

export default DonationCard;