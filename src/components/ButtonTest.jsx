import Button from "./ButtonTest/Button.jsx";
import HomeIcon from "./ButtonTest/HomeIcon.jsx";
import PlusIcon from "./ButtonTest/PlusIcon.jsx";
import './ButtonTest/button.css';

export default function ButtonTest() {

    return (
        <>
         <section>
           <h2>Filled Button (Default)</h2>
           <p>
             <Button>Default</Button>
           </p>
           <p>
             <Button>Filled (Default)</Button>
           </p>
         </section>
         <section>
           <h2>Button with Outline</h2>
           <p>
             <Button mode="outline">Outline</Button>
           </p>
         </section>
         <section>
           <h2>Text-only Button</h2>
           <p>
             <Button mode="text">Text</Button>
           </p>
         </section>
         <section>
           <h2>Button with Icon</h2>
           <p>
             <Button Icon={HomeIcon}>Home</Button>
           </p>
           <p>
             <Button Icon={PlusIcon} mode="text">
               Add
             </Button>
           </p>
         </section>
         <section>
           <h2>Buttons Should Support Any Props</h2>
           <p>
             <Button mode="filled" disabled>
               Disabled
             </Button>
           </p>
           <p>
             <Button onClick={() => console.log('Clicked!')}>Click me</Button>
           </p>
         </section>
       </>
     );
}
