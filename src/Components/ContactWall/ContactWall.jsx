import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMyPublications } from "../../reducer/actions/actionBusiness";
import PublicationCard from "./CardPublicacionDePerfil";
import { Publicaciones } from "./ApplicantMokedFiles";
import { EmpresaContenedor } from "./Applications/applicantsStyles/empresastyles";
import NoSearchFounds from "../Loading/NoSearchFounds"
import Loading from "../Loading/Loading";

export default function ContactWall() {

  const tal = localStorage.getItem('TK')
  const userType = JSON.parse(tal);

  const actualizar = useSelector(state => state.fetchPostReducer.Change);
  const dispatch = useDispatch();
  const { id } = useParams();
  const publicactions = useSelector(state => state.fetchBusinessReducer.myPublications);

  useEffect(() => {
    dispatch(getMyPublications(id));
  }, [actualizar]);

  const [deletear, setDeletear] = useState();
  const [tim, setTime] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTime(false)
    }, 2000);
  }, [])
  // => Agregar el botón "POSTULARSE" 
  // en las publicaciones de empresas y recruiter
  // si sos estudiante.

  useEffect(() => {
    if (userType !== null) {
      if (id !== userType.id) {
        setDeletear(false);
      }
      if (id === userType.id) {
        setDeletear(true);
      }
    }
  }, [tal]);


  // ESTE COMPONENTE RENDERIZA TODAS LAS PUBLICACIONES PARA VER POSTULANTES
  return (
    <EmpresaContenedor>
      {
        tim ? <Loading/> :
        publicactions === null || publicactions === undefined || publicactions.length === 0 ?
          <NoSearchFounds />
          :
          publicactions.map(e =>
            <PublicationCard
              botonDelete={deletear}
              posterUser={e.posterUser._id}
              email={e.email}
              text={e.text}
              date={e.date}
              applicants={e.applicants}
              idPublicacion={e._id}
            />)
      }
    </EmpresaContenedor>
  );
};
