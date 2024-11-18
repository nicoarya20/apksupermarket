import '@mantine/core/styles.css';

import '@mantine/carousel/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import KosonganLogin from '@/module/_global/layout/kosongan_login';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RootLayout({ children }: { children: any }) {

  return (
    <html lang="en" suppressHydrationWarning={true} >
      <head>
        <ColorSchemeScript defaultColorScheme='light' />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <MantineProvider defaultColorScheme='light' >
          <KosonganLogin>
            {children}
          </KosonganLogin>
        </MantineProvider>
      </body>
    </html>
  );
}