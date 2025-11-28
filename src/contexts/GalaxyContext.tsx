import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

const STORAGE_KEY = "galaxy-enabled";

interface GalaxyContextType {
    galaxyEnabled: boolean;
    setGalaxyEnabled: (enabled: boolean) => void;
    toggleGalaxy: () => void;
}

const GalaxyContext = createContext<GalaxyContextType | undefined>(undefined);

export const GalaxyProvider = ({ children }: { children: ReactNode }) => {
    const [galaxyEnabled, setGalaxyEnabled] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved !== null ? saved === "true" : true;
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, galaxyEnabled.toString());
    }, [galaxyEnabled]);

    const toggleGalaxy = () => setGalaxyEnabled((prev) => !prev);

    return (
        <GalaxyContext.Provider value={{ galaxyEnabled, setGalaxyEnabled, toggleGalaxy }}>
            {children}
        </GalaxyContext.Provider>
    );
};

export const useGalaxy = () => {
    const context = useContext(GalaxyContext);
    if (!context) {
        throw new Error("useGalaxy must be used within a GalaxyProvider");
    }
    return context;
};
