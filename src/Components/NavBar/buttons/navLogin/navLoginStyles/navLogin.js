import styled from "styled-components";

export const ContnavLogin= styled.div`
// border:1px solid green;
width:50%;
display:flex;
align-items: center;
justify-content:space-between;
flex-direction:row;

a{
    text-decoration: none;
    color:white;
}

&:active{
    text-decoration:underline;
}

`

export const ProfileNav= styled.div`

// border:1px solid white;
width: 100%;
display:flex;
justify-content: space-between;
flex-direction:row;

`

export const ContainerProfile= styled.div`

// border: 1px solid yellow;

width:20%;
display: flex;
jusrtify-content:center;

button{
    &:active{
        border:1px solid yellow;
        color: yellow;
        background-color: black;
    }
}



`

export const ButtonDiv= styled.div`
// border:1px solid red;




`

export const LoginCont= styled.div`

width: 10%;
display:flex;
align-items: center;

`