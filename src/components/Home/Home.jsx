import React from 'react';

const Home = () => {
    return (
        <div className='container mx-auto my-10'>
            {/* Running Campaign */}
            <div className='my-10 pb-5 border-b-2 border-purple-400'>Here Runnign Campaign</div>
            {/* How it Work Section */}
            <div>
                <div className='text-center'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-purple-400'>How It Works Section:</h1>
                    <p className='text-gray-500 text-base md:text-lg my-5'>Create a campaign, share it with your network, and support causes you care about. Raise funds for personal needs, creative projects, or startups, and make a difference in the world!</p>
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
            <div>

            </div>

        </div>
    );
};

export default Home;