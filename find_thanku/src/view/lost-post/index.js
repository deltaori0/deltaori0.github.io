import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import CommentList from "../../container/comment-list";
import { STATIC_URL } from "../../constant";
import { useBoardLost } from "./hooks";
import { useCommentLost } from "./hooks2";
import axios from "axios";
const headers = { withCredentials: true };

const LostPost = () => {
  const { posts } = useBoardLost();
  //존재하는 _id의 게시글일 때만 화면 보이도록 설정해야함
  const { comments } = useCommentLost();
  //var username;
  var content;

  const CommentUpload = () => {  
    const send_param = {
      headers,
      //username: username.value,
      content: content.value,
      postid: posts._id
    };
    const url = window.location.pathname;  //localhost:4000/find_post/게시글 id정보/  
    axios
      .post("http://localhost:4000"+url+"/comment", send_param)
      //에러
      .catch((err) => {
        console.log(err);
      });
    alert("댓글 작성 완료!");
    window.location.reload(true); //새로고침
  };

  return (
    <Layout> 
      <S.LostPost>
        <S.TitleContainer>
          <S.Title>분실물 게시판</S.Title>
        </S.TitleContainer>
        <S.LostPostContainer>
          <S.MetaContainer>
            <S.PostTitle>{posts.title}</S.PostTitle>
            <S.Date>{posts.date}</S.Date>
            <S.Label>분실물 명 : {posts.name} </S.Label>
            <S.Label>분실 장소 : {posts.place} </S.Label>
            <S.ContentContainer>
              <S.Content>{posts.content}</S.Content>
            </S.ContentContainer>
          </S.MetaContainer>
        </S.LostPostContainer>
        <br/><br/>
        <S.MetaContainer>
          <S.Label>{<img src={STATIC_URL.PENCIL_ICON} alt="pencil" width='15px'/>} 댓글</S.Label>
          <S.CommentsContainer>
            <CommentList comments = {comments}/>
          </S.CommentsContainer>
          <S.WriteCommentContainer>
            <S.WriteComment 
              type="text"
              ref={ref => (content = ref)}
              placeholder="댓글을 입력하세요." />
            <S.SubmitIcon onClick={CommentUpload}>
              <img src={STATIC_URL.SUBMIT} alt="submit_icon" />
            </S.SubmitIcon>
          </S.WriteCommentContainer>
        </S.MetaContainer>
      </S.LostPost>
    </Layout>
  );
};

export default LostPost;
