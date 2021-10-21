import React from 'react'
import styled from "styled-components"
import img from "./Assets/trelloTop.png"

export const TopComp = () => {
    return (
        <Container>
        <Wrapper>
            <Content>
                <Title>Trello helps teams move work forward.</Title>
                <Desc>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</Desc>
                <Button>
                    <Input placeholder="Email"/>
                    <SignUp>Sign up-its free !</SignUp>
                </Button>
            </Content>
            <Image src={img}/>
        </Wrapper>
    </Container>
    )
}


const Image = styled.img`
width:450px;
height:550px;
object-fit:contain;
margin-right:30px;
margin-top:30px;

@media screen and (max-width:500px){

width:80%;
height:50%;
margin-bottom:20px;
}
`;
const Content = styled.div`
width:688px; 
margin-left:100px;

@media screen and (max-width:400px){
    width:90%;
    height:100%;
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:red;
    margin-left:0px;
    
    
}

`;
const Title = styled.div`
font-size:48px;
color:#091e42;
font-family:Charlie Display, sans-serif;
margin-bottom:12px;
font-weight:550;

@media screen and (max-width:400px){
    font-size:29px;
}
`;
const Desc = styled.div`
font-size:20px;
color:#091e42;
margin-bottom:40px;

@media screen and (max-width:400px){
    font-size:24px;

}
`;
const Button = styled.div`
width:650px;
display:flex;

@media screen and (max-width:500px){
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;


}
`;
const Input = styled.input`
margin-right:15px;
width:400px;
height:45px;
border-radius:5px;
border:0;
outline:none;


::placeholder {
    font-size:20px;
    padding-left:12px;
}

@media screen and (max-width:400px){
    display:none;
}
`;
const SignUp = styled.div`
width:250px;
height:45px;
border-radius:7px;
font-size:20px;
background-color:#0065FF;
display:flex;
align-items:center;
justify-content:center;
color:white;
transition:all 400ms;

:hover{
    cursor:pointer;
    background-color:#0051CC;
}

@media screen and (max-width:500px){
    width:100%;
    height:50px;
    font-size:25px;
}
`;
const Container = styled.div`
width:100%;
min-height:100vh;
height:100%;
background-color:#ECE8FF;
padding-top:70px;

@media screen and (max-width:500px){
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;
const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:space-between;
align-items:center;

@media screen and (max-width:500px){
width:100%;
height:100%;
display:flex;
flex-direction:column-reverse;
align-items:center;
justify-content:center;
}
`;