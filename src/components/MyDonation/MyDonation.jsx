import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyDonation = () => {
    const loadedDonationList = useLoaderData();
    const [myDonation, setMyDonation] =loadedDonationList;

    return (
        <div>
            <h1>My donation Post: {loadedDonationList.length}</h1>
        </div>
    );
};

export default MyDonation;