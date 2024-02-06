import { Component } from 'react';
import style from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const { options, handleBtnClick } = this.props;
    return (
      <ul className={style.list}>
        {options &&
          options.map(el => {
            return (
              <li key={el}>
                <button
                  className={`${style.btn} ${style[el]}`}
                  onClick={() => handleBtnClick(el)}
                >
                  {el}
                </button>
              </li>
            );
          })}
      </ul>
    );
  }
}
