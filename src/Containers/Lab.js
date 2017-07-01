/**
 * @flow
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

type Props = {
  match: Object,
};
type State = Object;

export default class Lab extends Component {
  props: Props;
  state: State;

  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return <div>Lab</div>;
  }
}
