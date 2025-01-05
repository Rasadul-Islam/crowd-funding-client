import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const CampaignTable = ({ campaign, campaigns, setCampaigns, index }) => {
    const { _id, image, title, campaign_type, description, deadline } = campaign;
    const newdeadline = new Date(deadline).toLocaleDateString('en-GB')
    const { user } = useContext(AuthContext);


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
                            const remaining = campaigns.filter(camp => camp._id !== _id);
                            setCampaigns(remaining);
                        }
                    })
            }
        });
    }
    return (
        // <div>
        //     <div className="card bg-purple-50 w-[320px] h-[450px] shadow-xl border-2 border-purple-500 mx-auto">

        //         <div className='px-5 mt-5'>
        //             <h1 className='text-xl font-bold mt-2 capitalize'>{title}</h1>
        //             <h1 className='text-lg font-semibold mt-1'>Type: {campaign_type}</h1>
        //             <h1 className='text-lg font-semibold mt-1'>Deadline: {deadline}</h1>
        //             <h1 className='text-lg  mt-1 overflow-hidden text-ellipsis whitespace-nowrap'
        //             ><span className='font-semibold'>Description:</span> {description}
        //             </h1>
        //             <div className='w-full'>
        //                 <button onClick={() => handleDelete(_id)} className='btn hover:text-purple-300 border-2 border-red-600 px-2 py-1 rounded-lg bg-red-300 font-bold text-lg m-5'>Delete</button>
        //                 <Link to={`/card/ditails/${_id}`}
        //                     className='btn hover:text-purple-300 border-2 border-purple-400 px-2 py-1 rounded-lg bg-purple-100 font-bold text-lg m-5' >See More
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
            <tr>
                <td className='border border-gray-300 px-4 py-2'>{index + 1}</td>
                <td className='border border-gray-300 px-4 py-2'>{title}</td>
                <td className='border border-gray-300 px-4 py-2'>{newdeadline}</td>
                <td className='border border-gray-300 px-4 py-2'>{user.displayName}
                </td>
                <td className='border border-gray-300 px-4 py-2'>
                    <Link to={`/card/ditails/${_id}`}
                        className='btn hover:text-purple-300 border-2 border-purple-400 px-2 py-1 rounded-lg bg-purple-100 font-bold text-lg' >See More
                    </Link>
                </td>
            </tr>
        </>
    );
};

export default CampaignTable;