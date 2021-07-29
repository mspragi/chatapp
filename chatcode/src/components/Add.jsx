import React,{useState} from 'react';
import { Link } from 'react-router-dom'

const Add=()=>{
const [name,setName]=useState('');
const [group, setGroup]=useState('');

    return(
<div className="Container">
    <div className="InnerContainer">
<h1 className="head">Add</h1>
<div><input type="text" placeholder="Name" className="Addinput" onChange={(e)=>setName(e.target.value)}/></div>
<div><input type="text" placeholder="group" className="Addinput mt-20 f" onChange={(e)=>setGroup(e.target.value)}/></div>
    </div>

</div>
    )
}
export default Add;