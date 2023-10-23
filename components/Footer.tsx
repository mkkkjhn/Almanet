interface FooterProps {
    page: {
        home: {
            title1: string,
            description1: string,
            title2: string,
            description2: string,
            title3: string,
            description3: string,
            title4: string,
            description4: string,
            title5: string,
            description5: string,
            button: string,
            privatePolicy: string
        }
    }
}

export const Footer = ({ page }: FooterProps) => (
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
                {page.home.privatePolicy}
            </a>
        </div>
    </>
);
