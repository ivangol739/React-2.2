import { useState } from "react";
import products from "../data/products";
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";
import CardView from "./CardView";


export default function Store() {
  const [icon, setIcon] = useState('view_module');
  const isModules = icon === 'view_module';

  function handleSwitch() {
    const nextIcon = isModules ? 'view_list' : 'view_module';
    setIcon(nextIcon);
  }

  return (
    <>
      <div className="header">
        <IconSwitch icon={icon} onSwitch={handleSwitch}/>
      </div>

      <div className="body">
        {
          isModules ?  <ListView items={products} /> : <CardView cards={products} />
        }
      </div>
    </>
  )
}