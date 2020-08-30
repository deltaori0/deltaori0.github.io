import { useEffect, useState } from "react";

export const useBoardFind = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getInitialPosts = async () => {
      const url = window.location.pathname; // /find/post/:id
      // 상세 게시글 불러오기
      // GET https://find-thanku.herokuapp.com/find/post/:_id
      const request = await fetch("https://find-thanku.herokuapp.com" + url, {
        method: "GET",
      });
      if (!request.ok) {
        //  수정된 상세 게시글 불러오기
        const request2 = await fetch(
          "https://find-thanku.herokuapp.com" + url + "/edit",
          {
            method: "GET",
          }
        );
        if (!request2.ok) {
          alert("Server not responding");
          return;
        }
      }
      const data = await request.json();

      setPosts(data);
    };

    getInitialPosts();
  }, []);

  return {
    posts,
  };
};
