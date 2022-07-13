import axios from "axios";
import React, { useEffect, useState } from "react";
import { countries } from "../Register_form/gistfile1.json";
import { technologies } from "../Post/StudentsWall/select";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { EditProfile, newGetInfoUser, reiniciarPerfil } from "../../reducer/actions/actionPost";
import { InnerModal, EditCloseButton, Fotos, NameLast, RedesEdit, Cont2, SelectorCou, Foto1, Foto2, TecOther, AboutAs, Eng } from "./profileStyles/EditModal";

import { MdOutlineInsertPhoto } from "react-icons/all";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/all";
import { MdAddAPhoto } from "react-icons/all";
import { ContenedorMaximo } from "./Students/editperfill";

export default function InnModal() {
    const [fileInputState, setFileInputState] = useState("")
    const [fileInputStateBanner, setFileInputStateBanner] = useState("")
    const [profileImage, setProfileImage] = useState("")
    const [bannerImage, setBannerImage] = useState("")
    const [selectedFile, setSelectedFile] = useState("")

      // fileInputChange para el profileImage
  function handleFileInputChange(e) {
    const file = e.target.files[0]
    previewFile(file)
  };

  // fileInputChange para el banner
  function handleFileInputChangeBanner(e) {
    const file = e.target.files[0]
    previewFileBanner(file)
  }
  

  // previewFile para profileImage
  function previewFile(file) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setProfileImage(reader.result) // setea profileImage con la imagen en base64 (el string esterno)
    };
  };

  // previewFile para el banner
  function previewFileBanner(file) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setBannerImage(reader.result)
    };
  };

  // handle para subir profileImage
  async function handleSubmitProfileImage(e) {
    e.preventDefault()
    if (!profileImage) return
    try {
        const response = await axios.post(`http://localhost:3002/api/upload`, {
            profileImage: profileImage 
        });
        setObjeto({
            ...objeto,
            profileImage: {
                secure_url: response.data.secure_url
            }
        })
    } catch (error) {
        console.error(error)
    };
  }

  // handle para subir banner -> LO COMENTO POR EL MOMENTO PARA PROBAR
  async function handleSubmitBanner(e) {
    e.preventDefault()
    if (!profileImage) return
    try {
        const response = await axios.post(`http://localhost:3001/api/upload/`, {
            banner: bannerImage 
        });
        setObjeto({
            ...objeto,
            banner: {
                secure_url: response.data.secure_url
            }
        })
    } catch (error) {
        console.error(error)
    };
  }
  

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const infoUser = useSelector(state => state.fetchPostReducer.newInfo);
  const [ objeto, setObjeto ] = useState({});

  useEffect(() => {
    dispatch(newGetInfoUser(id));
  }, []);

  useEffect(() => {
    setObjeto(infoUser);
  }, [infoUser]);


  /////////////////////////////////////////// TECH ///////////////////////////////////////////////////////////////////

  function handleChangeTech(e) {
    e.preventDefault();
    if (objeto.technologies.includes(e.target.value)) {
      return;
    } else {
      setObjeto({
        ...objeto,
        technologies: [...objeto.technologies, e.target.value],
      });
    }
  };

  function onCloseTech(value) {
    setObjeto({
      ...objeto,
      technologies: [...objeto.technologies.filter((el) => el !== value)],
    });
  };

  /////////////////////////////////////////// TECH ///////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////COUNTRY//////////////////////////////////////////////////////////////////

  const [country, setCountry] = useState({
    country: "",
    city: "",
  });

  const [allCities, setAllCities] = useState([]);

  const countrySelect = (e) => {
    // cada vez que se seleccione un pais, se selecciona un pais y la ciudad en blanco
    // porque si no se limpia la ciudad el estado podria quedar "Argentina, Manchester"
    let pais = e.target.value;
    if (pais === "Selecciona un País") {
      return setCountry({ ...country, country: "", city: "" });
    } else if (pais === country.country) {
      return;
    } else {
      setObjeto({ ...objeto, country: e.target.value, city: "" });
      setCountry({ ...country, country: e.target.value, city: "" });
      setAllCities(countries.find((el) => el.country === pais).states); // aca se guardan las provincias y estados
    } // según el país seleccionado
  };

  const citySelect = (e) => {
    if (e.target.value === "Selecciona una provincia/estado") {
      setCountry({ ...country, city: "" });
      return;
    } else {
      setCountry({ ...country, city: e.target.value });
      setObjeto({ ...objeto, city: e.target.value });
    }
  };

  ////////////////////////////////////////////////COUNTRY//////////////////////////////////////////////////////

  const [ inputStudy, setInputStudy ] = useState("");

  const agregarEstudio = () => {
    setObjeto({...objeto, otherStudies:[objeto.otherStudies, inputStudy]});
};

