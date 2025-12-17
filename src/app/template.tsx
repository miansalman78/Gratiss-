'use client';

import { useEffect, useState } from 'react';
import Loading from './loading';

export default function Template({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Force a 2-second loading delay on every navigation (mount)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return <>{children}</>;
}
