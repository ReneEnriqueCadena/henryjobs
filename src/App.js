import React from "react";
import {Route,Routes} from 'react-router-dom'; 
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/NavBar/navbar";
import './App.css';
import Home from "./Components/Home/home";
import StudentCompletePage from "./Components/Profile/Students/studentProfileComplete";
import UserForm from "./Components/Register_form/completeForm";
import RegisterAlumn from "./Components/Register_form/RegisterAlumn";
import RegisterRecruiter from "./Components/Register_form/Recruiter/RegisterRecruiter";
import DetailStudent from "./Components/Home/HomeForBusiness/DetailStudents";
import RegisterBusiness from "./Components/Register_form/Business/RegisterBusiness";
import RegisterStaff from "./Components/Register_form/Staff/RegisterStaff";
import Proyects from "./Components/Proyects/Proyects";
import AboutAs from "./Components/About as/About-as";
import Ads from "./Components/Ads/Ads";
import Booms from "./Components/Landing/booms/booms";
import Contact from "./Components/Landing/Footer/Contact";
import Faq from "./Components/Landing/Footer/Faq";
import Footer from "./Components/Landing/Footer/Footer";
import LoginCard from "./Components/Login/LoginPage/loginCard";
import RegisterPage from "./Components/Login/registerPage/registerPage";
import StudentsWall from "./Components/Post/StudentsWall/StudentsWall";
import WorkWall from "./Components/Post/WorkWall/WorkWall.jsx";
import GithubLog from "./Components/Login/LoginPage/githubLogin";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PremiumCard from "./Components/SerPremium/CardPremium";
import Paypal1 from "./Components/Paypal/Paypal1";
import Paypal2 from "./Components/Paypal/Paypal2";
import Paypal3 from "./Components/Paypal/Paypal3";
import ContactWall from "./Components/ContactWall/ContactWall";
import Applications from "./Components/ContactWall/Applications/Applications";
import EditModal from "./Components/Profile/editModal";
import El404 from "./Components/Loading/404";



function App() {


  return (
    <div className="body">

<PayPalScriptProvider options={{ "client-id": "AXPShqBccR4QiyF7mu71oQ5YyXGRc55iuxpne90670XTqGDWN9dLrtNR6gRDn-fOMv6LtMxW8JStMVx0" }} >
  <Navbar/>
    <Routes>
      <Route path="/" element={<Landing/>}/>//ususario logeado no!
      <Route path='/login' element={<LoginCard/>}/>//ususario logeado no!
      <Route path='/register' element={<RegisterPage/>}/>//ususario logeado no!
      <Route path='/home' element={<Home/>}/> // no tendria que verlo alguien no logeado
      <Route path='/registerform' element={<UserForm/>}/> // solo los nuevos usuarios 
      <Route path='/register/alumno' element={<RegisterAlumn />} />// solo los nuevos usuarios 
      <Route path='/register/business' element={<RegisterBusiness />} />// solo los nuevos usuarios 
      <Route path='/register/recruiter' element={<RegisterRecruiter />} />// solo los nuevos usuarios 
      <Route path='/register/staff' element={<RegisterStaff />} />// solo los nuevos usuarios 
      <Route path='/details/:id' element={<DetailStudent/>}/>//preguntar a rene
      <Route path='/profile/:id' element={<StudentCompletePage/>}/>//preguntar a rene
      <Route path='/perfil' element={<StudentCompletePage/>}/> //solo acceso a edit al usuairo propietario
      <Route path="/proyects" element={<Proyects/>}/>
      <Route path="/mypublications/:id" element={<ContactWall />} />
      <Route path="/myapplications/:id" element={<Applications />} />
      <Route path="/about-as" element={<AboutAs/>}/>
      <Route path="/ads" element={<Ads/>}/>
      <Route path="/booms" element={<Booms/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/hc" element={<Faq/>}/>
      <Route path="/workwall" element={<WorkWall />}/>
      <Route path="/students" element={<StudentsWall />} />
      <Route path="/GithubLog" element={<GithubLog/>} />
      <Route path="/premium" element={<PremiumCard/>} />
      <Route path="/checkout1/:id" element={<Paypal1 />} />
      <Route path="/checkout2" element={<Paypal2 />} />
      <Route path="/checkout3" element={<Paypal3 />} />
      <Route path="/EditProfile/:id" element={<EditModal />} />
      <Route path="/*" element={<El404 />} />
    </Routes>
    <Footer/>
      </PayPalScriptProvider>
    </div>
  );
};

export default App;
