import styled from "styled-components/macro";

export const Login = styled.div`
  width: 400px;
  height: 400px;

  position: relative;
  background: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  margin-top: 96px;
  margin-bottom: 32px;

  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 0px;
  padding-left: 30px;

  border: 2px solid #f0b957;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
`;
