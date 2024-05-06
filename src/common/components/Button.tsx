import { ButtonHTMLAttributes } from "react"
import './styles/Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'contained' | 'outlined' | 'text'
    styles: 'primary' | 'secondary' | 'accent'
    size: 'sm' | 'md' | 'lg'
    children: React.ReactNode
    open_in_new?: boolean
}

export default function Button({ variant, styles, size, children, open_in_new = false, ...props }: ButtonProps) {
    return (
        <button className={`button button-${styles} button-${variant} button-${size}`} {...props}>
            {children}
            {open_in_new && <span className="material-symbols-outlined">open_in_new</span>}
        </button>
    )

}