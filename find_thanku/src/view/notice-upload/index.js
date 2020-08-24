import React,{Component} from "react";
import * as S from "./styles";
import TextEditor from "../../component/find-text-editor";
import Layout from "../../component/layout";
import axios from "axios";
import { render } from "@testing-library/react";
const headers = { withCredentials: true };

class NoticeUpload extends Component{
  Upload = () => {
    const send_param = {
      headers,
      title: this.title.value,
      //content: this.name.value,
    };
    axios
      .post("http://localhost:4000/notice/upload", send_param)
      //정상 수행
      //에러
      .catch(err => {
        console.log(err);
      });
    alert("작성 완료!");
  };
  render (){
    return (
      <Layout>
        <S.Upload>
          <S.UploadContainer>
            <S.TitleContainer>
              <S.Title>글 작성</S.Title>
            </S.TitleContainer>
            <S.WriteInputContainer>
              <S.NameInput 
                type="text"
                ref={(ref) => (this.title = ref)}
                placeholder="제목" />
            </S.WriteInputContainer>
            <S.TextEditorContainer>
              <TextEditor />
            </S.TextEditorContainer>
            <S.SubmitButton 
              to = '/notice'
              onClick = {this.Upload}>작성</S.SubmitButton>
          </S.UploadContainer>
        </S.Upload>
      </Layout>
    );
  }
};

export default NoticeUpload;
