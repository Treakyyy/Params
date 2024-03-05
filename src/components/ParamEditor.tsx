import React, { ChangeEvent } from 'react';
import './ParamEditor.css'

interface Param {
  id: number;
  name: string;
  type: string;
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
}

interface Props {
  params: Param[];
  model: Model;
}

interface State {
  paramValues: ParamValue[];
}

class ParamEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      paramValues: props.model.paramValues || [],
    };
  }

  handleParamChange = (paramId: number, value: string) => {
    const updatedValues = this.state.paramValues.map((paramValue) =>
      paramValue.paramId === paramId ? { ...paramValue, value } : paramValue
    );

    this.setState({ paramValues: updatedValues });
  };

  getModel = (): Model => {
    return { paramValues: this.state.paramValues };
  };

  render() {
    const { params } = this.props;

    return (
      <div className='container'>
        <h1>Product Editor</h1>
        {params.map((param) => (
          <div key={param.id}>
            <label htmlFor={`param_${param.id}`}>{param.name}:</label>
            <input
              className='input'
              type="text"
              id={`param_${param.id}`}
              value={this.state.paramValues.find((pv) => pv.paramId === param.id)?.value || ''}
              onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleParamChange(param.id, e.target.value)}
            />
          </div>
        ))}
        <button className='btn' onClick={() => console.log(this.getModel())}>Save</button>
      </div>
    );
  }
}

export default ParamEditor;



