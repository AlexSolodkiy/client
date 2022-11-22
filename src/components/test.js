import React, {useState} from "react";

export default function Test (){
    
    let btn = document.querySelector('.btnMin')
    
    const [count,setCount] = useState(0);
 

    // function resultCoutn () {
    //     if(count <= 0){
    //         btn.setAttribute('disabled','')
    //     } 
    // }
    // resultCoutn(count);

 
    return(
        <div>
            <button className="btnMin"  onClick={() => setCount(count - 1)}>-</button>
            <span>{count}</span>
		    <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}