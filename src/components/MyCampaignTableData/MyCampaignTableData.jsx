import React from 'react';

const MyCampaignTableData = ({ index, myCampaign, setMyCampaigns, myCampaigns }) => {
    const { title, deadline, campaign_type } = myCampaign;
    const newDeadline= new Date(deadline).toLocaleDateString('en-GB');
    return (
        <tr className='text-center'>
            <td className='border border-gray-300 px-4 py-2'>{index + 1}</td>
            <td className='border border-gray-300 px-4 py-2'>{title}</td>
            <td className='border border-gray-300 px-4 py-2'>{newDeadline}</td>
            <td className='border border-gray-300 px-4 py-2'>{campaign_type}</td>
            <td className='border border-gray-300 px-4'>
                <button
                    className="btn bg-blue-500 text-white px-3 py-0 rounded hover:bg-blue-600"
                >
                    Update
                </button>
                <button
                    className="btn bg-red-500 text-white px-3 py-0 rounded hover:bg-red-600"
                >
                    Delete
                </button>
            </td>

        </tr>

    );
};

export default MyCampaignTableData;