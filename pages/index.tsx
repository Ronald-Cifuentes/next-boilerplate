import React, {type FC} from 'react';

export interface IndexProps {
  dataTestId?: string;
}

const Index: FC<IndexProps> = ({dataTestId = 'index-test'}) => {
  const handleButton = (): void => {
    console.log('TestXXX');
  };

  return (
    <div data-testid={dataTestId}>
      <button onClick={handleButton}>TestX</button>
    </div>
  );
};

export default Index;
