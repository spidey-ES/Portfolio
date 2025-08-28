/// <reference types="vite/client" />
import type { ReactNode } from 'react';
export interface folders {
  id: number;
  title: string;
  icon: string;
  component: ReactNode;
}
export interface taskbarItemsList {
  id: number;
  icon: string;
  component: ReactNode;
}
