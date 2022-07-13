import styled from "styled-components";

export const TestimonyDiv = styled.div`
 background-color: none;
color:white;
display:flex;
align-items:center;
justify-content: center;
flex-direction: column;
width: 100%;
height:100%;

img{
    width: 80%;
    height:100%;
}

`

export const GridDiv= styled.div`
width:100%;


height:85vh;
align-items:center;
justify-content: center;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;



div{
    
        width:14em;
        height:4.5em;
        // margin-left:10em;
        img{
            // border:1px solid yellow;
            width:100%;
            height:100%;
        }
    }
`

export const TittleTestimony= styled.div`

hr{
    background-color:yellow;
    height:1px;
    width:35%;
    position:absolute;
    margin-top:-1.5em;
   
}




`