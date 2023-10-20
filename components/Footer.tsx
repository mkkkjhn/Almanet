export const Footer = () => {
    return (
        <>
            <div
                className="
                    flex
                    items-center
                    mx-auto
                    my-2
                    text-sm
                    font-normal
                    text-controls-dark-gray
                    opacity-40
                    h-max
                "
            >
                <span
                    className="
                        mx-0.5
                    "
                >
                    Copyright © 2023 Almanet.com.
                </span>
                <a
                    className="
                        mx-0.5
                        cursor-pointer
                        hover:opacity-80
                        transition
                    "
                >
                    Private policy
                </a>
            </div>
        </>
    );
};
