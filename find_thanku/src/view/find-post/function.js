import {EditUpload} from "../find-upload/edit";

export const PostDelete = async (username) => {
    const url = window.location.pathname;  //localhost:4000/find_post/게시글 id정보/  
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

  //게시글 수정
  export const PostEdit = async (username) => {
    const url = window.location.pathname;
    //작성자 == 현재 접속자의 username(nonamed)
    if(username === "nonamed"){

      new EditUpload //현재 post정보 넘겨줌
      alert('수정되었습니다!');
      window.location.reload(true); //새로고침
    }
    //작성자!= 접속자 -> 수정 안함
    else{
      alert('수정 권한 없음');
    }
  }
  /*
  //현재 게시글 넘겨주기(placeholder)
  export const EditPlaceholder = async (post) => {
    return post;
  }
  */
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
 