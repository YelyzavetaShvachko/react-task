import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styled from 'styled-components';
import MovieModalContent from '../MovieModalContent';

const MovieIcon = styled(MoreVertIcon)`
  && {
    background: #232323;
    border-radius: 50%;
    color: #ffffff;
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

class MovieIconModal extends React.Component {
  constructor() {
    super();
    this.handler = this.handler.bind(this);
    this.state = {
      show: false
    };
  }

  handler(param) {
    this.setState({
      show: param
    });
  }

  render() {
    return (
      <div>
        {
          this.state.show ? <MovieModalContent action={this.handler}/> : null
        }
        <MovieIcon onClick={() => { this.setState({ show: !this.state.show }); }} />
      </div>
    );
  }
}

export default MovieIconModal;