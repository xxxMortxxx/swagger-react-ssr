import React from 'react';
import SwaggerUI, { presets } from 'swagger-ui';

import 'swagger-ui/dist/swagger-ui.css';

const SWAGGER_SPEC_URL = '/api.json';

export default class Swagger extends React.Component {
    containerId = Math.random().toString(36).substring(7);

    componentDidMount() {
        SwaggerUI({
            dom_id: `#${this.containerId}`,
            url: SWAGGER_SPEC_URL,
            presets: [presets.apis],
        })
    }

    render() {
        return (
            <div id={this.containerId}/>
        )
    }
}
