import swaggerSpec from '../swagger-spec/api.json';
import React from 'react';

export default class CustomSwagger extends React.Component {
  renderPath(path) {
    return (
      <li key={path}>{path}</li>
    )
  }

  render() {
    return (
      <div>
        <h3>Available methods:</h3>
        <ul>
          { Object.keys(swaggerSpec.paths).map(this.renderPath)}
        </ul>
      </div>
    )
  }
}
