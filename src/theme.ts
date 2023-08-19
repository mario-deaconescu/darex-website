import {extendTheme} from "@mui/joy";

export const theme = extendTheme({
    colorSchemes: {
        dark: {
            palette: {
                primary: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    200: '#fed7aa',
                    300: '#fdba74',
                    400: '#fb923c',
                    500: '#f97316',
                    600: '#ea580c',
                    700: '#c2410c',
                    800: '#9a3412',
                    900: '#7c2d12',
                },
                neutral: {
                    50: '#161e2e',
                    100: '#2f3e5e',
                    200: '#526484',
                    300: '#78839a',
                    400: '#a4a9b3',
                    500: '#cdd2d9',
                    600: '#e4e7eb',
                    700: '#f1f2f4',
                    800: '#f5f6f7',
                    900: '#f7f8fa',
                },
                text: {
                    primary: '#fff',
                    secondary: '#fff',
                }
            }
        }
    },
    fontFamily: {
        body: 'Raleway, var(--joy-fontFamily-fallback)',
        display: '"Red Hat Display", var(--joy-fontFamily-fallback)',
    },
})
