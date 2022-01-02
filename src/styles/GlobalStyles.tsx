import { createGlobalStyle, css } from 'styled-components';

interface Props {
    theme: string
}

export const GlobalStyles = createGlobalStyle(
    (props: Props) => css`
        :root {
            --dark: #000000;
            --background-primary-dark: #1e1f24;
            --background-secondary-dark: #20273b;
            --background-tertiary-dark: #121216;
            --background-quaternary-dark: #262b3a;
            --color-primary-dark: #cacaca;
            --color-secondary-dark: #bec0db;

            --background-primary-light: #b8b8b8;
            --background-secondary-light: #bec0db;
            --background-secondary-light: #bec0db;
            --color-primary-light: #101114;
            --color-secondary-light: #20273b;
        }

        /* width */
        ::-webkit-scrollbar {
            width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: transparent;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: var(--background-tertiary-${props.theme});
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: var(--${props.theme});
        }

        body {
            background-color: var(--background-secondary-${props.theme});
            color: var(--color-primary-${props.theme});
        }

        .App {
            text-align: center;
        }

        .App-logo {
            height: 40vmin;
            pointer-events: none;
        }

        .App-header {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: var(--color-primary-${props.theme});
        }

        .navbar {
            position: fixed;
            left: 0;
            top: 0;
            background-color: var(--background-primary-${props.theme});
            box-shadow: 0 10px 20px var(--background-primary-${props.theme});
            display: inline-block;
            width: 100%;
            font-size: 18px;
            height: 60px;
            .navbar-left {
                height: 100%;
                vertical-align: middle;
                padding-top: 10px;
                float: left;
                .navbar-item {
                    margin: 0;
                    display: inline-block;
                    vertical-align: middle;
                    padding: 0 10px;
                }
            }
            .navbar-right {
                height: 100%;
                vertical-align: middle;
                padding-top: 10px;
                float: right;
                .navbar-item {
                    vertical-align: middle;
                    padding: 10px;
                }
            }
        }
        .navbar-content {
            position: relative;
            top: 0;
            left: 0;
            margin: 0;
            width: 100%;
            height: 80px;            
        }
        .navbar-logo {
            height: 54px;
            vertical-align: middle;
            position: absolute;
            top: 5px;
            left: 50%;
            transform: translate(-50%, 0);
        }

        .toggle-theme {
            position: relative;
            display: inline-block;
            
            .switch-text {
                margin: 8px;
                vertical-align: middle;
            }
        }
        .language {
            position: relative;
            display: inline-block;
            vertical-align: middle;

            select {
                background-color: var(--background-secondary-${props.theme});
                color: var(--color-secondary-${props.theme});
            }
        }

        .test {
            height: 500px;
        }

    `
);