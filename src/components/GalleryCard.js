import React from 'react';
import styled from 'styled-components';
import MdFavoriteOutline from 'react-icons/lib/md/favorite-outline';
import TiMessage from 'react-icons/lib/ti/message';
import { request } from '../api/request';

const Div = styled.div`
  width: 600px;
  margin: 0 auto;
  border: 1px solid #222;
  border-radius: 5px;
  background-color: #eee;
`;

const Header = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  position: relative;
`;

const Avatar = styled.img`
  border-radius: 100%;
  border: 1px solid #222;
  width: 50px;
  margin-left: 1em;
`;

const Username = styled.span`
  font-weight: bold;
  margin-left: 1em;
  margin-right: 5em;
`;

const ImgWrapper = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  max-height: 700px;
`;

const HeartIcon = styled(MdFavoriteOutline)`
  font-size: 2em;
  margin-left: .5em;
  cursor: pointer;
`;

const ChatIcon = styled(TiMessage)`
  font-size: 2em;
  margin-left: .5em;
  cursor: pointer;
`;

const EllipsisIcon = styled.a`
  font-size: 2em;
  position: absolute;
  right: 1em;
  text-decoration: none;
    :visited: #222;
  padding: 5px;
  cursor: pointer;
`;

const Footer = styled.footer`
  padding: .5em;
`;

function handleLike(postId, user) {
  console.log(postId);
  return request.post(`/posts/${postId}/likes`, user);
}

export default function GalleryCard({ user, post }) {
  return (
    <Div>
      <Header>
        <Avatar 
          src="https://randomuser.me/api/portraits/women/71.jpg" 
          alt="some-lady"/>
        {/*<Username>{user.username}</Username>*/}
        <EllipsisIcon href="">···</EllipsisIcon>
      </Header>

      <ImgWrapper>
        <Img src="http://media.istockphoto.com/photos/blank-box-picture-id518223207" alt="cube-in-a-box"/>
      </ImgWrapper>

      <Footer>
        <HeartIcon onClick={(post, user) => handleLike(post._id, user)} /> <ChatIcon />
      </Footer>
    </Div>
  );
}