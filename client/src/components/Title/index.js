import React, { Component } from 'react';
import { TitleWrapper, SubtitleWrapper } from './style';

class Title extends Component {
  render() {
    return(
      <div className="Title__Wrapper">
      <TitleWrapper>
      {this.props.title}
      </TitleWrapper>
      <SubtitleWrapper>
      {this.props.subtitle}
      </SubtitleWrapper>
      </div>
    );
  }
}

export default Title;
