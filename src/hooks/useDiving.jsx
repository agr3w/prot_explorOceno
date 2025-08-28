import { useEffect, useState } from 'react';

export default function useDiving(threshold = 100) {
    const [diving, setDiving] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setDiving(window.scrollY > threshold);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [threshold]);

    return diving;
}