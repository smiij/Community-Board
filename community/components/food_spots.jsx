import React from "react";
import Eateries from "./eateries";

const FoodSpots = () => {
    return (
    <>
        <div className="FoodSpot">
        </div>

        <div className="containers">
            <div className="card">
                <Eateries eaterie='Basil Viet Kitchen' img='https://lh3.googleusercontent.com/p/AF1QipMGjDMTEIybwh17W6SGCJ5Pptb0-RNZP0FBSmGZ=s680-w680-h510' description='Vietnamese'/>
                <a href="https://www.grubhub.com/restaurant/basil-viet-kitchen-4002-university-way-ne-seattle/1190549?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AJKvS9UfV7Ai_hOEwR5LXASD8tJeABtkI_ycYVhAhzylRJtzRXGQOOa7ODHx4yY32mWcF6Ljd2hNlnnw92n2jG2HjShdtAt-uQ%3D%3D">
                    <button>Visit Menu</button></a>
            </div>
            <div className="card">
                <Eateries eaterie="Aladdin's" img='https://lh3.googleusercontent.com/p/AF1QipPDmPHyvMOzIdZzJ2zoRr7ONOe-lAXj42EwP3d8=s680-w680-h510' description='Mediterranean'/>
                <a href="https://www.aladdinsgyroandgrill.com/">
                    <button>Visit Menu</button>
                </a>
            </div>

            <div className="card">
                <Eateries eaterie='The BoB' img='https://lh3.googleusercontent.com/p/AF1QipNl3BL3P2ojDlVHNM8ZtkM8wnKLQYNag_0fbRk=s680-w680-h510' description='Korean'/>
                <a href="https://the-bob-seattle.webflow.io/menu">
                    <button>Visit Menu</button>
                </a>
            </div>
            <div className="card">
                <Eateries eaterie='Shultzys Bar & Grill' img='https://lh3.googleusercontent.com/p/AF1QipNGgCLBCmdLyWP76_11oEFu-au-gpOt1N5yuSlg=s680-w680-h510' description='Bar & Grill'/>
                <a href="https://shultzys.toast.site/order">
                    <button>Visit Menu</button>
                </a>
            </div>
            <div className="card">
                <Eateries eaterie='Chilis' img='https://lh3.googleusercontent.com/p/AF1QipMbWK6eWkLHjfl7Yclp5V4DUgz0liELZx3eTCWy=s680-w680-h510' description='South Indian'/>
                <a href="https://order.online/store/chili's-south-indian-cuisine-seattle-1424853/?hideModal=true&pickup=true&redirected=true">
                    <button>Visit Menu</button>
                </a>
            </div>
            <div className="card">
                <Eateries eaterie='Memos' img='https://lh3.googleusercontent.com/p/AF1QipPPkcRgrYYJSugRN7JyGw95AREFMGiqDS70_2N2=s680-w680-h510' description='Mexican'/>
                <a href="https://memosmexicanrestaurantwa.com/memos-mexican-restaurant/menu/4743-University-Way-NE/">
                    <button>Visit Menu</button>
                </a>
            </div>
            <div className="card">
                <Eateries eaterie='Just Poke' img='https://lh3.googleusercontent.com/p/AF1QipMd-fZLdOf4m-d1EFVGBMxmMjNWwN0EDEx9A2O2=s680-w680-h510' description='Japanese'/>
                <a href="https://justpoke.com/menu/">
                    <button>Visit Menu</button>
                </a>
            </div>
            <div className="card">
                <Eateries eaterie="Taste of Xi'an" img='https://lh3.googleusercontent.com/p/AF1QipNFFa0xYAGO0wW91XFLKHC464ndvOxghUJRlRJe=s680-w680-h510' description='Chinese'/>
                <a href="https://www.ordertogo.com/restaurants/nuodleuw/mesh">
                    <button>Visit Menu</button>
                </a>
            </div>
            <div className="card">
                <Eateries eaterie='Sumo Express Sushi' img='https://lh3.googleusercontent.com/p/AF1QipOYU0KB0hcr6a7bEcAWxCroomb0J45iKlKtJdA1=s680-w680-h510' description='Japanese'/>
                <a href="https://www.sumoexpresssushiuniversityway.com/a6xau4s9/sumo-express-sushi--university-way-seattle-98105/order-online#menu">
                    <button>Visit Menu</button>
                </a>
            </div>
            <div className="card">
            <Eateries eaterie='Thai Tom' img='https://lh3.googleusercontent.com/p/AF1QipO5_lIvWfGv6j5RlPMLMyO3QNGwLLujCrpvzSqo=s680-w680-h510' description='Thai'/>
                <a href="https://thaitomseattle.com/menu">
                    <button>Visit Menu</button>
                </a>
            </div>
        </div>
    </>
    );
}

export default FoodSpots;