import './hotel.css'
import Header from '../../Components/navbar/header/Header'
import Navbar from '../../Components/navbar/Navbar'
import Footer from '../../Components/footer/Footer'
import MailList from '../../Components/mailList/MailList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBanSmoking, faCar, faClock, faCoffee, faLocationDot, faPeopleCarryBox, faPeopleGroup, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'

const Hotel = () => {
    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/374759038.jpg?k=0e3046e6e32b8b66e87023b24d598d18848e1db649bedf45e08d359bed638349&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/374514110.jpg?k=53668f6af7d4db9e4617bc9bfab83492eca1cb810fd7541db4523fef0a44bd83&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/374507918.jpg?k=be60ec4fea2c4eb637b1e7769b72f98dbc503a67f3d72ce184c8728d08b66984&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/374507905.jpg?k=b6b84407d1ffbf74514d04ac926f24b5ff1e71c9d9d47184a35c60768b91fb5c&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/374507906.jpg?k=239904a7fae2019dcdd2976662ebcd3a6aff964fc02ec6b8d41edbc3e6f8db40&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/374516296.jpg?k=2f9a5614a498bab11ae44e19cb5f2ffe3999606a7bb2a548e3badad76d3e5d69&o=&hp=1"
        }
    ]
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <button className='bookNow'>Reserve Now!</button>
                    <h1 className="hotelTitle">Hotel Royal Crowne</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span> Near Airport Gate No. 1,700079 Kolkata</span>
                    </div>
                    <span className="hotelDistance">
                        Good Location-500m from center
                    </span>
                    <span className="hotelPriceHighLight">
                        <FontAwesomeIcon icon={faCar} />
                        Book a stay over ₹ 20,935 at this property and get a free airport taxi
                    </span>
                    <div className="hotelPhotos">
                        {photos.map(photo => (
                            <div className="hotelImgWrapper">
                                <img src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <p className="hotelDesc">
                                The hotel will provide guests with air-conditioned rooms with a desk, an electric tea pot, a safety deposit box, a flat-screen TV, a terrace and a private bathroom with a shower. Guest rooms include a closet.

                                A continental breakfast is available daily at Hotel Royal Crowne.

                                Howrah Train Station is 14.2 km from the accommodation, while Esplanade Metro Station is 14.2 km away. The nearest airport is Netaji Subhash Chandra Bose International, 1 km from Hotel Royal Crowne, and the property offers a paid airport shuttle service.
                            </p>
                            <h5>Most Popular Facilities</h5>
                            <span>
                                <FontAwesomeIcon icon={faPlaneDeparture} className="icons" />
                                Airport shuttle
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faPeopleCarryBox} className="icons" />
                                Room Service
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faBanSmoking} className="icons" />
                                Non-Smoking rooms
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faPeopleGroup} className="icons" />
                                Family Rooms
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faClock} className="icons"/>
                                24-hour Front Desk
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faCoffee} className="icons" />
                                Breakfast
                            </span>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for 9 Nights Stays</h1>
                            <span>Located in Kolkata, India</span>
                            <h2><b>$112</b>(9 Nights)</h2>
                            <button className='booknow'>Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Hotel
