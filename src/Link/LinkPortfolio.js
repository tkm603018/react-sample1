import React from 'react';
import { Link } from 'react-router-dom';

export default class TemporaryDrawer extends React.Component {
  render() {
    return (
      <div>
        <Link to="/Portfolio">Portfolio</Link>
      </div>
    )
  }
}
