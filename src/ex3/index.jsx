import React from 'react';
import Fish from './Fish';

// eslint-disable-next-line import/prefer-default-export
export class ExerciseThreePage extends React.Component {
  constructor(props) {
    super(props);
    this.setSize = this.setSize.bind(this);
    this.state = {
      sizes: [1, 2],
    };
  }

  setSize(i, size) {
    const { sizes } = this.state;
    const newSizes = sizes.slice();
    newSizes[i] = size;
    if (size >= 0) this.setState({ sizes: newSizes });
  }

  render() {
    const { sizes } = this.state;
    return (
      <div>
        <Fish size={sizes[0]} id={0} setSize={this.setSize} />
        <Fish size={sizes[1]} id={1} setSize={this.setSize} />
      </div>
    );
  }
}
