import React, { FC } from 'react';
import { Grid } from '../index';

export const Layout: FC = ({ children }) => <Grid tag="div">{children}</Grid>;

export default Layout;
