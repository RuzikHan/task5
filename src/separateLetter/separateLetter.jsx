import React, { Component } from 'react';

import './separateLetter.css';
import '../mailBoxButtons/mailBoxButtons.css';

export class SeparateLetter extends Component {
  constructor(props) {
    super(props);

    this.setClassName = this.setClassName.bind(this);
    this.setReaded = this.setReaded.bind(this);
    this.setAnimation = this.setAnimation.bind(this);
  }

  setClassName = () => {
    const list = ['letter'];
    if (this.props.hiddenLetter) {
      list.push('hidden-letter');
    }
    if (this.props.addAnimated) {
      list.push('added-animated-letter');
    }
    if (this.props.deleteAnimated) {
      list.push('deleted-animated-letter');
    }
    return list.join(' ');
  };

  setReaded = () => {
    if (this.props.isReaded) return 'letter_readed-circle';
    return 'letter_unreaded-circle';
  };

  setAnimation() {
    if (this.props.addAnimated) {
      this.props.deleteAddAnimation(this.props.id);
    }
    if (this.props.deleteAnimated) {
      this.props.deleteLetters();
    }
  }

  render() {
    return (
      <li className={this.setClassName()} onAnimationEnd={this.setAnimation}>
        <label>
          <input
            type="checkbox"
            className="mail-box__white-square"
            onClick={() => this.props.changeChecked(this.props.id)}
            checked={this.props.checked}
          />
        </label>
        <img src={this.props.avatar} className="letter__sender-avatar" alt="avatar" />
        <a
          href="#"
          className="letter__open-article"
          onClick={() => this.props.openLetter(this.props.id, this.props.text)}
        >
          <div className="letter__info letter__sender-name letter__unreaded">
            {this.props.sender}
          </div>
        </a>
        <div className={this.setReaded()} />
        <a
          href="#"
          className="letter__open-article"
          onClick={() => this.props.openLetter(this.props.id, this.props.text)}
        >
          <div className="letter__info letter__mail-text letter__unreaded">{this.props.name}</div>
          <div className="letter__info letter__date">1 апр</div>
        </a>
        <div className="mail-box__line" />
      </li>
    );
  }
}
