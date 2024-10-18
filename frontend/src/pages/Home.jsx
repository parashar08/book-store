import React from 'react';
import Banner from '../components/home/Banner';
import TopSellers from '../components/home/TopSellers';
import Recommended from '../components/home/Recommended';
import News from '../components/home/News';

const Home = () => {
    return (
        <>
            <Banner />
            <TopSellers />
            <Recommended />
            <News />
        </>
    );
};

export default Home;
