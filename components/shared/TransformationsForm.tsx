"use client"
import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { transformationTypes } from "@/constants";
import ChatInterface from "@/components/shared/ChatInterface";

const TransformationPage = () => {
    const router = useRouter();
    const params = useParams(); //
    const type = params.type as keyof typeof transformationTypes;
    const transformation = transformationTypes[type];

    return (
        <>
            {transformation?.type === 'openai' && (
                <div className="w-full">
                    <ChatInterface  />
                </div>
            )}
        </>
);
};

export default TransformationPage;
