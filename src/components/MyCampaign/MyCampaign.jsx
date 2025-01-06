import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyCampaignTableData from '../MyCampaignTableData/MyCampaignTableData';

const MyCampaign = () => {
    const loadedMyCampaigns = useLoaderData();
    const [myCampaigns, setMyCampaigns] = useState(loadedMyCampaigns);

    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-2xl md:text-4xl text-center mb-10 font-bold'>My Campaign Post: {loadedMyCampaigns.length} </h1>

            <table className='w-full'>
                <thead className=''>
                    <tr className='bg-gray-100 w-full'>
                        <th className='border border-gray-300 px-4 py-2'>#</th>
                        <th className='border border-gray-300 px-4 py-2'>Campaign Name</th>
                        <th className='border border-gray-300 px-4 py-2'>Campaign Deadline</th>
                        <th className='border border-gray-300 px-4 py-2'>Campains Type</th>
                        <th className='border border-gray-300 px-4 py-2'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {myCampaigns.map((myCampaign, index) => (
                        <MyCampaignTableData key={myCampaign._id}
                            index={index}
                            myCampaign={myCampaign}
                            myCampaigns={myCampaigns}
                            setMyCampaigns={setMyCampaigns}
                        ></MyCampaignTableData>
                    ))}
                </tbody>
            </table>



        </div>
    );
};

export default MyCampaign;



