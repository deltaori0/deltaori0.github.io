import React from "react";

import * as S from "./styles";
import { STATIC_URL } from "../../constant";

const Comment = ({comment}) => {
  const url = window.location.pathname;
  const Delete = async () => {
    var bool = window.confirm('정말 삭제하시겠습니까?');
    //삭제 안함
    if(!bool){
      return; 
    }
    //삭제함 && 작성자 == 현재 접속자의 username(sohee(temp))
    if(bool && comment.username === "sohee(temp)"){
      const request = await fetch("http://localhost:4000" + url + "/comment/" + comment._id, {
        method: "DELETE",
      });
      if (!request.ok) {
        alert("댓글 삭제 실패");
        return;
      }
      await request.json();      
      alert('댓글 삭제'); 
      window.location.reload(true); //새로고침
    }
    //작성자!= 접속자 -> 삭제 안함
    else{
      alert('삭제 권한 없음');
    }
  }
 
  const Edit = async () => {
    //작성자 == 현재 접속자의 username(sohee(temp))
    if(comment.username === "sohee(temp)"){
      var input = prompt('새로운 내용을 입력하세요',comment.content);
      const request = await fetch("http://localhost:4000" + url + "/comment/" + comment._id +"/content/"+input, {
        method: "PATCH",
      });
      if (!request.ok) {
        alert("댓글 수정 실패");
        return;
      }
      await request.json();
      window.location.reload(true); //새로고침
    }
    //작성자!= 접속자 -> 수정 안함
    else{
      alert('수정 권한 없음');
    }
  }
  
  return (
    <S.Comment>
      <S.WriterContainer>
        <S.ProfileIcon>
          <img src={STATIC_URL.PROFILE} alt="profile" />
        </S.ProfileIcon>
        <S.Writer>{comment.username} </S.Writer>
      </S.WriterContainer>
      <S.ContentContainer>
        <S.Content>{comment.content}</S.Content>
        <S.CommentIcon>{<img src={STATIC_URL.EDIT} alt="edit" align='right' onClick={Edit}/>}</S.CommentIcon>
        <S.CommentIcon>{<img src={STATIC_URL.DELETE} alt="delete" align='right' onClick={Delete}/>}</S.CommentIcon>
      </S.ContentContainer>
    </S.Comment>
  );
};

export default Comment;
