import imgMobile from '@/assets/img/logo/mobile_logo.png'
import { useState } from 'react'

const MobileMenu = () => {
    const [activeTab, setActiveTab] = useState<string>("home")
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const style = {
        overflow: "hidden",
        display: isOpen ? 'block' : 'none',
        transition: "2s"
    };

    const handleClickTab = (tab: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        setActiveTab(tab)
        const section = document.querySelector(`#${tab}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
                window.location.hash = tab
            }, 1000)
        }
    }
    return (
        <>
            <div className="arlo_tm_mobile_header_wrap">
                <div className="main_wrap">
                    <div className="logo">
                        <a href="index.html"><img src={imgMobile} alt="mobile_logo" /></a>
                    </div>
                    <div className="arlo_tm_trigger">
                        <div
                            className={isOpen ?
                                "hamburger hamburger--collapse-r is-active"
                                : "hamburger hamburger--collapse-r"}>
                            <div className="hamburger-box">
                                <div className="hamburger-inner" onClick={() => { setIsOpen(prev => !prev) }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arlo_tm_mobile_menu_wrap" style={style}>
                    <div className="mob_menu">
                        <ul className="anchor_nav">
                            <li>
                                <a
                                    onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('home', e)}
                                    href="#home"
                                    className={activeTab === 'home' ? "active" : ""}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('about', e)}
                                    href="#about"
                                    className={activeTab === 'about' ? "active" : ""}>
                                    About
                                </a>
                            </li>
                            <li>
                                <a onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('skill', e)}
                                    href="#skill" className={activeTab === 'skill' ? "active" : ""}>
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('project', e)}
                                    href="#project" className={activeTab === 'project' ? "active" : ""}>
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickTab('contact', e)}
                                    href="#contact"
                                    className={activeTab === 'contact' ? "active" : ""}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileMenu