import { Button, Modal } from 'antd';
import { useState } from 'react';
import { BiBookBookmark } from 'react-icons/bi'
import { BsArrowReturnRight } from 'react-icons/bs'
import { RiQuestionAnswerFill } from 'react-icons/ri'
import { AiOutlineShoppingCart } from 'react-icons/ai'

interface IProject {
    image: JSX.Element;
    title: string;
    shortDescription: string;
    detail: {
        description: string;
        frontend: string;
        backend: string;
        member: number;
        role: string;
        demo: string;
        github: string;
    }
}

const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [dataDetail, setDataDetail] = useState<IProject | null>(null);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const dataProjects: IProject[] = [
        {
            image: <BiBookBookmark
                size={"50"}
                color={'green'}
            />,
            title: "Online Debt Book",
            shortDescription: "Help people can manage their debt more handy dandy!",
            detail: {
                description: "Self management the own or the debt in the era 4.0",//Miêu tả dự án làm gì
                frontend: "HTML / CSS / JavaScript",
                backend: "Java Servlet / Apache Tomcat / MySQLServer",
                member: 5,
                role: "Leader, Tester, Developer",
                demo: "",
                github: "https://gitlab.com/maitranhuy1709/SWP_SE1640_GR3.git"
            }
        },
        {
            image: <RiQuestionAnswerFill
                size={"50"}
                color={'#933'}
            />,
            title: "Q/A Management App",
            shortDescription: "Create the app for teachers can manage quiz, and divide into their pupils",
            detail: {
                description: "Management Q/A help teachers teaching more easily",
                frontend: "HTML / CSS / JavaScript / React JS",
                backend: "Docker / DBeaver / Postman",
                member: 1,
                role: "Developer",
                demo: "",
                github: "https://github.com/TrungDung1912/QuizTest.git"
            }
        },
        {
            image: <AiOutlineShoppingCart
                size={"50"}
                color={'#433'}
            />,
            title: "Tiki Clone",
            shortDescription: "Help people can manage their debt more handy dandy!",
            detail: {
                description: "(Self management the own or the debt in the era 4.0)",//Miêu tả dự án làm gì
                frontend: "",
                backend: "",
                member: 1,
                role: "Developer",
                demo: "",
                github: ""
            }
        }
    ]

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setDataDetail(null)
    }

    return (
        <>
            <Modal title="Detail of Project"
                open={isModalOpen}
                onOk={() => handleCloseModal()}
                onCancel={() => handleCloseModal()}
                footer={null}
                maskClosable={false} >
                {dataDetail &&
                    <ul>
                        <li><b>Description</b>: {dataDetail.detail.description}</li>
                        <li><b>Frontend</b>: {dataDetail.detail.frontend}</li>
                        <li><b>Backend</b>: {dataDetail.detail.backend}</li>
                        <li><b>Member</b>: {dataDetail.detail.member}</li>
                        <li><b>Role</b>: {dataDetail.detail.role}</li>
                        <li><b>Github</b>: {dataDetail.detail.github}</li>
                    </ul>
                }
            </Modal>
            <div className="arlo_tm_section" id="project">
                <div className="arlo_tm_services_wrap">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>Amazing Projects</h3>
                            <span>Meet our amazing projects</span>
                        </div>
                        <div className="list_wrap">
                            <ul>
                                {dataProjects.map((item, index) => {
                                    return (
                                        <li>
                                            <div className="inner" title='More Details'
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    setDataDetail(item)
                                                    setIsModalOpen(true);
                                                }}>
                                                <div className="icon">
                                                    {item.image}
                                                </div>
                                                <div className="title_service">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className="text">
                                                    <p>{item.shortDescription}</p>
                                                </div>
                                                <div className='view_detail' style={{ padding: "5px 0" }}>
                                                    <span style={{ cursor: "pointer" }}>
                                                        <BsArrowReturnRight />
                                                        &nbsp;
                                                        More Detail!
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project