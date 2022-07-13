import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ComponentCard, Profile, InnerText, Tags, Video, Footer, Burron } from './HomeStyled';
import ReactPlayer from "react-player";
import { postIdFollow } from "../../../reducer/actions/actionStudents";
import { useDispatch } from "react-redux";
import { AiOutlinePlus } from 'react-icons/ai';
import { postIdFollowBuss } from "../../../reducer/actions/actionBusiness";
import { IoLocationSharp } from 'react-icons/all';
import { postularse } from "../../../reducer/actions/actionStudents";
import { ErrorDiv } from "./HomeStyled";



export default function CardPublicationWorkTest({ id, image, name, date, title, summary, video, technologies, backFront, country, workModality, english, userName, lastname, text, userTypes, publicacionID }) {
    // viene publicacion de empresas y alumnos mix



    // console.log(summary)
    const dispatch = useDispatch();

    const tal = localStorage.getItem('TK')
    const userType = JSON.parse(tal);
    const [cartel, setCartel] = useState(false)


    const handleFollow = () => {
        if (userType.type === 1 || userType.type === 2) {
            dispatch(postIdFollow(id, { id: userType.id }));
        }
        if (userType.type === 4 || userType.type === 5) {
            dispatch(postIdFollowBuss(id, { id: userType.id }));
        }
    }

    const [setear, setSetear] = useState(false);

    const handlePostulation = () => {
        let pubId = publicacionID;
        let obj = {
            userId: userType.id,
            name: userType.name + " " + userType.lastname,
            step: "pendiente",
            showBusiness: true,
        };
        if (setear) {
            dispatch(postularse(obj, pubId))
            setCartel(true);
            setSetear(false)
            setTimeout(()=>{
                setCartel(false)
            },4000)
        }
        else {
            setSetear(true)
        }

    };




    const Date = date.substr(0, 9);

    return (
        <ComponentCard>

            <Profile>
                <div className="compPer">
                    <div className="Image">
                        <img src={image} />
                    </div>
                    <div className="namub">
                        {
                            userTypes === 5 ?
                                <Link to={`/profile/${id}`}>
                                    <h3>{name}</h3>
                                </Link>
                                :
                                <Link to={`/profile/${id}`}>
                                    <h3>{name + ' ' + lastname}</h3>
                                </Link>
                        }
                        <div className="ub">
                            <IoLocationSharp className="ubic" />
                            <p>{country}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="Date">{Date}</p>
                </div>
            </Profile>

            <InnerText>
                <div>
                    <p>{text}</p>
                </div>
            </InnerText>


            {technologies.length > 2 ?
                <Tags>
                    {
                        technologies.map(el => (<div className="tech"><p>{el}</p></div>))
                    }
                </Tags>
                : null
            }

            {english || workModality || backFront ?
                <Tags>
                    {
                        english ?
                            <div className="tech"><p>{english}</p></div>
                            : null
                    }
                    {
                        workModality ?
                            <div className="tech"><p>{workModality}</p></div>
                            : null
                    }
                    {
                        backFront ?
                            <div className="tech"><p>{backFront}</p></div>
                            : null
                    }
                </Tags>
                : null
            }
            {
                video ?
                    <Video>
                        <ReactPlayer
                            url={video}
                            className='video'
                            playing={false}
                            width={'100%'}
                            height={'100%'}
                            volume={null}
                        />
                    </Video>
                    : null
            }
            

           

            {
                userTypes === 1 || userTypes === 2 ? null :

                    userType.type === 4 || userType.type === 5 ? null :

               
                   

                        <Burron>
                            
                            <button onClick={handlePostulation}>{ !setear? 'Postularse' : 'Si'}</button>

                            { 
                            
                                cartel &&
                                
                                <span>Postulación enviada con éxito 🥳🥳</span>

                            }
                        </Burron>

            }

{
                        !setear ? null : <ErrorDiv>¿Seguro que quieres postularte? 🤔 🤔 </ErrorDiv>
                    }


            <Footer>

            </Footer>
        </ComponentCard>
    )
}