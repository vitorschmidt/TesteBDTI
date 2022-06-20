import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --dark-blue: #293241;
        --orange: #EE6C4D;
        --ligth-blue: #3D5A80;
        --ligth-blue-1: #e0fbfc;
        --green: #06d6a0;
        --red: #9e2a2b;
    }
    
    body {
        background-color: var(--dark-blue);
        font-family: 'Inter', sans-serif;
    }

    h1 {
        font-weight: 700;
    }

    button {
        cursor: pointer;   
        font-weight: 700;
        font-size: 1.5rem;
        color: #fff;

        background-color: var(--orange);
        border: none;
    }

    button:hover {
        background-color: var(--ligth-blue-1);
        color: var(--orange);
    }

    a {
        color: #fff;
        text-decoration: none;
    }

`;
