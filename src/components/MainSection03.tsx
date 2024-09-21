import React, {useEffect, useState} from "react";
import '../assets/styles/mainsection03.css'
import Profile from "../components/profile/Profile";

const MainSection03: React.FC = () => {
  return (
    <>
        <div className='main-section-container'>
            <div className='main-section-text'>

                <div className='main-section-text-title'>
                    홈 · 소비
                </div>

                <div>
                    내 돈 관리, <br/>
                    지출부터 일정까지 <br/>
                    똑똑하게 <br/>
                </div>
            </div>

            <div className="css-ymgzel e1prhvo14">
                <div className="cs-lock-out">
                    <img
                        src="https://static.toss.im/assets/homepage/newtossim/home_screen_1.png"
                        alt=""
                        className="css-screen"
                    />
                    <img
                        src="https://static.toss.im/assets/homepage/newtossim/iPhone15_Clay_Shadow_03.png"
                        alt=""
                        className="css-screen-01"
                    />
                </div>
                {/*<div className="e1prhvo12 css-1vbwp3e ey5meut2">*/}
                {/*    <img*/}
                {/*        src="https://static.toss.im/assets/homepage/newtossim/home_screen_2.png"*/}
                {/*        alt=""*/}
                {/*        className="css-screen"*/}
                {/*    />*/}
                {/*    <img*/}
                {/*        src="https://static.toss.im/assets/homepage/newtossim/iPhone15_Clay_Shadow_03.png"*/}
                {/*        alt=""*/}
                {/*        className="css-screen-02"*/}
                {/*    />*/}
                {/*</div>*/}
            </div>

        </div>
    </>
  )
};

export default MainSection03;



