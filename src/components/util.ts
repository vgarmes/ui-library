import { StylesProps } from 'styled-system';

export const getProps =
  (test: (prop: string) => boolean) => (props: Record<string, any>) => {
    const next: typeof props = {};
    for (const key in props) {
      if (test(key || '')) next[key] = props[key];
    }
    return next;
  };
