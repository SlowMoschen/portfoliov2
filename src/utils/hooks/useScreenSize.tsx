import { useContext } from "react";
import { ScreenSizeContext } from "../context/ScreenSize.context";

export function useScreenSize() {
    const { width, height } = useContext(ScreenSizeContext)

    return { screenWidth: width, screenHeight: height }
}