import React, { Component } from 'react';
import { MovieCard, Image, Year, DescriptionWrapper, Genre } from '../styled.js';
import MovieIcon from '../MovieIcon';
import PropTypes from 'prop-types';

export default class MovieCardWrapper extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <MovieCard
        onMouseEnter={() => this.setState({isHovering: true})}
        onMouseLeave={() => this.setState({isHovering: false})}
      >
        <Image src={this.props.photo} />
        {this.state.isHovering && <MovieIcon/>}
        <DescriptionWrapper>
          <h3>{this.props.title}</h3>
          <Genre>{this.props.genre}</Genre>
          <Year>{this.props.year}</Year>
        </DescriptionWrapper>
      </MovieCard>
    );
  }
}

MovieCardWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired, 
  genre: PropTypes.string.isRequired, 
  photo: PropTypes.string.isRequired, 
};
