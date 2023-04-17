import Navbar from '@/component/Navbar';
import StyledComponentsRegistry from '../lib/registry';
import type { Metadata } from 'next';
import RootLayoutTemplate from '@/component/template/RootLayout';

export const metadata: Metadata = {
  title: 'Animation App',
  description: 'App to practice animation in ReactJS and NExtJS',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head/>
      <body>
        <StyledComponentsRegistry>
          <RootLayoutTemplate>
            <Navbar/>
            {children}
          </RootLayoutTemplate>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}