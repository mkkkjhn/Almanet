interface ButtonProps {
    label: string;
    onClick?: any;
    color: string;
    appendIcon: any;
    type: any;
}
export const Button = ({
    label,
    color,
    appendIcon,
    type,
    onClick
}: ButtonProps) => (
    <button
        onClick={onClick}
        type={type}
        style={{ backgroundColor: color }}
        className="
            xl:w-[280px]
            w-full
            h-14
            text-white
            flex
            justify-center
            items-center
            rounded-lg
            sm:mb-0
            mb-6
        "
    >
        {label}
        {appendIcon}
    </button>
);
