import styled from 'styled-components';



export const SelectorHover= styled.div`



width: 100%;
z-index: -2;

li{
    width:80%;
    border-radius: 10px;
    margin-top: 1em;
   cursor: pointer;
    margin-left: 0.3em;
    padding: 0.5 em;
    padding: 1em;
    display: none;
    &:hover{
       background-color: hsl(228deg 8% 12%);
    }
}

.lucho{
    &:hover{
        li{
            display:block;
            
            
        }
        .Cont{
            display:block;
        }
    }

}

.Cont{
    display:none;
   

}

&:hover{
    display:block;
    // border:1px solid red;

    background-color: #141519;
    border-radius: 10px;
    display:none;
    // margin-top:-1.5em;
    margin-left: 5em;
    
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;

    width:13em;
    height:auto;
    

    box-shadow: 4px 6px 5px 0px rgb(193 196 25 / 75%);
    -webkit-box-shadow: 2px 1px 5px 0px rgb(193 196 25 / 24%);
    -moz-box-shadow: 4px 6px 5px 0px rgba(193,196,25,0.75);


}

.Select{
    display: flex;
    align-items:center;
    justify-content: center;
    p{
        margin-right:0.5em;
    }
   &:hover{
    .arrow{
        transform: rotate(180deg);
        transition: 1s;
    }
   }

}

.arrow{
    color: yellow;
}


`


export const NaviCont= styled.div`
width:100%;
height: 7em;


display:flex;
justify-content: space-around;
flex-direction: row;




`