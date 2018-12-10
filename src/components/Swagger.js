import React from 'react';
import SwaggerUI, {presets} from 'swagger-ui';

import 'swagger-ui/dist/swagger-ui.css';

import TKMPlugin from './TKMPlugin';

const SWAGGER_SPEC_URL = '/api.json';

export default class Swagger extends React.Component {
  containerId = `container_${Math.random().toString(36).substring(7)}`;

  componentDidMount() {
    SwaggerUI({
      dom_id: `#${this.containerId}`,
      url: SWAGGER_SPEC_URL,
      plugins: [TKMPlugin],
      presets: [presets.apis],
      layout: 'TKMLayout'
    })
  }

  render() {
    return (
      <div id={this.containerId}/>
    )
  }
}
