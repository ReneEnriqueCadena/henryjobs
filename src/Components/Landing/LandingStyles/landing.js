import styled from 'styled-components';


export const Slider= styled.div`

margin-top:0px;
position: relative;
height: 100vh;
width:100%;
display: flex;
justify-content: center;
align-items: center;
margin-right: 3rem;


// background-color: black;
color: white;





.Rarrow{
    position: absolute;
    top:50%;
    right:1em;
    font-size: 2rem;
    color:white;
    z-index: 10;
    cursor: pointer;
    user-select: none;
    background-color:white;
    border-radius:50%;
    
   
}
    .Larrow{
        background-color:white;
        border-radius:50%;
        position: absolute;
        top:50%;
        left:1em;
        font-size: 2rem;
        
        z-index: 10;
        cursor: pointer;
        user-select: none;
        
        
        
}

.slide{
    opacity:0;
    transition-duration: 2s ease;
}
.slide.active{
    opacity:1;
    transition-duration: 2s;
    // transform: scale(1.08);
}


`

export const CardDiv=styled.div`

// width:100%;
// height:100%;




`
export const ContCard= styled.div`

width:100%;



`

export const Card= styled.div`

width:100%;

`


export const ArrowLeft= styled.img`
    height:2em;

`

export const ArrowRight= styled.img`
    height:2em;
    -webkit-transform: rotate(-180deg); 
-moz-transform: rotate(-180deg);
`