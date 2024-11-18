import KosonganFD from '@/module/food&drink/ui/kosonganf&d';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <KosonganFD>
        {children}
      </KosonganFD>
    </>
  );
}

export default Layout;
