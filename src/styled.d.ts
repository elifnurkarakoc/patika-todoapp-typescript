import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        borderRadius: string;
        colors: {
            main: string;
            primary: string;
            secondary: string;
            white: string;
            gray: string;
            blue: string;
            indigo: string;
            purple: string;
            pink: string;
            red: string;
            orange: string;
            yellow: string;
            border: string;
            green:string;
            info:string;
            danger:string;
        }
    }
}