import { ReactNode } from 'react';

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-4">
      {children}
    </div>
  );
}
