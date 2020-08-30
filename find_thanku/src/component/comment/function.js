//댓글 수 지정 함수
const SetReplynum = async (num) => {
  const url = window.location.pathname; // 현재 페이지의 pathname을 가져온다
  // 변경된 댓글 수를 해당 게시글 url에 업데이트
  // 분실물 게시판 : PATCH https://find-thanku.herokuapp.com/lost/post/:_id/replynum/:num
  // 습득물 게시판 : PATCH https://find-thanku.herokuapp.com/find/post/:_id/replynum/:num
  const request = await fetch(
    "https://find-thanku.herokuapp.com" + url + "/replynum/" + num,
    {
      method: "PATCH",
    }
  );
  if (!request.ok) {
    alert("Server not Responding");
    return;
  }
  await request.json();
};

// 댓글 삭제하는 함수 (댓글 작성자만 삭제 권한 부여)
export const PostDelete = async (delauth, id) => {
  const url = window.location.pathname;
  // (삭제함) && (작성자 == 현재 접속자의 googleId)
  if (delauth) {
    var bool = window.confirm("정말 삭제하시겠습니까?");
    // 삭제 안함
    if (!bool) {
      return;
    }
    // 삭제함
    // 분실물 게시판 : DELETE https://find-thanku.herokuapp.como/lost/post/:_id/comment/:_commentid
    // 습득물 게시판 : DELETE https://find-thanku.herokuapp.como/find/post/:_id/comment/:_commentid
    const request = await fetch(
      "https://find-thanku.herokuapp.com" + url + "/comment/" + id,
      {
        method: "DELETE",
      }
    );
    if (!request.ok) {
      alert("댓글 삭제 실패");
      return;
    }
    await request.json();
    SetReplynum(-1); // 댓글수 -1
    alert("댓글이 삭제되었습니다!");
    window.location.reload(true); // 새로고침
  }
  // 작성자 != 접속자 -> 삭제 안함
  else {
    alert("삭제 권한 없음");
  }
};

// 댓글 수정하는 함수
export const PostEdit = async (editauth, content, id) => {
  const url = window.location.pathname;
  //작성자 == 현재 접속자의 googleId
  if (editauth) {
    var input = prompt("새로운 내용을 입력하세요", content);
    if (!input) {
      input = content; //input == null(취소 클릭시)
    }
    // 분실물 게시판 : PATCH https://find-thanku.herokuapp.com/lost/post/:_id/comment/:_commentid/content/:content
    // 습득물 게시판 : PATCH https://find-thanku.herokuapp.com/find/post/:_id/comment/:_commentid/content/:content
    const request = await fetch(
      "https://find-thanku.herokuapp.com" +
        url +
        "/comment/" +
        id +
        "/content/" +
        input,
      {
        method: "PATCH",
      }
    );
    if (!request.ok) {
      alert("댓글 수정 실패");
      return;
    }
    await request.json();
    window.location.reload(true); //새로고침
  }
  //작성자!= 접속자 -> 수정 안함
  else {
    alert("수정 권한 없음");
  }
};
