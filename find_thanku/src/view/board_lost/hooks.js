import { useEffect, useState } from "react";
export const useBoardLost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getInitialPosts = async () => {
      // 분실물 게시판에 작성된 게시글 정보들을 JSON Object Array로 가져온다
      // GET https://find-thanku.herokuapp.com/find/board
      const request = await fetch(
        "https://find-thanku.herokuapp.com/lost/board",
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
