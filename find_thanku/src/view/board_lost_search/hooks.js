import { useEffect, useState } from "react";

export const useBoardSearch = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 검색 결과에 해당하는 게시글들을 JSON 배열 형태로 가져온다
    // GET https://find-thanku.herokuapp.com/lost/board/search/:searchval
    const getInitialPosts = async () => {
      const url = window.location.pathname;
      const request = await fetch("https://find-thanku.herokuapp.com" + url, {
        method: "GET",
      });

      if (!request.ok) {
        alert("Server not responding");
        return;
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
