import desktopLogo from '@/assets/img/logo/Bumyaya (5).png'
import { FiGithub } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect';


interface IProps {
    showLeftPart: boolean
    setShowLeftPart: (value: boolean) => void
}

const LeftPart = (props: IProps) => {
    const [activeTab, setActiveTab] = useState<string>("home")

    useEffect(() => {
        const { hash } = window.location
        if (hash) {
            const tab = hash.replace('#', '')
            setActiveTab(tab)
            const section = document.querySelector(`${hash}`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [])

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
            <div className={props.showLeftPart === true ? "arlo_tm_leftpart_wrap opened" : "arlo_tm_leftpart_wrap"}>
                <div className="leftpart_inner">
                    <div className="logo_wrap">
                        <a href="#"><img src={desktopLogo} alt="desktop-logo" /></a>
                    </div>
                    <div className="menu_list_wrap">
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
                    {isMobile &&
                        <a className={props.showLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"}
                            onClick={(e) => { e.preventDefault(), props.setShowLeftPart(!props.showLeftPart) }} href="#">
                            <i className={props.showLeftPart ? "xcon-angle-left opened" : "xcon-angle-left"}></i>
                        </a>
                    }
                </div>
            </div>
        </>
    )
}

export default LeftPart