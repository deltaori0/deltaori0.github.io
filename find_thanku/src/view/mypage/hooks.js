import { useEffect, useState } from "react";

export const useMyPage = (googleId) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 마이페이지에 보여질 분실물 게시글 가져오기
    const getInitialPosts = async () => {
      const boardkind = "lost";
      // GET https://find-thanku.herokuapp.como/mypage/:boardkind/:googleId
      const request = await fetch(
        "https://find-thanku.herokuapp.com/mypage/" +
          boardkind +
          "/" +
          googleId,
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
  }, [googleId]);

  return {
    posts,
  };
};
