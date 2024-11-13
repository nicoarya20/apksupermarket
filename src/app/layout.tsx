import '@mantine/core/styles.css';

import React from 'react';
import { Box, ColorSchemeScript, MantineProvider } from '@mantine/core';
import LayoutBackground from '@/module/_global/layout/layout_background';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme='dark' />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider >
          <Box bg={"dark"} pos={"fixed"} h={"100%"} w={"100%"} style={{ overflowY: "auto"}}>
            <LayoutBackground>
              {children}
            </LayoutBackground>
          </Box>
        </MantineProvider>
      </body>
    </html>
  );
}