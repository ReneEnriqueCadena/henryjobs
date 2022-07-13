import styled from 'styled-components';


export const FormDiv= styled.div`

// border: 1px solid red;
width:100%;
height:100vh;

margin-top: -5em;
display:flex;
align-items: center;
justify-content: center;
flex-direction:column;
div{
    display:flex;
    // border:1px solid white;
    margin-bottom: 1em;
    margin-left: 1em;
    font-size: 1.5em;
}
button{
    width:7.5em;
    heigth:2em;
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



export const Switch= styled.div`
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #fffc04;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

`


export const Error= styled.span`
border-radius: 10px;
margin-bottom: 1em;
padding: 1em;
background-color: #fffc04;
color: black;

`


export const SwitchChiquito=styled.div`

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 2px;
  bottom: 1px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #fffc04;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(11px);
  -ms-transform: translateX(11px);
  transform: translateX(11px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 24px;
}

.slider.round:before {
  border-radius: 50%;
}


`