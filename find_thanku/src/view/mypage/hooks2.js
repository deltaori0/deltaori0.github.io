import { useEffect, useState } from "react";

export const useMyPage2 = (googleId) => {
  const [posts2, setPosts] = useState([]);

  useEffect(() => {
    // 마이페이지에 보여질 습득물 게시글 가져오기 by googleId
    const getInitialPosts = async () => {
      const boardkind = "find";
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
    posts2,
  };
};
