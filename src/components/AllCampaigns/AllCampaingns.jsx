import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CampaignCard from '../campaignCard/campaignCard';

const AllCampaingns = () => {

    const loadedcampaigns = useLoaderData();
    const [campaigns, setCampaigns] = useState(loadedcampaigns);
    return (
        <div className='my-10 flex flex-col items-center border-2 border-red-500'>
            <div className='font-bold text-2xl mb-10'>Running campaign count: {campaigns.length}</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                {campaigns.map(campaign => <CampaignCard key={campaign._id} campaign={campaign}
                    campaigns={campaigns}
                    setCampaigns={setCampaigns}
                ></CampaignCard>)}
            </div>
        </div>
    );
};

export default AllCampaingns;