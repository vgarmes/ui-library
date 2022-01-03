import React from 'react';
import { Box } from '..';
import { isBoxStyledSystemProp } from '../Box/Box';
import { getProps } from '../util';

const getContainerProps = getProps(isBoxStyledSystemProp);
const getIframeProps = getProps((str) => !isBoxStyledSystemProp(str));

type Props = {
  src: string;
  allowFullScreen: boolean;
};
const Embed = React.forwardRef(
  ({ src, allowFullScreen = true, ...rest }: Props, ref) => {
    return (
      <Box ref={ref} {...getContainerProps(rest)}>
        <Box
          as="iframe"
          src={src}
          allowFullScreen={allowFullScreen}
          {...getIframeProps(rest)}
          width="100%"
          height="100%"
        />
      </Box>
    );
  }
);

export default Embed;
