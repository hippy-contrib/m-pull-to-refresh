import React from 'react';

export interface Indicator {
  activate?: React.ReactNode;
  deactivate?: React.ReactNode;
  release?: React.ReactNode;
  finish?: React.ReactNode;
}

export interface PropsType {
  getScrollContainer: () => React.ReactNode;
  direction: 'down' | 'up' | 'both' | string;
  refreshing?: boolean;
  distanceToRefresh: number;
  onRefresh: () => void;
  onFooterRefresh?: () => void;
  indicator: Indicator;
  footerIndicator?: Indicator;
  indicatorHeight: number;
  footerIndicatorHeight?: number;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  damping?: number;
  scale?: number;
}
