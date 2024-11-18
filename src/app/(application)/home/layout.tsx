import KosonganHome from '@/module/_global/layout/kosongan_home';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <KosonganHome>
        {children}
      </KosonganHome>
      </>
  );
}

export default Layout;
