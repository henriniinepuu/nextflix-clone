"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth');
    }
  }, [status, router]);

  // Return null if not authenticated or still loading
  if (status !== 'authenticated') {
    return null;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Netflix Clone</h1>
      <p>Welcome, {session.user?.email}</p>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md" 
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </div>
  );
}
