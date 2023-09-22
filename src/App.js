import { useState } from "react"


export default function App()
{
    const[bill,setBill]=useState(0);
    const[service,setService]=useState(0);
    const[friendService,setFriendService]=useState(0);

    function handleReset()
    {
       setBill(0);
       setService(0);
       setFriendService(0);
    }
     
    return(
        <>
            <h1>Tip Calculator</h1>
            <Bill  bill={bill} setBill={setBill} />
            <Service  service={service} setService={setService} />
            <FriendService friendService={friendService} setFriendService={setFriendService}/>
            <Output bill={bill} friendService={friendService} service={service}/>
            <Reset handleReset={handleReset}/>
            <Footer/>
        </>
    )
}

function Bill({bill,setBill})
{
    

    function handleChange(e)
    {
        setBill(Number(e.target.value))
    }

    return(
    <div>How much was the bill? <input type="text" value={bill} onChange={(e)=>handleChange(e)} /></div>
    )
}

function Service({service,setService})
{
   
     
    function handleChange(e)
    {
        setService(Number(e.target.value));
    }

    return (<div>How did you like the Service? 
            <select value={service} onChange={(e)=>handleChange(e)}>
            <option value="0">Dissatisfied(0%)</option>
            <option  value="5">It was okay(5%)</option>
            <option value="10">It was good(10%)</option>
            <option value="20">Absolutely Amazing(20%)</option>
            </select>
    </div>)
}



function FriendService({friendService,setFriendService})
{

    
   
    function handleChange(e)
    {
        setFriendService(Number(e.target.value));
    }
    return(
        <div>
            How did your friend like the service?
            <select value={friendService} onChange={(e)=>handleChange(e)} >
            <option value="0">Dissatisfied(0%)</option>
            <option value="5">It was okay(5%)</option>
            <option value="10">It was good(10%)</option>
            <option value="20">Absolutely Amazing(20%)</option>
            </select>
        </div>
    )

}


function Output({bill,service,friendService})
{
    return(
        <div>
            <h1>{`You pay $${bill + bill* ((service+friendService)/2)/100 } ( $${bill} + $${bill* ((service+friendService)/2)/100} tip )`} </h1> 
        </div>
    )
}



function Reset({handleReset})
{
    return(
         <button onClick={handleReset} >Reset</button>
    )
}

function Footer()
{
    return <footer>Made with 💓 by Fusion</footer>
}