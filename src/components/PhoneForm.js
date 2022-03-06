import React, { Component } from 'react';

class PhoneForm extends Component {
  // ref (필수사항은 아닙니다.)
  // input = null;  // 기본 버전
  input = React.createRef();

  state = {
    name: '',
    phone: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: '',
      phone: '',
    })

    // DOM 접근해서 포커싱 줍니다.
    // this.input.focus(); // 기본 버전
    this.input.current.focus();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="이름"
          onChange={this.handleChange}
          value={this.state.name}
          // ref={ref => this.input = ref }  // 기본 버전
          ref={this.input}
        />
        <input
          name="phone"
          placeholder="전화번호"
          onChange={this.handleChange}
          value={this.state.phone}
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;