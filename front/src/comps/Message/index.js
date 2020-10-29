import React from 'react';
import styled from 'styled-components';

const MessageDiv = styled.div`
max-height: 98px;
min-height: 98px;
max-width: 345px;
display:flex;
justify-content:center;
align-items:center;
box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.03);
`;

const ProfilePic = styled.div`
height: 50px;
width: 50px;
border-radius:50%;
background-color:gray;
overflow: hidden;
display:flex;
justify-content:center;
align-items:center;

img{
    width:100%;
    height:100%
 }
`;

const TextContent = styled.div`
margin-left:10px;
max-width:200px;
max-height:98px;
display:flex;
flex-direction:column;
justify-content:center;
`;

const Name = styled.h3`
color: #175FA4;
margin:0px;
`;

const LastMsg = styled.p`
color: #979797;
margin:0px;
display:inline;
height:20px;
overflow:hidden;
`;

const Date = styled.p`
margin-top:-5px;
color:#39A6DC;
width:30px;
overflow:hidden;
`;

const Message = ({fullname, lastmsg, date, pfp}) => {
    return <MessageDiv>
<ProfilePic><img src = {pfp}></img></ProfilePic>
<TextContent>
<Name>{fullname}</Name>
<LastMsg>{lastmsg}</LastMsg>
</TextContent>
<Date>{date}</Date>
    </MessageDiv>
};

Message.defaultProps = {
fullname: "John Smith",
lastmsg: "This is the last message sent from this use...",
date: "Wed.",
pfp: "./placeholderProfile.png"
}


export default Message;