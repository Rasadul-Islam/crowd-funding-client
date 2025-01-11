import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const CampaignTable = ({ campaign, index }) => {
    const { _id, title, deadline, creatorName, creatorEmail } = campaign;
    const newdeadline = new Date(deadline).toLocaleDateString('en-GB');
    const { user } = useContext(AuthContext);

    return (
        <>
            <tr>
                <td className='border border-gray-300 px-4 py-2'>{index + 1}</td>
                <td className='border border-gray-300 px-4 py-2'>{title}</td>
                <td className='border border-gray-300 px-4 py-2'>{newdeadline}</td>
                <td className='border border-gray-300 px-4 py-2'>{creatorName}
                </td>
                <td className='border border-gray-300 px-4 py-2'>
                    <Link to={`/card/ditails/${_id}`}
                        className='btn hover:text-purple-300 border-2 border-purple-400 px-2 py-1 rounded-lg bg-purple-100 font-bold md:text-lg' >See More
                    </Link>
                </td>
            </tr>
        </>
    );
};

export default CampaignTable;