import React,{useContext, useState , useEffect} from 'react'
import {store} from './App';
import axios from 'axios';

const Mylist = ()=>{
    const [token , setToken]= useContext(store);
    const [data,setData] = useState(null);
    useEffect(() =>{
        axios.get('http://localhost:5000/myprofile').then(res => setData(res.data)).catch((err) => console.log(err)) 
    }, [])
    return (
        <div>
            { data && 
            <center>
                welcome to user   <br/>
                first name:{data.firstname} <br />
                <p>second name:{data.secondname}   <br/>
                email :{data.email}   <br/>
                
                </p>
            </center>
            }
        </div>
    )
}
export default Mylist;