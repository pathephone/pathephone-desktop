import React from 'react';

class Stepper extends React.Component {
  state = {
    step: null,
  }

  componentWillMount() {
    const { generator } = this.props;
    const onNextStage = this.nextStage;
    generator({ onNextStage });
  }

  nextStage = (step) => {
    this.setState({
      step,
    });
  }

  render() {
    const { step } = this.state;
    const { View } = this.props;
    if (step === null) return null;
    return <View step={step} />;
  }
}

export default Stepper;
