import React, {useEffect, useState} from "react";
import '../assets/styles.css'
import Profile from "../components/profile/Profile";
import MainSection03 from "../components/MainSection03";
const Navigation: React.FC = () => {
    const [isBlinking, setIsBlinking] = useState(true);

    useEffect(() => {
        const cursorBlink = setInterval(() => {
            setIsBlinking((prev) => !prev);
        }, 1000); // 500ms마다 커서 상태를 반전

        // 컴포넌트가 언마운트 될 때 애니메이션을 정리
        return () => clearInterval(cursorBlink);
    }, []);

    // 클릭 시 페이지를 100vh 아래로 스크롤
    const handleClick = () => {
        window.scrollTo({
            top: window.innerHeight, // 100vh 아래로 스크롤
            behavior: 'smooth', // 부드럽게 스크롤
        });
    };

    return (
        <>
            <div className="home-container">
                {/*<img src="/assets/images/see.jpg" alt="바다" />*/}
                <div className="home-content">
                    Frontend의 모든것 <br/>
                    저와 재미있게
                    <div className="move-icon">
                        <button className="button-custom"> App Store</button>
                        <button className="button-custom"> Google Play</button>
                    </div>
                </div>


                <div
                    style={{
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        cursor: 'pointer',
                    }}
                    onClick={handleClick}
                >
                    <div style={{display: 'flex', alignItems: 'center', transform: 'rotate(90deg)'}}>
                        <span style={{visibility: isBlinking ? 'visible' : 'hidden'}}>
                          <i className="bi bi-chevron-compact-right"></i>
                        </span>
                    </div>
                </div>

            </div>

            <Profile/>

            <MainSection03 />
        </>
    );
};

export default Navigation;