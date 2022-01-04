import React from 'react';
import css from '@styled-system/css';
import { Box } from '..';
import { isBoxStyledSystemProp } from '../Box/Box';
import { getProps } from '../util';
import { LayoutProps } from 'styled-system';

const getContainerProps = getProps(isBoxStyledSystemProp);
const getIframeProps = getProps((str) => !isBoxStyledSystemProp(str));

type Props = {
  src: string;
  width: LayoutProps;
  height: LayoutProps;
  ratio: number;
  frameBorder: number;
  allow: string;
  rest: Record<string, any>;
};
const Embed = React.forwardRef(
  (
    {
      src,
      width,
      height,
      ratio = 16 / 9,
      frameBorder = 0,
      allow = 'fullscreen',
      ...rest
    }: Props,
    ref
  ) => {
    return (
      <Box
        css={css({
          width: '100%',
          height: 0,
          paddingBottom: 100 / ratio + '%',
          position: 'relative',
          overflow: 'hidden',
        })}
        {...getContainerProps(rest)}
      >
        <Box
          as="iframe"
          ref={ref}
          src={src}
          width={width}
          height={height}
          frameBorder={frameBorder}
          allow={allow}
          {...getIframeProps(rest)}
          css={css({
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            bottom: 0,
            left: 0,
            border: 0,
          })}
        />
      </Box>
    );
  }
);

export default Embed;
