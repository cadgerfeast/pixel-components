export enum Placement {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left'
};

export enum Alignment {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
  CENTER = 'center'
};

export enum Position {
  FIXED = 'fixed'
};

export interface Style {
  position?: Position;
  top?: string;
  left?: string;
};
