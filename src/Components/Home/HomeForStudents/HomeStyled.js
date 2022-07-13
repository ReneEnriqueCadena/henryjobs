import styled from "styled-components";

export const ContenedorStudents = styled.div`
    width: 100%;
    height:auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`




export const ComponentCard= styled.div`
border-top: 3px solid yellow;
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
background-color: #1A1B1E;
width: 50%;
min-height: 5em;
border-radius: 1rem;
margin-top: 5em;
margin-bottom: 5em;



// overflow: hidden;


`


export const Profile= styled.div`

border-bottom: 0.2px solid #2a2d36 ;
width: 100%;
min-height: 4em;
margin-bottom: 1em;
display: flex;
 align-items: center;
 justify-content: space-between;
 flex-direction: row; 

.Date{
    color:#8e929a;
    font-size: 0.7em;
    margin-right: 1em;
}

h3{
    
    &:hover{
        text-decoration: underline;
    cursor: pointer;
}
}
.Image{
    width: 3em;
    height: 3em;
    border: 1px solid yellow;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1em;
    margin-left: 1em;
    display: flex;
     align-items: center;
     justify-content:center;
    img{
        width: 100%;
        height: 100%;
       
    }
}

.compPer{
    display:flex;
    align-items: center;
    justify-content: center;
    
}

.namub{
    display: flex;
    algin-items: center;
    justify-content: center;
    flex-direction: column;
    
    a{
        text-decoration: none;
    }
   
    p{
        
        font-size: 0.7em;
    }

    .ubic{
        color:#8e929a;
        font-size: 0.7em;
        
    }

    .ub{
        margin-top: -2em;
        
        display: flex;
         align-items:center;
         justify-content: flex-start;
         p{
            color:#8e929a;
         }
         &:hover{
            text-decoration: underline;
            cursor:pointer;
         }
         
    }
    
}


`

export const InnerText= styled.div`
border-bottom: 0.2px solid #2a2d36 ;

width:100%;
mih-height: 5em;
p{
    padding:1em;

}

`


export const Tags= styled.div`

width: 100%;
min-height: 3em;
display: flex;
align-items: center;
// justify-content: center;


.tech{
    min-width:10%;
    height: 1.5em;
    border-radius: 20px;
    margin-right:.5em;
    margin-left:.5em;
    background-color:hsl(222deg 5% 38%);
    display: flex;
    align-items:center;
    justify-content: center;
    p{
        margin-left: .5em;
        margin-right: .5em;
        width: auto;
        color:#1A1B1E;
        font-size: .8em;
    }
}

`


export const Video= styled.div`
border-bottom: 0.2px solid #2a2d36 ;
border-top: 0.2px solid #2a2d36 ;

min-height: 10em;
width: 100%;

`


export const Footer= styled.div`
border-top: .2px solid #ffff0094;
width:100%;
height: 1em;


`

export const Burron= styled.div`


height: 3em;
width: 100%;
display: flex; 
align-items: center;
justify-content: center;
flex-direction: column;


span{
    background-color: yellow;
    border-radius: 10px;
    padding: 1em;
    margin-bottom: 1em;
    margin-top: 1em;
    color: black;
    

}

`

export const ErrorDiv=styled.div`


border: 1px solid yelow;
border-radius: 10px;

padding: 1em;
margin-bottom: 1em;

background-color: yellow;
color: black;



`