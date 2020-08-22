import styled from "styled-components/macro";

export const Login = styled.div`
  width: 400px;
  height: 400px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  margin-top: 96px;
  margin-bottom: 32px;

  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 0px;
  padding-left: 30px;

  border: 2px solid #F0B957;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

// border: 3px solid #F0B957;
// export const box = styled.div`
//     background:yellow;
// `;

// export const button = styled.div`
//     background-color: #4CAF50; /* Green */
//     border: none;
//     color: white;
//     padding: 15px 32px;
//     text-align: center;
//     display: inline-block;
//     font-size: 16px;
// `;
