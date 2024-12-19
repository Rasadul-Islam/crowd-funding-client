import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import CampaignCard from '../campaignCard/campaignCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const partners = [
        {
            "id": 1,
            "name": "Grameen Bank",
            "logo": "https://i.ibb.co.com/rxhLN1X/grameen-13893-portrait-medium.jpg"
        },
        {
            "id": 2,
            "name": "BRAC",
            "logo": "https://i.ibb.co.com/5KTnGBn/images-q-tbn-ANd9-Gc-SGk-REod-Krxo-M8-Nn-Jy1-Y3-BJd0-X6f-A3-PEEUy-Fg-s.png"
        },
        {
            "id": 3,
            "name": "Bangladesh Red Crescent Society",
            "logo": "https://i.ibb.co.com/HNVGcXK/images-q-tbn-ANd9-Gc-Rn-WEe-Pgqy-SC0h9-Nl-Fnfka3ecpk-EIZ8v-QLA-s.png"
        },
        {
            "id": 4,
            "name": "JAAGO Foundation",
            "logo": "https://i.ibb.co.com/hL5ng83/jaago-foundation.jpg"
        },
        {
            "id": 5,
            "name": "Startup Bangladesh Limited",
            "logo": "https://i.ibb.co.com/WxKZV63/1630669883052-e-2147483647-v-beta-t-Rj-S26-H-3r9n12rlus-C02-D94-Z-vgay-Tl-RSr0u-Da-Lnml4.jpg"
        },
        {
            "id": 6,
            "name": "Robi Axiata Limited",
            "logo": "https://i.ibb.co.com/H4CGkn3/images-q-tbn-ANd9-Gc-Sh-B-9f-KPENE9q-OFAe-YLn-2je-Gl-X2-Zrs-PCl-Nw-s.jpg"
        },
        {
            "id": 7,
            "name": "Bashundhara Group",
            "logo": "https://i.ibb.co.com/FD18j89/images-q-tbn-ANd9-Gc-T-Zjvi-UDpti-VQI7q-IDOr-DIo-Fv-V0-Z0w-W9gs7g-s.png"
        },
        {
            "id": 8,
            "name": "United Commercial Bank (UCB)",
            "logo": "https://i.ibb.co.com/KFsLZp8/images-q-tbn-ANd9-Gc-TUbc-BSSHJHOWGB6o-ACBBtb-xk-Yv-XKZn-ZYV7-A-s.png"
        },
        {
            "id": 9,
            "name": "Shikho",
            "logo": "https://i.ibb.co.com/8zhYmDL/651548cae8ac3849400a0da0-Shikho-Logo-02-01-removebg-preview.png"
        },
        {
            "id": 10,
            "name": "Pathao",
            "logo": "https://i.ibb.co.com/D9dLX2R/images-q-tbn-ANd9-Gc-QDYA0mh-FNAfz-FTKy-Lkw-Un-t8o-Dva-W-g-T-R2-Q-s.png"
        }
    ]
    const loadedcampaigns = useLoaderData();
    const [campaigns,setCampaigns]=useState(loadedcampaigns);

    return (
        <div className='container mx-auto mb-10'>
            <Banner></Banner>
            {/* Running Campaign */}
            <div className='my-10 flex flex-col items-center'>
                <div className='font-bold text-2xl mb-10'>All campaign count: {campaigns.length}</div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                    {campaigns.map(campaign =><CampaignCard key={campaign._id} campaign={campaign}
                    campaigns={campaigns}
                    setCampaigns={setCampaigns}
                    ></CampaignCard>)}
                </div>
                
            </div>
            {/* How it Work Section */}
            <div className='bg-gradient-to-b from-purple-200 to-white p-5 rounded-xl mt-20'>
                <div className='text-center'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>How It Works Section:</h1>
                    <p className='text-gray-500 text-base md:text-lg my-5 max-w-3xl mx-auto'>Create a campaign, share it with your network, and support causes you care about. Raise funds for personal needs, creative projects, or startups, and make a difference in the world!</p>
                </div>
                <div>
                    <h1 className='text-xl md:text-2xl font-semibold text-left pt-5'>1. Create Your Campaign</h1>
                    <p className='mt-5 text-gray-500 text-base md:text-lg ml-8'>Simply sign up and set up your campaign! Whether you're raising funds for personal needs, a creative project, or a startup, just provide a title, description, and set your fundraising goal.</p>
                </div>
                <div>
                    <h1 className='text-xl md:text-2xl font-semibold text-left pt-5'>2. Share with Your Network</h1>
                    <p className='mt-5 text-gray-500 text-base md:text-lg ml-8'>Once your campaign is live, share it with your friends, family, and supporters. Use social media or email to spread the word and invite others to contribute..</p>
                </div>
                <div>
                    <h1 className='text-xl md:text-2xl font-semibold text-left pt-5'>3. Support the Causes You Care About</h1>
                    <p className='mt-5 text-gray-500 text-base md:text-lg ml-8'>Browse active campaigns and choose the ones you want to support. Whether it’s making a donation or sharing a campaign, you’re helping build a better tomorrow!</p>
                </div>
            </div>
            {/* Patner Section */}
            <div className='my-10'>
                <div className='text-center'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-purple-400'>PullUp Partners</h1>
                    <p className='text-gray-500 text-base md:text-lg my-5'>Our partners are key collaborators who share PullUp's vision of empowering impactful projects. They contribute expertise, resources, and support to help campaigns thrive. Together, we amplify change, foster innovation, and inspire action to build a better tomorrow. Explore their contributions and join us in creating lasting community-driven impact.</p>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center'>
                    {partners.map((partner) => (
                        <div key={partner.id} className='border-2 w-32 h-32  md:w-40 md:h-40 my-5 rounded-xl flex justify-center items-center border-y-purple-400'>
                            <div className=''>
                                <img className='w-20 h-20 md:w-24 md:h-24 mx-auto rounded-xl' src={partner.logo} alt={partner.name} />
                                <h1 className='text-sm font-semibold text-center'>{partner.name}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Home;