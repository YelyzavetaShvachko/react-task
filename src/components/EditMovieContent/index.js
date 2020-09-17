import React from 'react';
import { ModalTitle, ModalForm, FormItem, FormInput, BtnWrapper, SubmitBtn, CancelBtn } from '../styled.js';

const EditMovieContent = () => {
  return(
    <>
      <ModalTitle>EDIT MOVIE</ModalTitle>
      <ModalForm>
        <FormItem>
          MOVIE ID: 1126534324
        </FormItem>
        <FormItem>
                        TITLE
          <FormInput type="text" value="Moana" />
        </FormItem>
        <FormItem>
                        RELEASE DATE
          <FormInput type="text" value="31/03/2018" />
        </FormItem>
        <FormItem>
                        MOVIE URL
          <FormInput type="text" value="www.moana.com" />
        </FormItem>
        <FormItem>
                        GENRE
          <FormInput type="text" value="Comedy" />
        </FormItem>
        <FormItem>
                        OVERVIEW
          <FormInput type="text" value="Overview text here" />
        </FormItem>
        <FormItem>
                        RUNTIME
          <FormInput type="text" value="Runtime text here" />
        </FormItem>
        <BtnWrapper>
          <CancelBtn>RESET</CancelBtn>
          <SubmitBtn>SAVE</SubmitBtn>
        </BtnWrapper>
      </ModalForm>
    </>
  );
};

export default EditMovieContent;