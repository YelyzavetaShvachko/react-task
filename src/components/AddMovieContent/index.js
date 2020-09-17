import React from 'react';
import { ModalTitle, ModalForm, FormItem, FormInput, BtnWrapper, SubmitBtn, CancelBtn } from '../styled.js';

const AddMovieContext = () => {
  return (
    <>
      <ModalTitle>ADD MOVIE</ModalTitle>
      <ModalForm>
        <FormItem>
          TITLE
          <FormInput type="text" value="Moana" />
        </FormItem>
        <FormItem>
          RELEASE DATE
          <FormInput type="text" value="Select Date" />
        </FormItem>
        <FormItem>
          MOVIE URL
          <FormInput type="text" value="Movie URL here" />
        </FormItem>
        <FormItem>
          GENRE
          <FormInput type="text" value="Select Genre" />
        </FormItem>
        <FormItem>
          OVERVIEW
          <FormInput type="text" value="Overview here" />
        </FormItem>
        <FormItem>
          RUNTIME
          <FormInput type="text" value="Runtime here" />
        </FormItem>
        <BtnWrapper>
          <CancelBtn>RESET</CancelBtn>
          <SubmitBtn>SUBMIT</SubmitBtn>
        </BtnWrapper>
      </ModalForm>
    </>
  );
};

export default AddMovieContext;