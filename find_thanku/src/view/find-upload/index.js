import React, {Component,useState} from "react";
import * as S from "./styles";
import TextEditor from "../../component/find-text-editor";
import Layout from "../../component/layout";
import { render ,Link} from 'react-router-dom';
// import { STATIC_URL } from "../../constant";
import Select from 'react-select';
import axios from "axios";
const headers = { withCredentials: true };


class FindUpload extends Component{
  FindUpload = () => {
    const send_param = {
      headers,
      title: this.title.value,
      name: this.name.value,
      getplace: this.getplace.value,
      putplace: this.state.selectedOption.value,
    };
    axios
      .post("http://localhost:4000/find_upload", send_param)
      //에러
      .catch(err => {
        console.log(err);
      });
  }
  options =  [{ value: '중앙광장 원스탑', label: '중앙광장 원스탑' }, 
              { value: '하나스퀘어 원스탑', label: '하나스퀘어 원스탑' },
              { value: '기타', label: '기타' }];
  
  state = {
    selectedOption: '',
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  render(){
    const { selectedOption } = this.state;

    const styles = {
      container: base => ({
        ...base,
        padding: '2px',
        fontSize: '18px',
        height: '30px',
        flex: 1
      }),
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'black' : 'black',
        backgroundColor: state.isSelected ? 'lightgrey' : 'white'
      }),
      control: (provided) => ({
        ...provided,
        marginTop: "1%"
      })
    };

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

              <Select 
                styles = {styles}
                placeholder = "보관 장소" 
                options = {this.options}
                onChange={this.handleChange}
                autoFocus={true}
                value={selectedOption}
                />

            </S.WriteInputContainer>
            <S.TextEditorContainer>
              <TextEditor />
            </S.TextEditorContainer>
            <Link to = '/board_find'>
              <S.SubmitButton 
                onClick={this.FindUpload}
                type="button"
                block>작성
              </S.SubmitButton>
            </Link>
            {/* <img src={STATIC_URL.PENCIL_ICON} alt="pencil" /> */}
          </S.UploadContainer>
        </S.Upload>
      </Layout>
    );
  }
};

export default FindUpload;