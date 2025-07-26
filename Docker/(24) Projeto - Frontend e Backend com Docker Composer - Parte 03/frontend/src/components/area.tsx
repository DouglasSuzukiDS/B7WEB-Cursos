"use client"

import { useState } from 'react';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const Area = () => {
    const [name, setName] = useState('');

    const handleGetName = async () => {
        const req = await fetch(`${apiUrl}/test`);
        const data = await req.json();
        setName('');
        if (data.name) setName(data.name);
    }

    return (
        <div className="w-full max-w-sm">
            <div className="w-full p-10 border border-white rounded-lg text-center text-4xl text-white">
                {name !== '' ? name : '---'}
            </div>
            <button
                onClick={handleGetName}
                className="w-full mt-4 py-5 border border-white rounded-lg text-center"
            >
                Consultar
            </button>
        </div>
    );
}