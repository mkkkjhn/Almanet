type EventParams = {
    action: string;
    category: string;
    label: string;
    value?: number;
};
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

export const pageview = (url: string): void => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url
    });
};

export const event = ({
    action,
    category,
    label,
    value
}: EventParams): void => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value
    });
};
