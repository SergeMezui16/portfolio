import { AppProvider } from '@/context';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return <AppProvider>{children}</AppProvider>;
}
