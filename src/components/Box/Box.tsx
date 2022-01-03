import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { space, color, layout } from 'styled-system';

const boxSystemProps = [
  ...(space.propNames as string[]),
  ...(color.propNames as string[]),
  ...(layout.propNames as string[]),
];

export const isBoxStyledSystemProp = (prop: string) =>
  boxSystemProps.includes(prop);

const Box = styled('div', { shouldForwardProp })(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  space,
  color,
  layout
);

Box.displayName = 'Box';

export default Box;
