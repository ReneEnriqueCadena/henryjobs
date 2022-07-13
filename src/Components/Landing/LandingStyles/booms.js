import styled from "styled-components";


export const BoomCardContainer=styled.div`
width: 100%;
height:100vh;
// border:1px solid yellow;

display:flex;
justify-content:center;
align-items: center;
flex-direction: column;

`
export const ContCard= styled.div`

width: 15em;
height: 15em;
overflow:hidden;
border: 1px solid yellow;
border-radius: 10px;
box-shadow: 5px 10px 5px 0px rgba(237,224,59,0.75);
-webkit-box-shadow: 5px 10px 5px 0px rgba(237,224,59,0.75);
-moz-box-shadow: 5px 10px 5px 0px rgba(237,224,59,0.75);
&& ::-webkit-scrollbar {
    width: 15px;
}

`

export const GridContBoom= styled.div`
width:100%;
height: 80%;
// display: grid;
// grid-template-columns: repeat(4, 1fr);
// grid-template-rows: repeat(2, 1fr);
// grid-column-gap: 0px;
// grid-row-gap: 0px;

`