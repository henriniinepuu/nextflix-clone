"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";


const ProfilesPage = () =>  {
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
  <div className="flex items-center justify-center h-full">
    <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">Who&apos;s watching?</h1>
        <div className="flex items-center justify-center gap-8 mt-10">
            <div onClick={() => {}}>
                <div className="group flex-row w-44 mx-auto">
                    <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                        <img src="/images/default-user-image.png" alt="Profile" />
                    </div>
                    <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white"> {session.user?.name} </div>
                </div>
            </div>
        </div>

    </div>
  </div>);
}

export default ProfilesPage;
