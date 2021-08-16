import React from 'react';
import NavBar from "./NavBar";
import Header from './Header';
import Footer from './Footer';
import JobsSection from './JobsSection';

const HomePage = () => {
    return (
        <>
            <Header />
            {/* <FilterSection /> */}
            <JobsSection />
            <Footer />
        </>
    );
};

export default HomePage;