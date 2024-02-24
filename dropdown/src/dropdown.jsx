import { useState } from "react";
 

function Dropdown(){

    const [open ,setOpen]=useState(false);
    const items= ["Cars","Bikes","Truck","Auto","Others"];

    // function click(){
    //     Setopen(!open);
    // }

    const itemclick=(item)=>{
        setOpen(false);
        console.log(item);
    }

    return(
        <>
         
            <h1 className="heading">Should You Use a Dropdown ?</h1>
                <div className="dropdown"  onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}>
                    <button className="button1">Dropdown
                    {open?  <img className="imagedp" src="https://cdn-icons-png.flaticon.com/128/2961/2961937.png"/>:<img className="imagedp2" src="https://cdn-icons-png.flaticon.com/128/11419/11419206.png"/>}  
                    </button> 
                {open &&<ul className="dplist">
                    {items.map((item)=><li className="dpitem" onClick={()=>itemclick(item)}>{item}</li>)} 
                </ul>}
                
                </div>
         


        
        </>
    )
}

export default Dropdown;