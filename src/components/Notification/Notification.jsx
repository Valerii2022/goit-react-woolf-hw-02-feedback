import { Component } from 'react';
import style from './Notification.module.css';

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return <p className={style.message}>{message}</p>;
  }
}
