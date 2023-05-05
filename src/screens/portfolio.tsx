import LeftPart from "../components/left_part"
import MobileMenu from "../components/mobile/menu"
import PreLoader from "../components/preloader"
import RightPart from "../components/right_part"
import { FloatButton } from 'antd';
import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect';

const Portfolio = () => {
    const [showLeftPart, setShowLeftPart] = useState<boolean>(true)

    useEffect(() => {
        if (isMobile) {
            setShowLeftPart(false)
        }
    }, [])
    return (
        <div className="arlo_tm_wrapper_all">

            <div id="arlo_tm_popup_blog">
                <div className="container">
                    <div className="inner_popup scrollable"></div>
                </div>
                <span className="close"><a href="#"></a></span>
            </div>

            {/* <!-- PRELOADER --> */}
            <PreLoader />
            {/* <!-- /PRELOADER --> */}

            {/* <!-- MOBILE MENU --> */}
            <MobileMenu />
            {/* <!-- /MOBILE MENU --> */}

            {/* <!-- CONTENT --> */}
            <div className="arlo_tm_content">

                {/* <!-- LEFTPART --> */}
                <LeftPart
                    showLeftPart={showLeftPart}
                    setShowLeftPart={setShowLeftPart} />
                {/* <!-- /LEFTPART --> */}

                {/* <!-- RIGHTPART --> */}
                <RightPart
                    showLeftPart={showLeftPart}
                    setShowLeftPart={setShowLeftPart} />
                {/* <!-- /RIGHTPART --> */}

                {/* <a className="arlo_tm_totop" href="#"></a> */}
                <FloatButton.BackTop
                    tooltip={<div>Scroll to Top</div>}
                />
            </div>
        </div>
    )
}

export default Portfolio