import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay = 0 }: { text: string, delay?: number }) => {
    const [index, setIndex] = useState<null | number>(null);

    useEffect(() => {
        setTimeout(() => {
            setIndex(0)
        }, delay);
    }, [])

    useEffect(() => {
        if (index !== null && index < text.length) {
            setTimeout(() => setIndex((prev) => (prev as number) + 1), Math.random() * 200);
        }
    }, [index]);

    return <div className="border-r overflow-hidden whitespace-pre animate-blink-caret inline">{text.slice(0, index||0)}</div>;
};

export default Typewriter;