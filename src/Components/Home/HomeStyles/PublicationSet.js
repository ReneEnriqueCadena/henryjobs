import styled from 'styled-components'


export const SettingsCont= styled.div`

border-top: 1px solid yellow;
border-end-end-radius: 1rem;
border-end-start-radius: 1rem;
background-color: hsl(228deg 8% 12%);
width: 40%;
height: auto;
margin-bottom: 4em;

.elCartel {
    display: flex;
    justify-content: center;
    color: yellow;
}


box-shadow: 4px 6px 5px 0px rgb(193 196 25 / 75%);
    -webkit-box-shadow: 2px 1px 5px 0px rgb(193 196 25 / 24%);
    -moz-box-shadow: 4px 6px 5px 0px rgba(193,196,25,0.75);


`
export const SettingHead= styled.div`
display: flex;
align-items:center;
justify-content: center;
flex-direction: row;
margin-top: 1em;


.imgcont{
    
    border: 1px solid yellow;
    border-radius: 50%;
    width: 3em;
    height: 3em;
    overflow: hidden;

    display: flex;
    align-items:center;
    justify-content: center;
    img{
        width:100%;
        height:100%;
    }

    


`

export const Public= styled.div`


width:55%;
display:flex;
align-items: center;
justify-content: center;

input{
    padding: 1em;
    border-radius: 10px;
    
    margin-right: 1em;
    font-family: Avenir Heavy;
}



button{
    width:6.5em;
    
    background-color: #fffc04;
    padding:1em;
    border-radius: 10px;
    font-family: Avenir Heavy;

    &:active{
        background-color:black;
        color:yellow;
        border:1px solid  #fffc04;
    }
}
`

export const PvSettings= styled.div`

display: flex;
align-items: center;
justify-content: space-around;
flex-direction: row;

div{
    display:flex;
    align-items: center;
    justify-content: center;

    p{
        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }

    .foto{
        color: yellow;
        margin-right: 1em;           

    }
    .video{
        color: yellow; 
        margin-right: 1em;   

    }
}


`

export const Player= styled.div`
overflow: hidden;
border: 1px solid hsl(228deg 11% 9%);
width: 95%;
height: 22.5em;

margin-bottom: 2em;

`