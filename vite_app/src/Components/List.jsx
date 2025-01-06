import { useState, useEffect } from "react" 
import axios from 'axios'

function List(){
    const[data,setData]=useState([])
    const[editing,setEditing]=useState(false)
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/todo/').then((res)=>{
            console.log(res.data)
            setData(res.data)
        }).catch(error=>console.log(error.message)) 
    },[])

    const EditingFun=(task)=>{
        setEditing(true)
    }



    return(
        <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Discription</th>
                </tr>
            </thead>
            <tbody>
                {data.map((value,index)=>(
                    <tr key={index}>
                        <td>{value.task}</td>
                        <td>{value.discription}</td>
                        <button type="button" class="btn btn-outline-info" onClick={()=>{EditingFun(value)}}>Edit</button>
                        <button type="button" class="btn btn-outline-danger" onClick={()=>{}}>Delete</button>  
                    </tr>
                ))}
            </tbody>

        </table>

                { editing ? <EditForm/>:null }

        </div>
    )
   

}
const EditForm=()=>{
    return(
        <form>
            <input type="text" name="task" id="task" />
            <input type="text" name="discription" id="discription" />
            <input type="submit"/>
        </form>
    )
}

export default List