import React, { HtmlHTMLAttributes } from 'react';

import './PageContainer.css';

interface IProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer: React.SFC<IProps> = (
  { children, className = '', ...restProps }: IProps
): React.ReactElement<IProps> => (
  <div className={`page-container ${className}`} {...restProps}>
    {children}
  </div>
);
