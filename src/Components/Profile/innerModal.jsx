import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { InnerModal, EditCloseButton, Fotos, NameLast, RedesEdit, Cont2, SelectorCou, Foto1, Foto2, TecOther, AboutAs } from "./profileStyles/EditModal";
import { MdOutlineInsertPhoto } from "react-icons/all";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/all";
import { MdAddAPhoto } from "react-icons/all";

import { EditProfile } from "../../reducer/actions/actionPost";


import { countries } from "../Register_form/gistfile1.json";
import { technologies } from "../Post/StudentsWall/select";


export default function InnModall(){
//nombre, banner, fotoperfil, ubicacion, github, linkedin, mail,instancia, tecnologias, otros estudios, acercaDE, favoritos

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
//   const [inputd, setInputd] = useState(""); no tenía uso

  // upload image
  const [fileInputState, setFileInputState] = useState("")
  const [fileInputStateBanner, setFileInputStateBanner] = useState("")
  const [previewSource, setPreviewSource] = useState("")
  const [previewSourceBanner, setPreviewSourceBanner] = useState("")
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
      setPreviewSource(reader.result)
    };
  };

  // previewFile para el banner
  function previewFileBanner(file) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSourceBanner(reader.result)
    };
  };

  // handle para subir profileImage
  function handleSubmitProfileImage(e) {
    e.preventDefault()
    if (!previewSource) return
    uploadImage(previewSource)
    setEditUser({
        ...editUser,
        profileImage: {
            secure_url: previewSource
        }
    })
  }

  // handle para subir banner
  function handleSubmitBanner(e) {
    e.preventDefault()
    if (!previewSourceBanner) return
    uploadBannerImage(previewSourceBanner)
    setEditUser({
        ...editUser,
        banner: {
            secure_url: previewSourceBanner
        }
    })
  }

  // upload de profileImage
  async function uploadImage(base64EncodedImage) {
    try {
        const response = await fetch(`http://henryjob.herokuapp.com/api/user/${id}`, {
            method: "PUT",
            body: JSON.stringify({ profileImage: base64EncodedImage }),
            headers: { "Content-type": "application/json" }
        })
    } catch (error) {
        console.error(error)
    };
  }; 
  
  // upload de banner
  async function uploadBannerImage(base64EncodedImage) {
    try {
        const response = await fetch(`http://henryjob.herokuapp.com/api/user/${id}`, {
            method: "PUT",
            body: JSON.stringify({ banner: base64EncodedImage }),
            headers: { "Content-type": "application/json" }
        })
    } catch (error) {
        console.error(error)
    };
  };


  const [editUser, setEditUser] = useState({
    name: "",
    lastName: "",
    technologies: [],
    country: "",
    city:"",
    email: "",
    languages: "",
    otherStudies: [],
    
    // linkedin: "",
    // github: "",
    // gmail: "",
    
    profileImage: {
        secure_url: ""
    },
    banner: {
        secure_url: ""
    },
  });

////////////////////////////////////////////////////COUNTRY//////////////////////////////////////////////////////////////////

const [ country, setCountry ] = useState({
    country: "",
    city: ""
});

const [ allCities, setAllCities ] = useState([]); 

const countrySelect = (e) => { 
    // cada vez que se seleccione un pais, se selecciona un pais y la ciudad en blanco
    // porque si no se limpia la ciudad el estado podria quedar "Argentina, Manchester"
    let pais = e.target.value
    if(pais === "Selecciona un País"){
        return setCountry({...country, country: "", city:""});
    }
    else if(pais === country.country){
        return;
    }
    else{
        setEditUser({...editUser, country: e.target.value, city: ""});
        setCountry({...country, country: e.target.value, city:""});
        setAllCities(countries.find(el => el.country === pais).states) // aca se guardan las provincias y estados                                         
    }                                                                  // según el país seleccionado
};

const citySelect = (e) => {
    if(e.target.value === "Selecciona una provincia/estado"){
        setCountry({...country, city: ""});
        return;
    }
    else{
        setCountry({...country, city: e.target.value});
        setEditUser({...editUser, city: e.target.value});
    }
};

