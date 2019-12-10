import React, { FC } from 'react';
import Grid from '../Grid/Grid';

export const Layout: FC = ({ children }) => <Grid tag="div">{children}</Grid>;

export default Layout;
