//공지사항 게시글 삭제 함수
export const PostDelete = async (auth) => {
  const url = window.location.pathname;
  //삭제함 && 접속자 id가 관리자의 username과 같으면 (temp:admin)
  if (auth) {
    var bool = window.confirm("정말 삭제하시겠습니까?");
    //삭제 안함
    if (!bool) {
      return;
    }
    //삭제함
    // DELETE https://find-thanku.herokuapp.com/notice/post/:_id
    const request = await fetch("https://find-thanku.herokuapp.com" + url, {
      method: "DELETE",
    });
    if (!request.ok) {
      alert("게시글 삭제 실패");
      return;
    }
    await request.json();
    alert("삭제되었습니다!");
  }
  //작성자!= 접속자 -> 삭제 안함
  else {
    alert("삭제 권한 없음");
  }
};

//공지사항 게시글 수정
export const PostEdit = async (auth, content) => {
  const url = window.location.pathname;
  //작성자 == 관리자 id (admin)
  if (auth) {
    var newcontent = "content 수정됨";
    // PATCH https://find-thanku.herokuapp.com/notice/post/:_id/content/:content
    const request = await fetch(
      "https://find-thanku.herokuapp.com" + url + "/content/" + newcontent,
      {
        method: "PATCH",
      }
    );
    if (!request.ok) {
      alert("게시글 수정 실패");
      return;
    }
    await request.json();
    alert("수정되었습니다!");
    window.location.reload(true); //새로고침
  }
  //작성자!= 접속자 -> 수정 안함
  else {
    alert("수정 권한 없음");
  }
};
