import { createGlobalStyle } from 'styled-components';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
})


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #ecc18d;
  }
  
  body {
    margin: 0;
    padding: 0;
    background: #49426c;
    font-family: ${montserrat.style.fontFamily};
  }
`;
 
export default GlobalStyle;