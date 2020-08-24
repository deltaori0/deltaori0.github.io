    
  export const PostDelete = async (username,id) => {
    const url = window.location.pathname;
    var bool = window.confirm('정말 삭제하시겠습니까?');
    //삭제 안함
    if(!bool){
      return; 
    }
    //삭제함 && 작성자 == 현재 접속자의 username(sohee(temp))
    if(bool && username === "sohee(temp)"){
      const request = await fetch("http://localhost:4000" + url + "/comment/" + id, {
        method: "DELETE",
      });
      if (!request.ok) {
        alert("댓글 삭제 실패");
        return;
      }
      await request.json();      
      alert('댓글이 삭제되었습니다!'); 
      window.location.reload(true); //새로고침
    }
    //작성자!= 접속자 -> 삭제 안함
    else{
      alert('삭제 권한 없음');
    }
  }
 
  export const PostEdit = async (username,content,id) => {
    const url = window.location.pathname;
    //작성자 == 현재 접속자의 username(sohee(temp))
    if(username === "sohee(temp)"){
      var input = prompt('새로운 내용을 입력하세요',content);
      if(!input) {
          input=content; //input==null(취소 클릭시)
        }
      const request = await fetch("http://localhost:4000" + url + "/comment/" + id +"/content/"+input, {
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