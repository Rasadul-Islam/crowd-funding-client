import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CampaignTable from '../CampaignTable/CampaignTable';

const AllCampaingns = () => {

    const loadedcampaigns = useLoaderData();
    const [campaigns, setCampaigns] = useState(loadedcampaigns);
    return (
        <div className='container mx-auto my-10 flex flex-col items-center'>
            <div className='font-bold text-2xl mb-10'>All Campaigns:</div>
            <table className='table-auto border-collapse border border-gray-200 w-full'>
                <thead>
                    <tr className='bg-gray-100'>
                        <th className='border border-gray-300 px-4 py-2'>#</th>
                        <th className='border border-gray-300 px-4 py-2'>Campaign Name</th>
                        <th className='border border-gray-300 px-4 py-2'>Campaign Deadline</th>
                        <th className='border border-gray-300 px-4 py-2'>Creator Name</th>
                        <th className='border border-gray-300 px-4 py-2'>Actions</th>
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
    );
};

export default AllCampaingns;