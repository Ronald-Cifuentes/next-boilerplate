import {type FC} from 'react';
import {TemplateNameContainer} from './TemplateName.styled';
import {type TemplateNameProps} from './interfaces';

const TemplateName: FC<TemplateNameProps> = ({
  dataTestId = 'template-name'
}) => {
  return (
    <TemplateNameContainer data-testid={dataTestId}>
      <h1>TemplateName component</h1>
    </TemplateNameContainer>
  );
};

export default TemplateName;