////////////////////////////////////////////////COUNTRY//////////////////////////////////////////////////////

  function handleChange(e) {
    e.preventDefault();
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value,
    });
  };

  ///////////////////////////////////////////////TECH////////////////////////////////////////////////
  function handleChangeTech(e) {
    e.preventDefault();
    if(editUser.technologies.includes(e.target.value)){
        return
    }
    else{
        setEditUser({
          ...editUser,
          technologies:[...editUser.technologies, e.target.value]
        });
    }
  };

  function onCloseTech(value) {
    setEditUser({
            ...editUser,
            technologies:[...editUser.technologies.filter(el => el !== value)]
          });
  };
  ///////////////////////////////////////////////TECH////////////////////////////////////////////////


  function handleLn(e) {
    setEditUser({
        ...editUser,
        [e.target.name]: e.target.value
    });
  };

  function handleGitHub(e) {
    setEditUser({
        ...editUser,
        [e.target.name]: e.target.value
    });
  };

  function handleGmail(e) {
    setEditUser({
        ...editUser,
        [e.target.name]: e.target.value
    });
  };

  function handleStudio(e) {
    e.preventDefault();
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value,
    });
  };

  function handleAcercaDe(e) {
    e.preventDefault();
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value,
    });
  };

  function handleSelect(e) {
      setInput({
        ...editUser,
        [e.target.name]: e.target.value,
      });
  };

  function handleSubmit() {
    console.log(editUser);
      dispatch(EditProfile({ id, editUser }));
      navigate(`/profile/${id}`);
      alert("Cambios guardados!");
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
            <Foto1>
              <MdAddAPhoto className="ph" />
            </Foto1>
            {previewSource ? (
              <img src={previewSource} />
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
          <Foto2>
            <MdAddAPhoto className="ph" />
          </Foto2>
          <div className="inner">
            {previewSourceBanner ? (
              <img src={previewSourceBanner} />
            ) : (
              <MdOutlineInsertPhoto className="puto" />
            )}
            <input type="file" value={fileInputStateBanner} name="banner" onChange={handleFileInputChangeBanner} />
          </div>
            <button type="submit" onClick={handleSubmitBanner}>add photo</button>
          {/* <textarea value={inputd} onInput={(e)=>handleBanner(e)} placeholder="Send nudes"/> */}
        </div>

        <div>
          <button type="submit" onClick={handleSubmit}>Guardar</button>
        </div>
      </Fotos>

      <Cont2>
        <h2>Editar perfil:</h2>
        <NameLast>
          <div>
            <label>Nombre:</label>
            <input
              name="name"
              value={editUser.nombre}
              placeholder="Nombre"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label>Apellido:</label>
            <input
              name="lastName"
              type="text"
              value={editUser.apellido}
              placeholder="Apellido"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </NameLast>

        <SelectorCou> 
        <h3>¿De dónde eres?</h3>
                <div className="lado">

                <h3>País:</h3> 
                <select onClick={(e) => countrySelect(e)}>
                    <option>Selecciona un País</option>
                    {countries && countries.map(e => {
                        return <option>{e.country}</option>
                    })}
                </select>
                </div>

                {allCities && <div className="lado">
                    <h3>Provincia/Estado:</h3>
                    <select onClick={(e) => citySelect(e)}>
                        <option>Selecciona una provincia/estado</option>
                        {allCities.map(e => {
                            return <option>{e}</option>
                        })}
                    </select>
                    </div>}

        </SelectorCou>
        <RedesEdit>
          <div>
            <BsGithub className="gh" />
            <input
              name="github"
              type="text"
              value={editUser.github}
              onChange={(e) => handleGitHub(e)}
              placeholder="GitHub"
            />
          </div>
          <div>
            <SiGmail className="mail" />
            <input
              name="gmail"
              type="text"
              value={editUser.gmail}
              onChange={(e) => handleGmail(e)}
              placeholder="Gmail"
            />
          </div>
          <div>
            <BsLinkedin className="ln" />
            <input
              name="linkedin"
              type="text"
              value={editUser.linkedin}
              onChange={(e) => handleLn(e)}
              placeholder="LinkedIn"
            />
          </div>
        </RedesEdit>

        <TecOther>
          <h3>Tecnologias:</h3>
          { editUser.technologies && editUser.technologies.map(e => <div key={e}><p>{e}</p><button onClick={() => onCloseTech(e) }>X</button></div>)}
          <select 
            name="technologies"
            placeholder="Tecnologias" 
            type='text'
            onChange={(e) => handleChangeTech(e)}
            value={editUser.technologies}>
                <option>Seleccionar Tecnologías</option>
                {technologies.map(e => <option key={e} value={e}>{e}</option>)}
            </select>
        </TecOther>

        <TecOther>
          <h3>Otros estudios:</h3>
          <input
            name="otherStudies"
            type="text"
            value={editUser.otherStudies}
            onChange={(e) => handleStudio(e)}
            placeholder="Otros estudios"
          />
        </TecOther>

        <AboutAs>
          <h3>Acerca de:</h3>
          <input
            name="acercaDe"
            type="text"
            value={editUser.acercaDe}
            onChange={(e) => handleAcercaDe(e)}
            placeholder="Acerca de"
          />
        </AboutAs>
      </Cont2>
    </InnerModal>
  );
}