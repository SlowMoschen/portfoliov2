import { ButtonHTMLAttributes } from "react"
import './styles/Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'contained' | 'outlined' | 'text'
    styles: 'primary' | 'secondary' | 'accent'
    size: 'sm' | 'md' | 'lg'
    children: React.ReactNode
}

export default function Button({ variant, styles, size, children, ...props }: ButtonProps) {
    return (
        <button className={`button button-${styles} button-${variant} button-${size}`} {...props}>
            {children}
        </button>
    )

}