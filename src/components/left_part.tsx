import desktopLogo from '@/assets/img/logo/Bumyaya (5).png'
import { FiGithub } from 'react-icons/fi'

interface IProps {
    showLeftPart: boolean
    setShowLeftPart: (value: boolean) => void
}

const LeftPart = (props: IProps) => {
    return (
        <>
            <div className={props.showLeftPart === true ? "arlo_tm_leftpart_wrap opened" : "arlo_tm_leftpart_wrap"}>
                <div className="leftpart_inner">
                    <div className="logo_wrap">
                        <a href="#"><img src={desktopLogo} alt="desktop-logo" /></a>
                    </div>
                    <div className="menu_list_wrap">
                        <ul className="anchor_nav">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skill">Skills</a></li>
                            <li><a href="#project">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="leftpart_bottom">
                        <div className="social_wrap">
                            <ul>
                                <li><a style={{ marginBottom: "7px" }} href="https://www.facebook.com/dungg.trung.5/"><i className="xcon-facebook"></i></a></li>
                                <li><a href="#"><FiGithub /></a></li>
                                <li><a href="#"><i className="xcon-linkedin"></i></a></li>
                                <li><a href="#"><i className="xcon-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <a className={props.showLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"}
                        onClick={() => props.setShowLeftPart(!props.showLeftPart)} href="#">
                        <i className={props.showLeftPart ? "xcon-angle-left opened" : "xcon-angle-left"}></i></a>
                </div>
            </div>
        </>
    )
}

export default LeftPart