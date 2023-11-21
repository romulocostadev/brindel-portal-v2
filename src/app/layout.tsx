'use client';

import { getItem } from '@/helpers/getItem';

import { useRouter } from 'next/navigation';
import { menuItems } from './dashboard/constants';

import './global.css';
import Providers from '@/providers/Providers';
import { Sidebar } from '@/components/Sidebar';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="flex flex-1">
            <Sidebar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
