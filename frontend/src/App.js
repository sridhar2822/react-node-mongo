import {useEffect,useState} from "react"

function App(){

const [items,setItems]=useState([])
const [name,setName]=useState("")

useEffect(()=>{
fetch("http://localhost:5000/items")
.then(res=>res.json())
.then(data=>setItems(data))
},[])

const addItem=()=>{
fetch("http://localhost:5000/items",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({name})
})
.then(()=>window.location.reload())
}

return(
<div>
<h1>DevOps Project</h1>

<input
value={name}
onChange={e=>setName(e.target.value)}
/>

<button onClick={addItem}>
Add
</button>

<ul>
{items.map(i=>(
<li key={i._id}>{i.name}</li>
))}
</ul>

</div>
)
}

export default App
