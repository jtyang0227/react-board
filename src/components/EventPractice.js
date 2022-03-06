import React, {Component} from 'react';

class EventPractice extends Component {
  state = {
    message: '',
    username: ''
  }

  // 전송
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // 초기화
  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message)
    this.setState({
      message: '',
      username: ''
    })
  }

  // 리액트 키보드 이벤트 설정: onKeyPress
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type='text'
          name="username"
          placeholder="이름"
          value={this.state.username}
          onChange={this.handleChange}
        />

        <input
          type='text'
          name="message"
          placeholder="입력"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />

        <button onClick={this.handleClick}>전송</button>
      </div>
    );
  }
}

export default EventPractice;