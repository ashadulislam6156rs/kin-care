import { useSession } from 'next-auth/react';
import React from 'react';

const useAuth = () => {
    const { data: session, status } = useSession();
  return {
    user: session?.user ?? null,
    session,
    isAuthenticated: status === "authenticated",
    isLoading: status === "loading",
  };
};

export default useAuth;