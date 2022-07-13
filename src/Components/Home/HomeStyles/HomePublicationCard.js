import styled from 'styled-components';

export const BodyStudentsWallCard= styled.div`
width: 100%;
min-height: 120vh;
display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    align-content: center;
` 
export const BotonTecnologias = styled.div`
border: 2px solid #5D5F66;
box-shadow: -1px -1px 5px 1px rgba(248, 247, 242, 0.13);
border-radius: 12px;
p{
    position: absolute;
    font-size: 11px;
    line-height: 13px;
    text-align: justify;
    color: #5D5F66;
    font-weight: lighter;

}
`

export const BannerCont= styled.div`

overflow: hidden;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content: center;
// position: absolute;

img{
    width:100%;
}



`

export const PublicationCard= styled.div`
    display: flex;
    background-color: #1A1B1E;
    width: 85%;
    min-height:20em;
    height: 15rem;
    border-radius: 1rem;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: space-around;
    justify-content: space-between;
    margin: 2rem;
    overflow: hidden;
  
p{
    margin-left: 3rem;
    font-size: 11px;
    text-align: justify;
    margin-right: 3rem;
}

button {
    cursor: pointer;
    &:active {
        background-color: black;
        color: white;
    }
}

`


export const Cavecera= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
// margin-top: 1em;
border-bottom: 0.5px solid hsl(228deg 11% 9%);



h3{
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
}

p{
    font-size: 0.7em;
    margin-right: 0.5em;
    margin-top: -5em;
}

div{

    // .botonMail{
    //     border:1px solid red;
    //     // position: absolute;
    //     // margin-top: -13em;
    // }
}





`

export const Detalle= styled.p`
font-size: 0.7em;
// border: 1px solid white;


`
export const NamePic= styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;

margin-left: 1em;


.imageName{
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: space-around;
   
}
.datos{
    width:100%;
    
   
}
.ubicacion{
    display: flex;
    align-items: center;
    width:100%;
    margin-top: -1em;
}
.nombre{
    display:flex;
    align-items:center;
    justify-contenr: space-around;
   padding:.5em;
    width:100%;
    .plus{
       
        width:2em;
        height:2em;
        border-radius: 50%;
        overflow:hidden;
        button{
            width:100%;
            border-radius:50%;
    
            &:active{
                background-color: black;
                border:1px solid yellow;
                .plusd{
                    color:yellow;
                }
            }
        }
    }


}



p{
    display: flex;
    margin: 0;
    font-size: 10px;
    flex-direction: row;
    align-items: center;
    color: #8e929a;
;
}
h3{
    margin-right: 1em;
}
a{
    text-decoration: none;
    margin: 0;
}
h5{
    margin-right: 1rem;
    color: #8e929a;
    font-size: 10px;
}
.imagenUbicacion{
    width: 0.5rem;
}
`

export const PictureCont= styled.div`
width: 3.5em;
height: 3em;
border-radius: 50%;
overflow: hidden;
border: 1px solid yellow;

img{
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content: center;
}

`


export const InnerPost= styled.div`

border: 1px solid white;

display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;

p{
    margin-left:-4em;
}



`

export const FooterPost= styled.div`

p{
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
}

width: 100%;
height: 3em;
border-top: 1px solid hsl(228deg 11% 9%);
background-color: #141519;
display: flex;
align-items: center;
justify-content: space-around;

div{
    width:10%;
    display: flex;
    align-items: center;
    justify-content: center;
    

    .heart{
        cursor:pointer;
        margin-right: 0.5em;
        color: yellow;

        &:active{
           
                color: black;
                

                box-shadow: box-shadow:
                7px 6px 28px 1px rgba(0, 0, 0, 0.24);
              transform: translateY(2px);
        
        }
    }
}

.share{
    margin-right: 1em;
    margin-left: 1em;
}


span{

    width: 15%;
    margin-left: 1em;
    display: flex;
    align-items: center;

    .comenta{
        margin-right: 0.5em;
        color: yellow;


        &:active{
           
            color: black;
            

            box-shadow: box-shadow:
            7px 6px 28px 1px rgba(0, 0, 0, 0.24);
          transform: translateY(2px);
    
    }
    }
}

.share{
    color: yellow;
    cursor:pointer;
    

    &:active{
       
        color: black;
        

        box-shadow: box-shadow:
        7px 6px 28px 1px rgba(0, 0, 0, 0.24);
      transform: translateY(2px);

}
}

.comentar{
    cursor:pointer;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
}


`

export const DetailPost= styled.div`
 width:100%;
display: flex; 
align-items: center;
justify-content: space-around;
flex-direction: row;


div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    // margin: 0.5rem;
   
}

.contenedorPost{
    // border: 1px solid red;
    width:50%;
    margin-bottom: 1em;
}

span{
    
    border: 2px solid #5D5F66;
    box-shadow: -1px -1px 5px 1px rgba(248,247,242,0.13);
    border-radius: 12px;
    width: auto;
    padding-right: 0.2rem;
    padding-left: 0.2rem;
    height: 26px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    // margin: 0.5rem;

    }
    
p{  
    margin: 0;
    font-size: 11px;
    color: #5D5F66;
    font-weight: bold;

}


 
`
export const ButonGrey = styled.div `

background: #5D5F66;
border: 2px solid #5D5F66;
box-shadow: -1px -1px 5px 1px rgba(248, 247, 242, 0.13);
border-radius: 12px;
width: auto;
height: 26px;


p{
    color: #1A1B1E;
    font-size: 12px;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    font-weight: bold;
}
img{
   width: 25%;
    padding: none;
}

`


export const ButtonCont= styled.div`
// border: 1px solid yellow;
width:50%;
margin-bottom: 1em;
`


export const Tech= styled.div`


width: 100%;
height: 3em;
margin-top: .5em;
margin-bottom: .5em;
display: flex;
align-items:center;
justify-content: flex-start;
overflow: hidden;

div{
    height:1.5em;
    width: 15%;
   
    
    display: flex;
    align-items:center;
    justify-content: space-around;
    overflow:hidden;
    background-color: #5c5f66;
    border-radius: 20px;
    color:#1A1B1E;
    p{
        font-size:.5em;
        width: auto;
    }
}

`

export const TextP= styled.div`

border-bottom: 0.5px solid hsl(228deg 11% 9%);

`

export const StudentGrid= styled.div`

display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;

`