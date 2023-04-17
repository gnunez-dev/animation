import AnimationPageTemplate from "../../component/template/AnimationPage";
import Flip from "@/component/Flip";

export default function AccordionPage(){

  return(
    <AnimationPageTemplate title='Flip'>
      <Flip/>
      <Flip/>
    </AnimationPageTemplate>
  )
}