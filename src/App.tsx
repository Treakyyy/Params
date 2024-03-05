import React from 'react';
import ParamEditor from './components/ParamEditor';

const App: React.FC = () => {
  const params = [
    { id: 1, name: 'Назначение', type: 'string' },
    { id: 2, name: 'Длина', type: 'string' },
  ];

  const model = {
    paramValues: [
      { paramId: 1, value: 'повседневное' },
      { paramId: 2, value: 'макси' },
    ],
  };

  return (
    <div>
      <ParamEditor params={params} model={model} />
    </div>
  );
};

export default App;

