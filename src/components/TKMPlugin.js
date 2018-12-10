import React from 'react';

class TKMLayout extends React.Component {
  render() {
    const BaseLayout = this.props.getComponent("BaseLayout", true);

    return (
      <div>
        <h3>This is my custom layout</h3>
        <BaseLayout/>
      </div>
    )
  }
}

export default ()  => {
  return {
    components: {
      TKMLayout,
      Model: () => <div>This is my custom model</div>,
      Models: () => <div>This is my custom models</div>,
      InfoBasePath: () => <div>Custom InfoBasePath</div>
    }
  }
};
