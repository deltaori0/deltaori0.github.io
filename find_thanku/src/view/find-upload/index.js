import React, {Component} from "react";
import * as S from "./styles";
import TextEditor from "../../component/find-text-editor";
import Layout from "../../component/layout";
import { render } from "@testing-library/react";
// import { STATIC_URL } from "../../constant";
import axios from "axios";
const headers = { withCredentials: true };

class FindUpload extends Component{
  FindUpload = () => {
    const send_param = {
      headers,
      title: this.title.value,
      name: this.name.value,
      getplace: this.getplace.value,
      putplace: "putplace"  //this.putplace.value
    };
    axios
      .post("http://localhost:4000/find_upload", send_param)
      //에러
      .catch(err => {
        console.log(err);
      });
  }
  
  render(){
    return (
      <Layout>
        <S.Upload>
          <S.UploadContainer>
            <S.TitleContainer>
              <S.Title>글 작성</S.Title>
            </S.TitleContainer>
            <S.TitleInputContainer>
              <S.TitleInput
                type="text"
                ref={ref => (this.title = ref)}
                placeholder="제목 명" />
            </S.TitleInputContainer>
            <S.WriteInputContainer>
              <S.NameInput
                type="text"
                ref={ref => (this.name = ref)}
                placeholder="습득물 명" />
              <S.PlaceInput 
                type="text"
                ref={ref => (this.getplace = ref)}
                placeholder="습득 장소" />
              <S.CategorySelector>
                <S.CategoryOption>보관 장소</S.CategoryOption>
                <S.CategoryOption>하나스퀘어 원스탑</S.CategoryOption>
                <S.CategoryOption>중앙광장 원스탑</S.CategoryOption>
                <S.CategoryOption>기타</S.CategoryOption>
              </S.CategorySelector>
            </S.WriteInputContainer>
            <S.TextEditorContainer>
              <TextEditor />
            </S.TextEditorContainer>
            <S.SubmitButton
              onClick={this.FindUpload}
              type="button"
              block>작성</S.SubmitButton>
            {/* <img src={STATIC_URL.PENCIL_ICON} alt="pencil" /> */}
          </S.UploadContainer>
        </S.Upload>
      </Layout>
    );
  }
};

export default FindUpload;
