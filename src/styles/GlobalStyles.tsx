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

        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: calc(10px + 2vmin);
            color: var(--color-primary-${props.theme});
        }
        .home {
            width: 80%;
            padding-left: 20%;
        }
        .home>* {
            display: inline-block;
        }
        .left-menu {
            position: fixed;
            top: 0;
            left: 0;
            padding-top: 60px;
            width: 20%;
        }
        .main {
            width: 60%;
        }
        .note-viewer {
            width: 40%;
            .container {
                margin-right: 10px;
            }
        }

        .float-right {
            display: block;
            float: right;
            position: relative;
            margin-right: 16px;

            >* {
                display: inline-block;
            }
        }

        .btn {
            background-color: var(--background-tertiary-${props.theme});
            border: 1px solid transparent;
            margin: 2px;
            border-radius: 1rem;
            box-sizing: border-box;
            color: var(--color-primary-${props.theme});
            cursor: pointer;
            padding: .75rem 1.2rem;
            text-align: center;
            text-decoration: none #6B7280 solid;
            text-decoration-thickness: auto;
            transition-duration: .2s;
            transition-property: background-color,border-color,color,fill,stroke;
            transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            width: auto;

            &-small {
                margin: 10px;
                padding: 2px 12px;
            }

            :hover {
                background-color: #374151;
            }

            :focus {
                box-shadow: none;
                outline: 2px solid transparent;
                outline-offset: 2px;
            }
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
                    display: inline-block;
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