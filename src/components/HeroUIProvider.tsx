import React from 'react';
import { HeroUIProvider as HeroUIProviderBase } from '@heroui/react';

interface HeroUIProviderProps {
  children: React.ReactNode;
}

export default function HeroUIProvider({ children }: HeroUIProviderProps) {
  return <HeroUIProviderBase>{children}</HeroUIProviderBase>;
}
