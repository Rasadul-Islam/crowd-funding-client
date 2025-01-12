import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateFund = () => {
    const campaignData = useLoaderData();
    const {_id, title, image, campaign_type, description, donation_amount, deadline, creatorName, creatorEmail } = campaignData;
    const Navigate = useNavigate();

    const handleUpdateCampaign= event=>{
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const title = form.title.value;
        const campaign_type = form.campaign_type.value;
        const description = form.description.value;
        const donation_amount = form.donation_amount.value;
        const deadline = form.deadline.value;
       
        const updateCampaign = { image, title, campaign_type, description, donation_amount, deadline}
        // console.log(newCampaign);

        fetch(`https://crowd-server-one.vercel.app/campaign/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCampaign)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Update your campaign',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                    Navigate("/campaigns")
                }
                else {
                    Swal.fire({
                        title: 'Opps!',
                        text: 'There Is Some Problem, Try Again',
                        icon: 'error',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }

    return (
        <div className='container mx-auto flex flex-col  items-center my-5'>
            <form onSubmit={handleUpdateCampaign} className="card-body w-3/4 max-w-xl lg:max-w-5xl rounded-lg shadow-xl border-2 border-purple-200 shadow-purple-300 grid grid-cols-1 lg:grid-cols-2 gap-5">
                <h1 className='text-3xl md:col-span-2 font-bold text-center text-purple-400 mt-1'>Update: {title}</h1>
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">Image :</label>
                    <input type="url" name='image' defaultValue={image} className="input input-bordered max-w-xs ml-16" />
                </div>
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">Title :</label>
                    <input type="text" name='title' defaultValue={title} className="input input-bordered max-w-xs ml-16"/>
                </div>
                <div className="flex flex-col mt-1">
                    <label className="label text-xl ">Campaign type :</label>
                    <select name='campaign_type' defaultValue={campaign_type} className="select select-bordered max-w-xs ml-16">
                        <option>Campaign Reason</option>
                        <option>Personal Issue</option>
                        <option>Startup</option>
                        <option>Business</option>
                        <option>Creative ideas</option>
                    </select>
                </div>
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">Description :</label>
                    <textarea name='description' defaultValue={description} className="textarea textarea-bordered max-w-xs ml-16" placeholder="Description"></textarea>
                </div>
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">Donation Amount :</label>
                    <input type="number" defaultValue={donation_amount} name='donation_amount' placeholder=" $ Donation Amount $" className="input input-bordered max-w-xs ml-16" />
                </div>
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">Deadline :</label>
                    <input type="date" name='deadline' defaultValue={deadline} placeholder="Date" className="input input-bordered max-w-xs ml-16"  />
                </div>
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">Email : ( Read Only )</label>
                    <input type="email" name='creatorEmail' value={creatorEmail} className="input text-gray-400 input-bordered max-w-xs ml-16" readOnly />
                </div>
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">Name : ( Read Only )</label>
                    <input type="text" name='creatorName' value={creatorName} className="input text-gray-400 input-bordered max-w-xs ml-16" readOnly />
                </div>
                <div className="flex flex-col md:col-span-2 mt-1 w-full max-w-xl mx-auto items-center">
                    <input type="submit" value="Update" className='btn hover:text-purple-300 border-2 border-purple-400 px-3 py-2 rounded-lg bg-purple-100 font-bold text-center text-xl mb-5 mt-10 w-full max-w-52' />
                </div>

            </form>
        </div>
    );
};

export default UpdateFund;