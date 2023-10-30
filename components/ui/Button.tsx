import { TbLoaderQuarter } from 'react-icons/tb';

interface ButtonProps {
    label: string;
    onClick?: any;
    color: string;
    appendIcon: any;
    type: any;
    state: boolean;
}
export const Button = ({
    label,
    color,
    appendIcon,
    type,
    onClick,
    state
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
        {state ? (
            <TbLoaderQuarter size={24} className="animate-spin"/>
        ) : (
            <>
                {label}
                {appendIcon}
            </>
        )}
    </button>
);
