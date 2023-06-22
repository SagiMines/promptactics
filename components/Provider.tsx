'use client';

import { ProviderProps } from '@/typings';
import { SessionProvider } from 'next-auth/react';

const Provider = ({ children, session }: ProviderProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
