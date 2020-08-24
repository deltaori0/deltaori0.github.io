export const PostDelete = async (username) => {
    const url = window.location.pathname;
    var bool = window.confirm('정말 삭제하시겠습니까?');
    //삭제 안함
    if(!bool){
      return; 
    }
    //삭제함 && 작성자 == 현재 접속자의 username (temp:nonamed)
    if(bool && username === "nonamed"){
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