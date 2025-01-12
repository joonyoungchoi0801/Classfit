import * as Icons from './icons';

export interface ImageIconProps {
  name: keyof typeof Icons;
  size?: string;
  width?: string;
  height?: string;
}
