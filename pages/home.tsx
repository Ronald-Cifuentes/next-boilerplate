import React, {type FC} from 'react';

type HomeProps = Partial<{
  dataTestId: string;
}>;

const Home: FC<HomeProps> = ({dataTestId = 'home-test'}) => {
  return <div data-testid={dataTestId}>home</div>;
};

export default Home;
