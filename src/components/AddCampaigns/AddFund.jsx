import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../providers/AuthProvider';

const AddCampains = () => {
    const { user }= useContext(AuthContext);


    const handleAddcampaign = event => {
        event.preventDefault();
        const from = event.target;
        const image = from.image.value;
        const title = from.title.value;
        const campaign_type = from.campaign_type.value;
        const description = from.description.value;
        const donation_amount = from.donation_amount.value;
        const deadline = from.deadline.value;
        const creatorName = form.creatorName.value;
        const creatorEmail = form.creatorEmail.value;
        const newCampaign = { image, title, campaign_type, description, donation_amount, deadline, creatorName, creatorEmail}

        fetch('http://localhost:5000/campaign', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully added your campaign',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
                else alert('Try again');
            })
    }
    return (
        <div className='container mx-auto flex flex-col  items-center my-5'>
            <form onSubmit={handleAddcampaign} className="card-body w-3/4 max-w-xl lg:max-w-5xl rounded-lg shadow-xl border-2 border-purple-200 shadow-purple-300 grid grid-cols-1 lg:grid-cols-2 gap-5">
                <h1 className='text-3xl col-span-2 font-bold text-center text-purple-400 mt-1'>Add New Campaign</h1>
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">Image :</label>
                    <input type="url" name='image' placeholder="Thumbnail URL" className="input input-bordered max-w-xs ml-16" required />
                </div>
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">Title :</label>
                    <input type="text" name='title' placeholder="Campaign Title" className="input input-bordered max-w-xs ml-16" required />
                </div>
                <div className="flex flex-col mt-1">
                    <label className="label text-xl ">Campaign type :</label>
                    <select name='campaign_type' className="select select-bordered max-w-xs ml-16">
                        <option>Campaign Reason</option>
                        <option>Personal Issue</option>
                        <option>Startup</option>
                        <option>Business</option>
                        <option>Creative ideas</option>
                    </select>
                </div>
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">Description :</label>
                    <textarea name='description' className="textarea textarea-bordered max-w-xs ml-16" placeholder="Description"></textarea>
                </div>
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">Donation Amount :</label>
                    <input type="number" name='donation_amount' placeholder=" $ Donation Amount $" className="input input-bordered max-w-xs ml-16" required />
                </div>
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">Deadline :</label>
                    <input type="date" name='deadline' placeholder="Date" className="input input-bordered max-w-xs ml-16" required />
                </div>
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">Email : ( Read Only )</label>
                    <input type="email" name='creatorEmail' value={user.email} className="input text-gray-400 input-bordered max-w-xs ml-16" readOnly />
                </div>
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">Name : ( Read Only )</label>
                    <input type="text" name='creatorName' value={user.displayName} className="input text-gray-400 input-bordered max-w-xs ml-16" readOnly />
                </div>
                <div className="flex flex-col lg:col-span-2 mt-1 w-full max-w-xl mx-auto items-center">
                    <input type="submit" value="Add" className='btn hover:text-purple-300 border-2 border-purple-400 px-3 py-2 rounded-lg bg-purple-100 font-bold text-center text-xl mb-5 mt-10 w-full' />
                </div>

            </form>
        </div>
    );
};

export default AddCampains;