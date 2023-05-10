import { FC, PropsWithChildren } from 'react';
import Meta from '../../meta/Meta';
import { ISeo } from '../../meta/meta.interface';

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
  return (
    <>
      <Meta {...rest} />
      <section>{children}</section>
    </>
  );
};

export default Layout;
