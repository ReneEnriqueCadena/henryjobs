import React, { useEffect } from "react";
import { StudentProf, ProfCont, Name, DevStar, Banner, ImageProf, P, Follow, Ubicacion, Redes, Edit, Calificacion } from "../profileStyles/studentProfile";
import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { BsFillStarFill } from 'react-icons/bs'
import { SiGmail } from 'react-icons/all';
import { HiLocationMarker } from 'react-icons/all';
import { AiOutlineEdit } from 'react-icons/ai';
import { getPublicationsBusiness, postIdFollow } from "../../../reducer/actions/actionStudents";
import { getPublicationStudents, postIdFollowBuss, puntuar } from "../../../reducer/actions/actionBusiness";
import { useDispatch, useSelector } from "react-redux";


export default function StudentsProfile({ id, backFront, banner, country, curriculumCounter, allStars, email, lastName, name, profileImage, followers, following, userTypes }) {

    const dispatch = useDispatch();
    const TkId = localStorage.getItem('TK');
    const TkIdF = JSON.parse(TkId);

    const foll = useSelector((state) => state.fetchStudentsReducer.userFollows);
    const foll2 = useSelector((state) => state.fetchBusinessReducer.userFollows);

    useEffect(() => {
        if (TkIdF.type === 1 || TkIdF.type === 2) {
            dispatch(getPublicationStudents())
        }
        if (TkIdF.type === 4 || TkIdF.type === 5) {
            dispatch(getPublicationsBusiness());
        }
    }, [foll, foll2]);




    const handleFollow = () => {
        if (TkIdF.type === 1 || TkIdF.type === 2) {
            dispatch(postIdFollow(id, { id: TkIdF.id }));
        }
        if (TkIdF.type === 4 || TkIdF.type === 5) {
            dispatch(postIdFollowBuss(id, { id: TkIdF.id }));
        }
    }

    const handleStar = (e, id) => {
        const studentId = id;
        const value = e.target.value;
        const miId = TkIdF.id;

        let obj = {
            userId: miId,
            numero: value
        };

        dispatch(puntuar([obj, studentId]))
        console.log(value, id);
    };

    return (
        <StudentProf>


            <ProfCont>

                {
                    id == TkIdF.id ? (<Edit>
                        <Link to={`/EditProfile/${id}`}>
                            <AiOutlineEdit className="edit" />
                        </Link>
                    </Edit>)
                        : null
                }

                <Banner>
                    <img src={banner} alt='banner' />
                </Banner>
                <ImageProf>
                    <img src={profileImage} alt='profile' />
                </ImageProf>
                <Name>
                    <h2>{name + ' ' + lastName}</h2>
                </Name>

                {

                }
                {
                    (TkIdF.type === 4 || TkIdF.type === 5) && id !== TkIdF.id && userTypes !== 4 && userTypes !== 5 && TkIdF.premium === true ?

                        <Calificacion >
                            <div class="valoracion" >
                                <input onClick={(e) => handleStar(e, id)} id="radio1" type="radio" name="estrellas" value="5" />
                                <label htmlFor="radio1">★</label>
                                <input onClick={(e) => handleStar(e, id)} id="radio2" type="radio" name="estrellas" value="4" />
                                <label htmlFor="radio2">★</label>
                                <input onClick={(e) => handleStar(e, id)} id="radio3" type="radio" name="estrellas" value="3" />
                                <label htmlFor="radio3">★</label>
                                <input onClick={(e) => handleStar(e, id)} id="radio4" type="radio" name="estrellas" value="2" />
                                <label htmlFor="radio4">★</label>
                                <input onClick={(e) => handleStar(e, id)} id="radio5" type="radio" name="estrellas" value="1" />
                                <label htmlFor="radio5">★</label>
                            </div>
                        </Calificacion>

                        : null
                }

                <Ubicacion>
                    <HiLocationMarker className="location" />
                    <p>{country}</p>
                </Ubicacion>
                <P>
                    <div className="cont">
                        <p>Seguidores</p>
                        <p>{followers.length}</p>
                    </div>
                    <div className="cont">                    <p>Seguidos</p>
                        <p>{following.length}</p>
                    </div>

                </P>


                <Redes>
                    <div >
                        <BsGithub className="gh" />
                    </div>
                    <div>
                        <BsLinkedin className="ln" />
                    </div>
                    <div>
                        <SiGmail href={email} className="mail" />
                    </div>
                </Redes>

                {console.log(userTypes)}
                {userTypes === 1 || userTypes === 2 ?
                    <DevStar>
                        <p className="Si">{backFront}</p>
                        <p className="Si" id="cent"><BsFillStarFill className="star" />{allStars}</p>
                    </DevStar>
                    : null
                }

                {/* {userTypes === 1 ? (<p id="cent">PG</p>) : userTypes === 2 ? (<p id="cent">Graduado</p>)
                            : null} */}

                {
                    id == TkIdF.id ?
                        null
                        :
                        <Follow>
                            <button onClick={() => handleFollow()}>
                                {
                                    TkIdF.type === 1 || TkIdF.type === 2 ?
                                        foll.includes(id) ? <p>Unfollow</p> : <p>Follow</p>
                                        : foll2.includes(id) ? <p>Unfollow</p> : <p>Follow</p>
                                }
                            </button>
                        </Follow>

                }


            </ProfCont>

        </StudentProf>
    )
}