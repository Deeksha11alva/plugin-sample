import { default as styled } from 'react-emotion';

export const CustomTaskListComponentStyles = styled('div')`
  padding: 10px;
  margin: 0px;
  color: #fff;
  background: #c6b6a5;
  height:100%;

  .accented {
    color: red;
    cursor: pointer;
    float: right;
  }


  * {
  margin: 0; 
  padding: 0;
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Roboto", arial, sans-serif;
  color: #222
}
.container {
	width: 1024px;
	padding: 2em;
}

.bold-blue {
	font-weight: bold;
	color: #0277BD;
}
#login-container {
  margin-top:5%;
  height: 227px;
  width:75%;
  padding: 20px;
  border-radius: 5px;
  left: 13%;
  position: relative;
  background:black;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
  .profile-img {
    height: 100px;
    width: 100px;
    background: url('https://images.unsplash.com/photo-1504933350103-e840ede978d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80');
    background-size: cover;
    background-position: center;
    position: absolute;
    top: -18px;
    left: -9px;
    border-radius: 50%;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
   
  }
  h1 {
    font-family: 'Sriracha', arial, sans-serif;
    text-align: center;
    margin-bottom: 20px;
    color: $otherAccent;
  }
  .description{
    margin-bottom: 20px;
    margin-top:10%;
  }
  .social {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 40px);
    margin: 0 auto;
    a {
      text-align: center;
      border: solid 2px $accent;
      width: 75px;
      padding: 5px 0;
      border-radius: 5px;
      background:red;
      &:hover {
        background:blue;
        color: white;
        cursor: pointer;
      }
    }
  }
  button {
    width: 80%;
    height: 80px;
    font-size: 2rem;
    margin: 30px 10% 0 10%;
    color: $background;
    border: none;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    border-radius: 5px;
    background: linear-gradient(45deg, $accent, $otherAccent, $otherAccent, $accent);
    background-size: 300% 300%;
    outline: none;
    transition: all 200ms ease-in-out;
    &:hover{
      box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
      transform: translateY(2px);
      -webkit-animation: gradientBG 1.5s ease-in-out forwards;
      animation: gradientBG 1.5s ease-in-out forwards;
      cursor: pointer;
    }
    &:active {
      box-shadow: 3px 3px 3px rgba(0,0,0,0.5);
      transform: translateY(4px);
    }
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $darkBackground;
    color: white;
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 30px;
    padding: 0 20px;
    margin-left: -20px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    div {
      display: flex;
      .fa-heart {
        color: $accent;
      }
      p:first-child{
        margin-right: 10px;
        border-right: 4px solid white;
        padding-right: 10px;
      }
    }
  }
}

@-webkit-keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
  // 100% {
  //   background-position: 0% 50%;
  // }
}
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
  // 100% {
  //   background-position: 0% 50%;
  // }
}




  
  .img{
   float:left;
    height:100px;
    width:100px;
    border: 1px solid black;
   
    borderRadius: 50% !important;
  }
  
  





  .tabs
{
	position: relative;
	clear: both;
}

.tabs .tab
{
	float: left;
}

.tabs .tab .content
{
	position: absolute;
	background-color: white;
	left: 0px;
	width: 100%;
	border: 1px #000 solid;
}

.checkboxtab
{
	display: none;
}

.tab label
{
	margin-right: 10px;
}

.checkboxtab:checked ~ label
{
	color: #ab70ff;
	border: 1px #000 solid;
}

.checkboxtab:checked ~ .content
{
	z-index: 1;
}









.card-header{

  background:#0000ff;
}

.card-body{
  color:black;
}
.card-title .card-text{
 float:right;
}

  *{
    font-family: 'Work Sans', sans-serif;
  }
  html, body{
    height: 100%;
    color: #1a1b1c;
  }
  
  label, a{
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    display: inline-block;
    color: black;
    transition: border 0.2s;
    border-bottom: 5px solid rgba(#8e44ad, 0.2);
    padding: 3px 2px;
    &:hover{
      border-bottom-color: #9b59b6;
    }
  }
  
  .layout{
    display: grid;
    height: 91%;
    width: 100%;
    overflow: hidden;
    grid-template-rows: 50px 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    background:black;
  }
  
  input[type="radio"]{
    display: none;
  }
  
  label.nav{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-bottom: 2px solid #8e44ad;
    background: #ecf0f1;
    user-select: none;
    transition: background 0.4s, padding-left 0.2s;
    padding-left: 0;
    input[type="radio"]:checked + .page + &{
      background: #9b59b6;
      color: #ffffff;
      padding-left: 20px;
      span{
        padding-left: 20px  
      }
      svg{
        opacity: 1;
      }
    }
    span{
      padding-left: 0px;
      position: relative;
    }
    svg{
      left: 0;
      top: -3px;
      position: absolute;
      width: 15px;
      opacity: 0;
      transition: opacity 0.2s;
    }
  }
  
  .page{
    grid-column-start: 1;
    grid-row-start: 2;
    grid-column-end: span 3;
    padding: 0px 20px;
    display: flex;
    align-items: center;
  }
  
  .page-contents > *{
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.2s, transform 0.2s;
    @for $c from 1 through 20{
      &:nth-child(#{$c}){
        transition-delay: 0.2s + ($c * 0.2s);
      }
    }
  }
  
  input[type="radio"] + .page{
    transition: transform 0.2s;
    transform: translateX(100%);
  }
  
  input[type="radio"]:checked + .page{
    transform: translateX(0%);
    .page-contents > *{
      opacity: 1;
      transform: translateY(0px);
    }
  }
  
  .page-contents{
    max-width: 100%;
    width: 500px;
    margin: 0 auto;
  }

  .css-177f14u {
    padding: 10px;
    margin: 0px;
    color: rgb(255, 255, 255);
    background: rgb(198, 182, 165);
    height: 100%;
}
  .cardheader{
    background:#ffff;
  }
  .wrapper,
html,
body {
 
  margin: 0;
}

.wrapper {
  display:flex;
  flex-direction:column;
  height:100%;
}

.nav {
  background-color:darksalmon;
  flex: 1
}

.main {
  background-color: darksalmon;
  flex: 1
}
`;
