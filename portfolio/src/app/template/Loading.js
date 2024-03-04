import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'


const Loading = () => {

const router = useRouter();
const [loading, setLoading] = useState(false);

useEffect(() => {
  if (router.events) {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }
}, [router.events]);



  return (
    <div>
      {loading && (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-800 opacity-75">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
          
        </div>
      )}
    </div>
  );
}

export default Loading