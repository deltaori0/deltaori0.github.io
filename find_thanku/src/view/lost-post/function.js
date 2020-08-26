//게시글 삭제
export const PostDelete = async (delauth) => {
    //const currendId = storage.get('loggedInfo').googleId
    const url = window.location.pathname;
    //삭제함 && 작성자 == 현재 접속자의 username (temp:nonamed)
    if(delauth){
      var bool = window.confirm('정말 삭제하시겠습니까?');
      //삭제 안함
      if(!bool){
        return; 
      }
      //삭제함
      const request = await fetch("http://localhost:4000" + url, {
        method: "DELETE",
      });
      if (!request.ok) {
        alert("게시글 삭제 실패");
        return;
      }
      await request.json();      
      alert('삭제되었습니다!'); 
    }
    //작성자!= 접속자 -> 삭제 안함
    else{
      alert('삭제 권한 없음');
    }
  }

 //게시글 수정
 export const PostEdit = async (editauth, content) => {
  const url = window.location.pathname;
  //작성자 == 현재 접속자의 username(nonamed)
  if(editauth){
    var newcontent = "content수정됨"; //upload 페이지 다시 열어야할듯? find_edit view(content쓰임) 새로 만들어서 newcont 받아오기
    const request = await fetch("http://localhost:4000" + url +"/content/" + newcontent, {
      method: "PATCH",
    });
    if (!request.ok) {
      alert("게시글 수정 실패");
      return;
    }
    await request.json();
    alert('수정되었습니다!');
    window.location.reload(true); //새로고침
  }
  //작성자!= 접속자 -> 수정 안함
  else{
    alert('수정 권한 없음');
  }
}
//댓글수 조정
export const SetReplynum = async (num) => {
  const url = window.location.pathname;
  const request = await fetch('http://localhost:4000'+url+'/replynum/'+(num), {
    method: "PATCH",
  });
  console.log('http://localhost:4000'+url+'/replynum/'+(1));
  if (!request.ok) {
    alert("서버 죽음");
    return;
  }
  await request.json();
}