import React from "react";

import * as S from "./styles";
import { STATIC_URL } from "../../constant";

const Comment = ({comment}) => {
  const Delete = async () => {
    //작성자 == 현재 접속자(sohee(temp))
    if(comment.username === "sohee(temp)"){
      const url = window.location.pathname;
      const request = await fetch("http://localhost:4000" + url + "/comment/" + comment._id, {
        method: "DELETE",
      });
      if (!request.ok) {
        alert("댓글 삭제 실패");
        return;
      }
      await request.json();      
      alert('댓글 삭제'); window.location.reload(true); //새로고침
    }
    //작성자가 아님->삭제X
    else{
      alert('삭제 권한 없음');
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
        <S.Content>
          {comment.content}
          {<img src={STATIC_URL.DELETE} alt="delete" width='20px' align='right' onClick={Delete}/>}
        </S.Content>
      </S.ContentContainer>
    </S.Comment>
  );
};

export default Comment;
