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
            :disabled {
                background-color: #6B7280;
                cursor: auto;
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

        input[type="checkbox"] {
            -webkit-appearance: none;
            appearance: none;
            background: none;
            box-shadow: inset 0 0 0 0.125rem #666;
            height: 1rem;
            width: 1rem;
            display: inline-block;
            border-radius: 0.125rem;
            cursor: pointer;
            margin-right: 0.5rem;
            position: relative;
            top: 6px;

            &:active {
                box-shadow: inset 0 0 0 0.125rem #2962ff;
            }

            &:checked {
                background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0,0H24V24H0Z" fill="none"/><path d="M19,3H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3ZM10,17,5,12l1.41-1.41L10,14.17l7.59-7.59L19,8Z" fill="%232962ff"/></svg>');
                background-position: center;
                box-shadow: none;

                &:active {
                opacity: 0.9;
                }
            }

            // add nice hover effect input
            &::before {
                content: "";
                display: inline-block;
                height: 100%;
                width: 100%;
                background-color: transparentize(#2962ff, 1);
                position: absolute;
                border-radius: 50%;
                transform: scale(0.5);
                transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
                will-change: transform background-color;
            }

            &:hover::before {
                background-color: transparentize(#2962ff, 0.9);
                transform: scale(2.25);
            }
        }

        .board {
            width: 100%;
        }


    `
);