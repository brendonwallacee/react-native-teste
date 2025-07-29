import { Button } from "@/components/Button";

interface ButtonNumbersProps {
    valor: string
}

export function ButtonNumbers({ valor }: ButtonNumbersProps) {
    return (
        <Button
            label={valor}
            className="
                w-[100px] 
                h-[70px] 
                rounded-lg
                bg-white 
                justify-center 
                itens-center
                border-2 border-gray-200
            "
            labelClasses="font-semibold text-[30px] text-blue-600" />
    )
}