import Accordion from "@/component/Accordion";
import AnimationPageTemplate from "../../component/template/AnimationPage";

export default function AccordionPage(){

  return(
    <AnimationPageTemplate title='Accordion'>
      <Accordion
        title='Hola hola'
        content={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        }
      />
      <Accordion
        title='Hola hola'
        content={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        }
      />
    </AnimationPageTemplate>
  )
}