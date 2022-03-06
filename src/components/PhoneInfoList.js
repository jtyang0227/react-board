import React, {Component} from 'react';
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
  }

  render() {
    // App.js 전달 받은 데이터들
    const {data, onRemove, onUpdate} = this.props;

    console.log('rendering list');

    // if (!data) return null;
    const list = data.map(
      info => (
        <PhoneInfo onRemove={onRemove}
                   onUpdate={onUpdate}
                   info={info}
                   key={info.id}
        />)
    );

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default PhoneInfoList;