import { Component } from 'react';
import style from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const { handleBtnClick } = this.props;
    return (
      <ul className={style.list}>
        <li>
          <button
            className={style.btn}
            style={{ color: '#024602', backgroundColor: '#99ee99' }}
            onClick={() => handleBtnClick('good')}
          >
            Good
          </button>
        </li>
        <li>
          <button
            className={style.btn}
            style={{ color: '#926003', backgroundColor: '#f3d69f' }}
            onClick={() => handleBtnClick('neutral')}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            className={style.btn}
            style={{ color: '#5e0303', backgroundColor: '#f39e9e' }}
            onClick={() => handleBtnClick('bad')}
          >
            Bad
          </button>
        </li>
      </ul>
    );
  }
}
