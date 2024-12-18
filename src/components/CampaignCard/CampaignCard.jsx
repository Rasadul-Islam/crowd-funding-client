import React from 'react';

const CampaignCard = ({ campaign }) => {
    return (
        <div>
            <div className="card bg-purple-50 w-[350px] h-[450px] shadow-xl border-2 border-purple-500 mx-auto">
                <figure>
                    <img
                        src={campaign.image}
                        alt={campaign.title}
                        className='w-72 h-52 mt-5 rounded-xl' />
                </figure>
                <div className='pl-5 mt-5'>
                    <h1 className='text-xl font-bold mt-2 '>{campaign.title}</h1>
                    <h1 className='text-lg font-semibold mt-1'>Type: {campaign.campaign_type}</h1>
                    <h1 className='text-lg font-semibold mt-1'>Deadline: {campaign.deadline}</h1>
                    <h1 className='text-lg  mt-1 overflow-hidden text-ellipsis whitespace-nowrap pr-5 '
                    ><span className='font-semibold'>Description:</span> {campaign.description}
                    </h1>
                    <div className='text-end'>
                    <button className='btn hover:text-purple-300 border-2 border-purple-400 px-2 py-1 rounded-lg bg-purple-100 font-bold text-lg m-5'>See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;