interface InputProps {
    id: string;
    onChange: any;
    value: string;
    label: string;
    type?: string;
}
export const Input = ({
    id,
    onChange,
    value,
    label,
    type
}: InputProps) => (
    <div className="relative">
        <input
            onChange={onChange}
            type={type}
            value={value}
            id={id}
            className="
                block
                rounded-md
                px-6
                pt-6
                pb-1
                w-full
                text-md
                text-text-gray
                appearance-none
                focus:outline-none
                focus:ring-0
                peer
                border
                bg-bg-main
            "
            placeholder=" "
        />
        <label
            className="
                absolute
                text-md
                text-text-gray
                duration-150
                transform
                -translate-y-3
                scale-75
                top-4
                z-10
                origin-[0]
                left-6
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus:-translate-y-3
            "
            htmlFor={id}
        >
            {label}
        </label>
    </div>
);
