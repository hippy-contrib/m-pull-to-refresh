import React from 'react';

export interface Indicator {
  activate?: React.ReactNode;
  deactivate?: React.ReactNode;
  release?: React.ReactNode;
  finish?: React.ReactNode;
}

export interface PropsType {
  getScrollContainer: () => React.ReactNode;
  direction: 'down' | 'up';
  refreshing?: boolean;
  distanceToRefresh: number;
  onRefresh: () => void;
  indicator: Indicator;
  contentContainerStyle?: React.CSSProperties;
  indicatorStyle?: React.CSSProperties;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  damping?: number;
  scale?: number;
}
