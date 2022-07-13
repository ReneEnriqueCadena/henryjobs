import styled from "styled-components";

export const Componente = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
`

export const DivFiltros = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
background: #ffeb3b;
align-items: center;

select{
    height: 3rem;
    border: 1px solid #ffeb3b;
    background: none;
    select-styles: none;
    @import url(//db.onlinewebfonts.com/c/901497541657a2f24e42848bcf7fad52?family=Avenir+Heavy);
    font-family: Avenir;
    option{
        background: #ffeb3b;
    }
}
button{
    background-color: #040404;
    color: white;
}
`