"use client";

import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return( <SessionProvider>{children}</SessionProvider>)
};