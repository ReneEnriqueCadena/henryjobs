import styled from 'styled-components';


export const NavSt= styled.div`



width:100%;

display:flex;
align-items:center;
justify-content: space-around;

div{
    a{
        text-decoration: none;
        color: white;
    }


    button{

        &:hover{
            text-decoration: underline;
            cursor: pointer;

        }
    }
}
`

export const DivContSt= styled.div`

width: 100%;



`