import { Component } from 'react';
import style from './Section.module.css';

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h2 className={style.title}>{title}</h2>
        {children}
      </section>
    );
  }
}
