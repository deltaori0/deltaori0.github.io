import { useEffect, useState } from "react";

export const useBoardFind = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 습득물 게시판에 작성된 게시글 정보들을 JSON Object Array로 가져온다
    // GET https://find-thanku.herokuapp.com/find/board
    const getInitialPosts = async () => {
      const request = await fetch(
        "https://find-thanku.herokuapp.com/find/board",
        {
          method: "GET",
        }
      );

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
