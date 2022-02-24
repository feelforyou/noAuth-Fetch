import { useEffect, useState } from "react";
import '../App.css'
const Countdown=()=> {
    const [counter, setCounter] = useState(60);
  
    
    useEffect(() => {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }, [counter]);
  
    return (
      <div>
        <div className="countdown">{counter}</div>
      </div>
    );
  }
  export default Countdown
