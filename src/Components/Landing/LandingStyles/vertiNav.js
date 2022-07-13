import styled from 'styled-components';

export const VerticalDiv= styled.div`


height: 100.5vh;
width: 4em;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
font-size: 1.5em;
background-color:none;
margin-left: 3rem;
margin-right: 5rem;
margin-top: 2rem;
margin-bottom: 1em;


.link{
    display: flex;
    margin: none;
    justify-content: center;
}
.icon{
    width:50%;
    h
    margin: 4rem;
    transition: width 0.3s ease;
    &: hover {
        width: 80%;
    }
}
.cohete{
    width:30%;
}
.contenedor{
    display:flex;
    padding: 0;
}
`

export const ContStart= styled.div`

width: 100%;
height:100vh;


display:flex;
justify-content:center;
align-items: center;

.about{
    width:80%;
    display: flex;
    justify-content:center;
    margin: 2rem;
}

`

export const LandingCont= styled.div`
// border:1px solid red;
display:flex;
align-items:center;
align-items: flex-start;

// width:100%;
// heigth:100%;

`

export const NavbarLineas = styled.div`
width: 0.2rem;
height: 100%;
min-height: 5rem;
max-height: 8rem;
display:flex;
align-items:center;
background: yellow;
margin: 0.8rem;
border-radius: 0.5rem;
`