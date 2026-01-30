import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Error404 } from "@/components/ui/404-error-page"

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);

    return (
        <Error404
            postcardImage="https://media.assettype.com/deccanherald%2F2024-04%2F45f663e0-0182-47b3-a4e8-17378a9e1d81%2FPTI04_18_2024_000227A.jpg"
            postcardAlt="New York City Postcard with Statue of Liberty"
            curvedTextTop="The General Intelligence"
            curvedTextBottom="of New York"
            heading="(404) Looks like the page you're looking for got lost somewhere."
            subtext="But hey — in Mumbai, even the unexpected detours lead somewhere."
            backButtonLabel="Back to Home"
            backButtonHref="/"
        />
    );
};

export default NotFound;

