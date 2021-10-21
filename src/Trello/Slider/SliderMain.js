import React from 'react'
import styled from "styled-components"
import img1 from "../Assets/ebaylogo.png"
import {ImQuotesLeft} from "react-icons/im"

export const SliderMain = ({header, sub, text, note}) => {
    return (
        <Container>
            <Wrapper>
                <LogoSection>
                    <Logo src={img1}/>
                    <Title header={header}>{header}</Title>
                    <Desc sub={sub}>{sub}</Desc>
                </LogoSection>
                <ContentSection>
                <Div><ImQuotesLeft /></Div>
                    <Note note={note}>{note}</Note>
                </ContentSection>
                
            </Wrapper>
            <Last>
                <Finance text={text}>{text}</Finance>
             </Last>
        </Container>
    )
}


const Finance=styled.div`
width:200px;
font-size:19px;


@media screen and (max-width:500px) {

    width:100%;
    font-size:20px;
    height:100%;
    color:black;
    font-weight:500;


}
`;
const Last=styled.div`
width:85%;
height:80px;
margin:0 auto;
display:flex;
justify-content:flex-end;
margin-top:10px;
`;
const Div=styled.div`
font-size:40px;
margin-top:$0px;
`;
const Note=styled.div`
font-size:32px;
color:#172b4d;
line-height:48px;
margin-top:40px;
margin-left:20px;


@media screen and (max-width:500px) {

    width:100%;
    font-size:20px;
    height:100%;
    margin-top:0px;
    margin-left:0px;
    line-height:32px;
    color:black;
    font-weight:500;


}
`;
const ContentSection=styled.div`
width:790px;
height:250px;
display:flex;


@media screen and (max-width:500px) {

    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;

    Div{
        font-size:25px;
    }
}
`;
const LogoSection=styled.div`
width:250px; 


@media screen and (max-width:500px) {

    width:100%;
    height:100%;
    display:flex;
    flex-direction:column-reverse;

}
`;
const Logo=styled.img`
width:200px;
height:70px;
object-fit:cover;


@media screen and (max-width:500px) {

    width:50%;
    height:100%;
    margin:15px 0;

}
`;
const Title=styled.div`
font-size:16px;
margin-top:60px;


@media screen and (max-width:500px) {

    width:50%;
    height:100%;
    margin:0

}
`;
const Desc=styled.div`
font-size:24px;
font-weight:500;

@media screen and (max-width:500px) {

    width:50%;
    height:100%;
    margin-top:5px;

}
`;
const Container=styled.div`
width:100%;
min-height:60vh;
height:100%;
background-color:#E6FCFF;
padding-top:60px;

@media screen and (max-width:500px) {

    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;

}
`;
const Wrapper=styled.div`
width:80%;
display:flex;
height:100%;
margin:0 auto;


@media screen and (max-width:500px) {

    width:90%;
    height:100%;
    display:flex;
    flex-direction:column-reverse;
    align-items:center;

    
    
}
`;