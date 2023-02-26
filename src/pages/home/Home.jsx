// import React from 'react'
import Featured from "../../Components/featured/Featured";
import FeaturedProperties from "../../Components/featuredProperties/FeaturedProperties";
import Footer from "../../Components/footer/Footer";
import MailList from "../../Components/mailList/MailList";
import Header from "../../Components/navbar/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import PropertyList from "../../Components/propertyList/PropertyList";
import "./home.css";
const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by Property Type</h1>
                <PropertyList />
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Home
