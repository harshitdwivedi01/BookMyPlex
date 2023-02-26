import './featured.css';

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://r-xx.bstatic.com/xdata/images/city/250x250/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>New Delhi</h1>
                    <h2>2914 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://r-xx.bstatic.com/xdata/images/city/250x250/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Mumbai</h1>
                    <h2>1650 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://q-xx.bstatic.com/xdata/images/city/250x250/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Bangalore</h1>
                    <h2>2041 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured
