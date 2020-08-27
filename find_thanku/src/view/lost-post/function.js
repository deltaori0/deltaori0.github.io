//게시글 삭제
export const PostDelete = async (delauth) => {
    const url = window.location.pathname; //localhost:4000/lost_post/게시글 id정보/  
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