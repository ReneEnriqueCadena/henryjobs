import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPublicationStudents, traerFollowing } from "../../../reducer/actions/actionBusiness";
import { CardContainer, CardCont2 } from "../bussinesStyles/bussines";
import CardPublicationWorkTest from "../HomeForStudents/CardPublicationsTest";
import Loading  from '../../Loading/Loading';
import NoFollowsHome  from '../../Loading/NoFollowsHome';


export default function HomeBusinessLogic({id}) {

  const dispatch = useDispatch();
  const allPublications = useSelector((state) => state.fetchBusinessReducer.allPublications);
  const foll = useSelector((state) => state.fetchBusinessReducer.userFollows);
  const [ load, setLoad ] = useState(true);
  const ac = useSelector((state) => state.fetchPostReducer.actualHome)
    
  useEffect(() => {
    dispatch(traerFollowing(id));
  },[])

  useEffect(() => {
      dispatch(getPublicationStudents(id));
  },[foll])

  useEffect(() => {
    setTimeout(() => {
      dispatch(getPublicationStudents(id));
    }, 2000)
  },[ac])

  useEffect(() => {
    setTimeout(() => {setLoad(false)}, 2000);     
  },[])



  return (
    <CardContainer>
      
      {

      load ? <Loading/> :

      allPublications.length === 0 ? <NoFollowsHome/> :
      
      allPublications.map((e) => {
        return(
        <CardCont2>

          <CardPublicationWorkTest
             image={e.posterUser.profileImage.secure_url} // imagen de usuario
             name={e.posterUser.name}
             lastname={e.posterUser.lastName}
             date={e.date}
             title={e.proyectTittle}
             video={e.imgVideo}
             likes={e.likes}
             // comments={e.comments}
             technologies={e.technologies}
             backFront={e.backFront}
             ubication={e.country}
             workModality={e.workModality}
             english={e.posterUser.languages}
             text={e.text}
             id={e.posterUser._id}
             country={e.posterUser.country}

          
          />
        </CardCont2>
        )})}

    </CardContainer>
  );
}
