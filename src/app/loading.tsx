'use client';
import React from 'react';
import Image from 'next/image';

const LoadingPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="flex items-center">
                <Image
                    src='/gorrocheff.png'
                    alt="Loading"
                    width={50}
                    height={50}
                    className="animate-spin"
                />
            </div>

            <div className="text-2xl font-semibold text-white mt-4">
                {Array.from("Loading").map((char, index) => (
                    <span
                        key={index}
                        className="inline-block"
                        style={{ animation: `fadeIn 0.5s ${index * 0.1}s forwards` }}
                    >
                        {char}
                    </span>
                ))}
            </div>


            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default LoadingPage;
