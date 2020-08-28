import React from 'react';
import { ModalTitle, ModalForm, FormItem, BtnWrapper, SubmitBtn } from '../styled.js';

class StyledBlock extends React.Component {
  render() {
    return (
      <>
        <ModalTitle>DELETE MOVIE</ModalTitle>
        <ModalForm>
          <FormItem>
          Are you sure you want to delete this Movie?
          </FormItem>
          <BtnWrapper>
            <SubmitBtn>CONFIRM</SubmitBtn>
          </BtnWrapper>
        </ModalForm>
      </>
    );
  }
}

export default StyledBlock;