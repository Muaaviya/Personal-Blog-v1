import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from "react";

export const backgroundPresets = [
    {
        name: "Purple Silk",
        color: "#5e008a",
        speed: 5,
        scale: 1,
        noiseIntensity: 1.5,
        rotation: 0,
    },
    {
        name: "Ocean Wave",
        color: "#4A90E2",
        speed: 3,
        scale: 1.2,
        noiseIntensity: 2,
        rotation: 0.5,
    },
    {
        name: "Sunset Glow",
        color: "#E2774A",
        speed: 7,
        scale: 0.8,
        noiseIntensity: 1,
        rotation: -0.3,
    },
    {
        name: "Forest Dream",
        color: "#5E9B7E",
        speed: 4,
        scale: 1.5,
        noiseIntensity: 1.8,
        rotation: 0.2,
    },
];

const STORAGE_KEY = "background-preset";

interface BackgroundPresetContextType {
    currentPreset: number;
    setCurrentPreset: (index: number) => void;
}

const BackgroundPresetContext = createContext<
    BackgroundPresetContextType | undefined
>(undefined);

export const BackgroundPresetProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [currentPreset, setCurrentPreset] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? parseInt(saved, 10) : 0;
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, currentPreset.toString());
    }, [currentPreset]);

    return (
        <BackgroundPresetContext.Provider
            value={{ currentPreset, setCurrentPreset }}
        >
            {children}
        </BackgroundPresetContext.Provider>
    );
};

export const useBackgroundPreset = () => {
    const context = useContext(BackgroundPresetContext);
    if (!context) {
        throw new Error(
            "useBackgroundPreset must be used within a BackgroundPresetProvider"
        );
    }
    return context;
};
