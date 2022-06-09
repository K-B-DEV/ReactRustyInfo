import { createGlobalStyle } from "styled-components";
import Rust from "../fonts/Rust.ttf";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "Rust";
    src: local("Rust"),
    url(${Rust}) format("truetype");
    font-weight: normal;
}
*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden !important;
        scroll-behavior: smooth;
        &::-webkit-scrollbar{
            width: 0.5rem !important;
            /* background-color: #0D0D0D !important; */
            border: 1px solid white !important;
            /* background-image: url("../images/rustbg.png"); */
        }
        &::-webkit-scrollbar-thumb{
            background-color: white !important;
        }
        p{
            font-family: 'Georama', sans-serif;
        }
        
        /* text-shadow: 1px 1px black; */
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem !important;
            background-color: #0D0D0D !important;
            border: 1px solid white !important;
        }
        &::-webkit-scrollbar-thumb{
            background-color: white !important;
        }
    }
    body{
        margin: 0;
        padding: 0;
        /* background-color: #0D0D0D; */
        
    }
    .MuiDataGrid-main{
        overflow:hidden !important;
    }
    .MuiDataGrid-root{
        background-color: gainsboro !important;
        color: black !important;
        border: 1px solid black !important;
    }
    .MuiTablePagination-root{
        color: black !important;
    }
    .MuiDataGrid-window{
        overflow:hidden !important;
    }
    .MuiDataGrid-cell{
        border-bottom: 1px solid #000000 !important;
    }
    .MuiDataGrid-columnsContainer{
        border-bottom: 1px solid #000000 !important;
    }
    .MuiDataGrid-iconSeparator{
        color: black;
    }
    .MuiDataGrid-footerContainer{
        border-top: 1px solid black !important;
    }
    .MuiBottomNavigation-root{
        border-radius: .5rem !important;
        border: 1px solid black !important;
        justify-content: space-around !important;
        background-color: gainsboro !important;
    }
    /* .MuiDataGrid-columnHeaderWrapper{
        background-color: #f0eeee !important;
    } */
    .Mui-even{
        background-color: #f0eeee !important;
    }
    .MuiButtonBase-root{
        overflow:hidden;
    }
    
    /* .MuiSlider-root{
        padding-left: 1%;
        padding-right: 1%;
    } */
    .MuiDataGrid-columnHeaderTitle{
        width: 90% !important;
        text-overflow: unset !important;
    }
    a{
        text-decoration: none !important;

        &:focus, &:hover, &:visited, &:link, &:active {
            text-decoration: none !important;
        }
    }

    /* .Active {
        color: #3f51b5;
    } */
`;

export default GlobalStyles;
