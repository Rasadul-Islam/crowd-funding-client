import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CampaignTable from '../CampaignTable/CampaignTable';

const AllCampaingns = () => {
    const loadedcampaigns = useLoaderData();
    const [campaigns, setCampaigns] = useState(loadedcampaigns);
    const [sortOrder, setSortOrder] = useState('asc');

    // Sort by minimum donation amount
    const sortCampaigns = () => {
        const sorted = [...campaigns].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.donation_amount - b.donation_amount;
            } else {
                return b.donation_amount - a.donation_amount;
            }
        });
        setCampaigns(sorted);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle sorting order
    };

    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 my-10 flex flex-col items-center'>
            <div className='flex justify-between items-center font-bold text-2xl mb-10 w-full max-w-4xl'>
                <h1 className='text-lg sm:text-2xl'>All Campaigns:</h1>
                <button
                    className='btn text-center border-2 border-purple-400 px-3 sm:px-4 py-2 rounded-lg bg-purple-100 font-bold text-sm sm:text-base'
                    onClick={sortCampaigns}
                >
                    Sort ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
                </button>
            </div>

            <div className='w-full overflow-x-auto'>
                <table className='table-auto border-collapse border border-gray-200 w-full'>
                    <thead>
                        <tr className='bg-gray-100 text-sm sm:text-base'>
                            <th className='border border-gray-300 px-2 sm:px-4 py-2'>#</th>
                            <th className='border border-gray-300 px-2 sm:px-4 py-2'>Campaign Name</th>
                            <th className='border border-gray-300 px-2 sm:px-4 py-2'>Campaign Deadline</th>
                            <th className='border border-gray-300 px-2 sm:px-4 py-2'>Creator Name</th>
                            <th className='border border-gray-300 px-2 sm:px-4 py-2'>Min. Donation</th>
                            <th className='border border-gray-300 px-2 sm:px-4 py-2'>Actions</th>
                        </tr>
                    </thead>

                    {campaigns.map((campaign, index) => (
                        <tbody key={campaign._id} className='text-center'>
                            <CampaignTable
                                index={index}
                                campaign={campaign}
                                campaigns={campaigns}
                                setCampaigns={setCampaigns}
                            />
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default AllCampaingns;
