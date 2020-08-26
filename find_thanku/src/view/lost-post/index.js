import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";
import CommentList from "../../container/comment-list";
import { STATIC_URL } from "../../constant";
import { useBoardLost } from "./hooks";
import { PostDelete, PostEdit, SetReplynum } from "./function";
import { useCommentLost } from "./hooks2";
import {storage} from "../google_login/storage";

import axios from "axios";
import { MetaContainer } from "../find-post/styles";
const headers = { withCredentials: true };

const LostPost = () => {
  const { posts } = useBoardLost();
  const { comments } = useCommentLost();
  console.log(posts);
  //var username;
  var content;
  const url = window.location.pathname; //localhost:4000/lost_post/게시글 id정보/
  const currentId = storage.get('loggedInfo').googleId;
   //삭제,수정 권한
   var editauth; var delauth;
   if(currentId === posts.googleId){
     editauth = true;
     delauth = true;
   }
   else{
     editauth = false;
     delauth = false;
   }

  //댓글 업로드(신규)
  const CommentUpload = () => {
    const send_param = {
      headers,
      username: storage.get('loggedInfo').email.split('@')[0],
      googleId: storage.get('loggedInfo').googleId,
      content: content.value,
      postid: posts._id,
      postkind: "lost",
    };
    axios
      .post("http://localhost:4000" + url + "/comment", send_param)
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
    PostDelete(delauth);
  };
  //게시글 수정
  const Edit = () => {
    PostEdit(editauth, posts.content);
  };

  const post_content = posts.content;
  return (
    <Layout>
      <S.LostPost>
        <S.TitleContainer>
          <S.Title>분실물 게시판</S.Title>
        </S.TitleContainer>
        <S.LostPostContainer>
          <S.PostContainer>
            <S.PostTitle>{posts.title}</S.PostTitle>
            <MetaContainer>
              <S.Date>{posts.date}</S.Date>
              <S.IconContainer>
                {editauth?
                <S.Icon onClick={Edit}>
                 <div><img src={STATIC_URL.EDIT} alt="edit" /></div>
                </S.Icon>: <div></div>}
                {delauth?              
                <S.Icon to="/lost/board" onClick={Delete}>
                  <img src={STATIC_URL.DELETE} alt="delete" />
                </S.Icon>: <div></div>}
              </S.IconContainer>
            </MetaContainer>
            <S.Label>분실물 명 : {posts.name} </S.Label>
            <S.Label>분실 장소 : {posts.place} </S.Label>
            <S.ContentContainer>
              {/* <S.Content>{posts.content}</S.Content> */}
              <S.Content>
                <div dangerouslySetInnerHTML={{ __html: post_content }} />
              </S.Content>
            </S.ContentContainer>
          </S.PostContainer>
        </S.LostPostContainer>
        <br />
        <br />
        <S.PostContainer>
          <S.Label>
            {<img src={STATIC_URL.CHAT} alt="chat" width="15px" />} 댓글
          </S.Label>
          <S.CommentsContainer>
            <CommentList comments={comments} />
          </S.CommentsContainer>
          <S.WriteCommentContainer>
            <S.WriteComment
              type="text"
              ref={(ref) => (content = ref)}
              placeholder="댓글을 입력하세요."
            />
            <S.SubmitIcon onClick={CommentUpload}>
              {<img src={STATIC_URL.SUBMIT} alt="submit_icon" />}
            </S.SubmitIcon>
          </S.WriteCommentContainer>
        </S.PostContainer>
      </S.LostPost>
    </Layout>
  );
};

export default LostPost;
