import React from 'react';
import styled from '@emotion/styled';
import { css } from 'emotion';
import styles from './Counter';

const red = '#f00';

const FancyComponent = styled('h1')`
  color: ${props => (props.wild ? 'hotpink' : 'gold')};
`;

const className = css`
  color: ${red};
  font-size: 2em;
  cursor: pointer;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  static onKeyPress() {}

  climb() {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  }

  render() {
    const { count } = this.state;
    const isWild = count % 2 === 0;
    return (
      <div
        className={styles.counter}
        onClick={this.climb.bind(this)}
        onKeyPress={this.onKeyPress.bind(this)}
        tabIndex={0}
        role="button"
      >
        <FancyComponent wild={isWild} className={className}>
          Count:
          {count}
        </FancyComponent>
      </div>
    );
  }
}
