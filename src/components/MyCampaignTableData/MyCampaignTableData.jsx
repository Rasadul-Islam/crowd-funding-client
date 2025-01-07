import React from 'react';
import Swal from 'sweetalert2';

const MyCampaignTableData = ({ index, myCampaign, setMyCampaigns, myCampaigns }) => {
    const {_id, title, deadline, campaign_type } = myCampaign;
    const newDeadline= new Date(deadline).toLocaleDateString('en-GB');

    const handleDelete = _id => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/campaign/${_id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                                const remaining = myCampaigns.filter(camp => camp._id !== _id);
                                setMyCampaigns(remaining);
                            }
                        })
                }
            });
        }

    return (
        <tr className='text-center'>
            <td className='border border-gray-300 px-4 py-2'>{index + 1}</td>
            <td className='border border-gray-300 px-4 py-2'>{title}</td>
            <td className='border border-gray-300 px-4 py-2'>{newDeadline}</td>
            <td className='border border-gray-300 px-4 py-2'>{campaign_type}</td>
            <td className='border border-gray-300 px-4 flex flex-col md:flex-row md:gap-2 justify-center items-center'>
                <button
                    className="btn bg-blue-500 text-white px-3 py-0 rounded hover:bg-blue-600 w-full max-w-20"
                >
                    Update
                </button>
                <button
                    onClick={()=>handleDelete(_id)}
                    className="btn bg-red-500 text-white px-3 py-0 rounded hover:bg-red-600 w-full max-w-20"
                >
                    Delete
                </button>
            </td>

        </tr>

    );
};

export default MyCampaignTableData;