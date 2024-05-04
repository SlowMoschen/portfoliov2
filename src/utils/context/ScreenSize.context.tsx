import { ReactNode, createContext, useState } from "react"

interface ScreenSize {
    width: number
    height: number
}

interface ScreenSizeContextProviderProps {
    children?: ReactNode
}

export const ScreenSizeContext = createContext<ScreenSize>({
    width: window.innerWidth,
    height: window.innerHeight,
})

export function ScreenSizeContextProvider({ children }: ScreenSizeContextProviderProps) {
    const [screenSize, setScreenSize] = useState<ScreenSize>({
        width: window.innerWidth,
        height: window.innerHeight,
    })


    window.addEventListener("resize", () => {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    })

    return (
        <ScreenSizeContext.Provider value={screenSize}>
            {children}
        </ScreenSizeContext.Provider>
    )
}