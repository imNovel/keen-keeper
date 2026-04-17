import React from 'react';
import Banner from '../../components/homepage/banner';
import FriendsSection from '../../components/homepage/FriendsSection';

const HomePage = () => {
    return (
        <div className='container mx-auto'>
            <Banner />
            <FriendsSection />
        </div>
    );
};

export default HomePage;