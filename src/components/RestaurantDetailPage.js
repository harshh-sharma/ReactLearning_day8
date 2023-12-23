import { useEffect } from "react";

const RestaurantDetailPage = () => {
    const pageDetail = async() => {
        const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2599333&lng=77.412615&restaurantId=109939&catalog_qa=undefined&submitAction=ENTER');

        const jsonResponse = await response.json();
        
        const data = jsonResponse.data;
        console.log(data);
        
    }

    useEffect(() => {
        pageDetail();
    },[]);

    return(
        <div id="full-page-container">
            <div id="page-container">
                <div id="top-section-page">
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/af33b81798b11deba338e94b7585d348"/>
                </div>
                <div id="bottom-section-page">
                    <h1>Hotel Empire</h1>
                    <span>4.3</span>
                    <p>North Indian , Birayni , south Indian</p>
                </div>
            </div>
        </div>
    );
}

export default RestaurantDetailPage ;