const borrarEstudio = (value) => {
      setObjeto({...objeto, otherStudies: objeto.otherStudies.filter(e => e !== value)});
  };

  ////////////////////////////////////////// SUBMIT //////////////////////////////////////////////////////////
  
  const handleSubmit = () => {
    dispatch(reiniciarPerfil())
    dispatch(EditProfile({ id, objeto }));
    navigate(`/profile/${id}`);
  };

  return (
      <InnerModal>
        <EditCloseButton>
        <Link to={`/profile/${id}`}>
          <button>X</button>
        </Link>
      </EditCloseButton>
           

            <Fotos>
                <div className="cont">
                  <h3>Foto de perfil:</h3>
                  <div className="inner">
                    {/* <Foto1>
                      <MdAddAPhoto className="ph" />
                    </Foto1> */}
                    {profileImage ? (
                      <img src={profileImage} />
                    ) : (
                      <MdOutlineInsertPhoto className="puto" />
                    )}
                    <input type="file" name="profileImage" value={fileInputState} onChange={handleFileInputChange} />
                  </div>
                    <button type="submit" onClick={handleSubmitProfileImage}>add photo</button>
          
                  {/* <textarea value={input} onChange={(e)=>handlePicture(e)} placeholder="url perfil"/> */}
                </div>
          
                <div className="cont">
                  <h3>Foto del Banner:</h3>
                  {/* <Foto2>
                    <MdAddAPhoto className="ph" />
                  </Foto2> */}
                  <div className="inner">
                    {bannerImage ? (
                      <img src={bannerImage} />
                    ) : (
                      <MdOutlineInsertPhoto className="puto" />
                    )}
                    <input type="file" value={fileInputStateBanner} name="banner" onChange={handleFileInputChangeBanner} />
                  </div>
                    <button type="submit" onClick={handleSubmitBanner}>add photo</button>
                  {/* <textarea value={inputd} onInput={(e)=>handleBanner(e)} placeholder="Send nudes"/> */}
                </div>
          
                {/* <div>
                  <button type="submit" onClick={handleSubmit}>Guardar</button>
                </div> */}
              </Fotos>
    {/* //////////////////////////////////////////////////NAME////////////////////////////////////////////////////// */}
    
    <Cont2>
    <h2>Editar perfil:</h2>
      <NameLast>
              <div>
            <label>Nombre</label>
            <input value={objeto.name} onChange={(e) => setObjeto({...objeto, name: e.target.value})} />
            </div>

            <div>
            <label>Apellido</label>
            <input value={objeto.lastName} onChange={(e) => setObjeto({...objeto, lastName: e.target.value})}/>
            </div>
    </NameLast>

    {/* ////////////////////////////////////////////// COUNTRY & CITY //////////////////////////////////////////// */}
    <SelectorCou>
        

        <h3>¿De dónde eres?</h3>
        <div className="lado">
          
          <select onClick={(e) => countrySelect(e)}>
            <option>Selecciona un País</option>
            {countries &&
              countries.map((e) => {
                return <option>{e.country}</option>;
              })}
          </select>
        </div>

        {allCities && (
            <div className="lado">
            
            <select onClick={(e) => citySelect(e)}>
              <option>Selecciona una provincia/estado</option>
              {allCities.map((e) => {
                return <option>{e}</option>;
              })}
            </select>
          </div>
        )}

      

    </SelectorCou>
    {/* //////////////////////////////////////////////////////// TECH ////////////////////////////////////////////// */}

      <TecOther>
        <h3>Tecnologias:</h3>
      
        <select
          name="technologies"
          placeholder="Tecnologias"
          type="text"
          onChange={(e) => handleChangeTech(e)}
          value={objeto.technologies}
          >
          <option>Seleccionar Tecnologías</option>
          {technologies.map((e) => (
              <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
          <div className="contB">
        {objeto.technologies &&
          objeto.technologies.map((e) => (
            <div className="buttClose" key={e}>
              <p>{e}</p>
              <button  onClick={() => onCloseTech(e)}>X</button>
            </div>
          ))}
          </div>
    </TecOther>

    {/* ///////////////////////////////////////////////// INGLÉS ////////////////////////////////////////////////////////// */}

        <Eng>
            <h3>Seleccionar nivel de ingles:</h3>
            <select onChange={(e) => setObjeto({...objeto, languages: e.target.value})}>
                <option value={"A0"}>A0</option>
                <option value={"A1"}>A1</option>
                <option value={"A2"}>A2</option>
                <option value={"B1"}>B1</option>
                <option value={"B2"}>B2</option>
                <option value={"C1"}>C1</option>
                <option value={"C2"}>C2</option>
            </select>
        </Eng>

    {/* //////////////////////////////////////////////////////// OTHER STUDIES //////////////////////////////////////////////// */}

        <TecOther>
          
            <h3>Agregar otros estudios:</h3>
            
            
            <div className="st">
            <input value={inputStudy} onChange={(e) => setInputStudy(e.target.value)} placeholder="ingresa tus estudios"/>
            <button onClick={agregarEstudio}>Agregar estudio</button>
            </div>
            <div className="contB">
            {objeto.otherStudies && objeto.otherStudies.map(e => <div className="buttClose" ><p>{e}</p><button onClick={() => borrarEstudio(e)}>X</button></div>)}
            </div>
            
        </TecOther>

    {/* //////////////////////////////////////////////////////// GITHUB, LINKEDIN, GMAIL ////////////////////////////////////////// */}

    <RedesEdit>
        <input value={objeto.gmail}  onChange={(e) => setObjeto({...objeto, gmail: e.target.value})} placeholder="gmail"/>
        <input value={objeto.linkedin}  onChange={(e) => setObjeto({...objeto, linkedin: e.target.value})} placeholder="linkedin"/>
        <input value={objeto.github}  onChange={(e) => setObjeto({...objeto, github: e.target.value})} placeholder="github"/>
    </RedesEdit>

    {/* /////////////////////////////////////////// ACERCA DE ////////////////////////////////////////////////////////////// */}

    <AboutAs>
        <h3>Acerca de:</h3>
        <input type="text" onChange placeholder="acerca de" name="acercaDe"/>
    </AboutAs>

    <div>
        <button onClick={handleSubmit}>Guardar</button>
    </div>
    </Cont2>
    </InnerModal>
  );
};
