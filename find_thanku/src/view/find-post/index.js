import React from "react";
import * as S from "./styles";
import Layout from "../../component/layout";
import CommentList from "../../container/comment-list";
import { STATIC_URL } from "../../constant";
import { useBoardFind } from "./hooks";
import { useCommentFind } from "./hooks2";
import { PostDelete, PostEdit, SetReplynum } from "./function";
import { Link } from "react-router-dom";
import axios from "axios";

const headers = { withCredentials: true };

const FindPost = () => {
  const { posts } = useBoardFind();
  const { comments } = useCommentFind();
  //var username;
  var content;
  const url = window.location.pathname; 
  const CommentUpload = () => {  
    const send_param = {
      headers,
      //username: username.value,
      content: content.value,
      postid: posts._id,
      postkind: "find",
    };
    axios
      .post("http://localhost:4000"+url+"/comment", send_param)
      //에러
      .catch((err) => {
        console.log(err);
      });
    SetReplynum(1); //댓글수 +1
    alert("댓글 작성 완료!");
    window.location.reload(true); //새로고침
  };
  //게시글 삭제
  const Delete = () => {
    PostDelete(posts.username);
  }
  //게시글 수정
  const Edit = () => {
    PostEdit(posts.username,posts.content);
  }
  return (
    <Layout>
      <S.FindPost>
        <S.TitleContainer>
          <S.Title>습득물 게시판</S.Title>
        </S.TitleContainer>
        <S.FindPostContainer>
          <S.MetaContainer>
            <S.PostTitle>{posts.title}</S.PostTitle>
            <S.Date>
              {posts.date}
              <S.Icon to='/find/board'>{<img src={STATIC_URL.DELETE} alt="delete" width='20x' align='right' onClick={Delete}/>}</S.Icon>
              <S.Icon>{<img src={STATIC_URL.EDIT} alt="edit" width='20x' align='right' onClick={Edit}/>}</S.Icon>
            </S.Date>
            <S.Label>습득물 명 : {posts.name}</S.Label>
            <S.Label>습득 장소 : {posts.getplace} </S.Label>
            <S.Label>보관 장소 : {posts.putplace} </S.Label>
            <S.ContentContainer>
              <S.Content>{posts.content}</S.Content>
            </S.ContentContainer>
          </S.MetaContainer>
        </S.FindPostContainer>
        <br/><br/>
        <S.MetaContainer>
          <S.Label>{<img src={STATIC_URL.CHAT} alt="chat" width='15x'/>} 댓글</S.Label>
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
      </S.FindPost>
    </Layout>
  );
};

export default FindPost;
