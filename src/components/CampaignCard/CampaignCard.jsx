import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
    const { _id, image, title, campaign_type, description, deadline } = campaign;
    

    return (
        <div>
            <div className="card bg-purple-50 w-[320px] h-[450px] shadow-xl border-2 border-purple-500 mx-auto">
                <figure>
                    <img
                        src={image}
                        alt={title}
                        className='w-72 h-52 mt-5 rounded-xl' />
                </figure>
                <div className='px-5 mt-5'>
                    <h1 className='text-xl font-bold mt-2 capitalize'>{title}</h1>
                    <h1 className='text-lg font-semibold mt-1'>Type: {campaign_type}</h1>
                    <h1 className='text-lg font-semibold mt-1'>Deadline: {deadline}</h1>
                    <h1 className='text-lg  mt-1 overflow-hidden text-ellipsis whitespace-nowrap'
                    ><span className='font-semibold'>Description:</span> {description}
                    </h1>
                    <div className='w-full text-end'>
                        <Link to={`/card/ditails/${_id}`}
                            className='btn hover:text-purple-300 border-2 border-purple-400 px-2 py-1 rounded-lg bg-purple-100 font-bold text-lg m-5' >See More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;