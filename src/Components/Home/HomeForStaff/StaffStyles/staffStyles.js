import styled from 'styled-components';



export const ContStafHome= styled.div`
width:100%;
min-height: 120vh;


`


export const NavStaff= styled.div`


display: flex;
align-items:center;
justify-content: space-around;

button{
    width:auto;
    background-color: transparent;
    border:1px solid transparent;
    color: white;
    &:hover{
        text-decoration: underline;
    }
}


`

export const StaffNavCont= styled.div`

width:80%;
display:flex;
align-items:center;
jusrtify-content: flex-end;

div{
    margin-left:80%;
    a{
        text-decoration: none;
        color: white;
        &:hover{
            text-decoration: underline;
        }
    }
}



`

export const ContDivStaff= styled.div`


width: 80%;
margin-top: 5em;
display:flex; 
align-items: center;
justify-content: space-around;
margin-left: 10em;

input{
    padding: 1em;
    width:50%;
    border-radius: 10px;
    border: 2px solid yellow;
    color: yellow;
    background-color: transparent;
}

select{
    width:30%;
    padding: 1em;
    background-color: yellow;
    border-radius: 10px;
}


`

export const DivGrid= styled.div`



display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;

`