import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';
import {createaMeme,getMemes} from "./helper/coreapicalls"
import "../styles.css"


const Base = ({ title = "X Meme", description = "New kind of Media",
}) => {
    
    const [memes,setMemes] = useState([]);
    const [values,setValues] = useState({
        name : "",
        caption :"",
        url : "",
        loading: false,
        error: "",
        createdMeme: "",
        getaRedirect: false,
        formData: ""
    })
    const [err,setErr] = useState(false);
  
    const {name,caption,url,loading,error,createdMeme,getaRedirect,formData}=values;

   const loadAllMemes = () => {
       getMemes().then(data => {
           if(data.error){
               setErr(data.error)
           }else{
               setMemes(data);
           }
       })
   }

    const preload = () => {
        setValues({ ...values,formData : new FormData() })
    }
    useEffect(() => {
        preload();
        loadAllMemes();
    }, [])

     const onSubmit = (event) => {
         event.preventDefault();
         createaMeme(formData).then(data => {
             if(data.error){
                 setValues({...values,error:data.error})
             }else{
                 setValues({
                     ...values,
                     name :"",
                     caption : "",
                     url : "",
                     createdMeme : data.name
                     
                 })
               
             }
         })
     }

    const handleChange = name=> event => {
      const  value = event.target.value
      formData.set(name,value);
      setValues({...values,[name] : value})
    }
  

 const successMessage = () => {
    <div className="alert alert-success mt-3" 
    style={{display:createdMeme ? "" : "none"}}
    >
    <h4 className="text-white">{createdMeme} created successfully</h4>
   </div> 
 }


   const myMemeForm = () => (
    <form >
    <div className="form-group">
        <h4 className=" font-weight-bold">Name</h4>
        
        <input type="text"
        className="form-control my-3"
        onChange={handleChange("name")}
        value={name}
        autoFocus
        required
        placeholder="For ex : Inception Meme"
        />
       
    </div>
    <div className="form-group form-group-lg" >
        <h4 className="font-weight-bold">Caption</h4>
        <input type="text"
        className="form-control my-3"
        onChange={handleChange("caption")}
        value={caption}
        autoFocus
        required
        placeholder="For ex : This is my first Meme"
        />
    </div>
    <div className="form-group" >
        <h4 className=" font-weight-bold">URL of Image</h4>
        <input type="text"
        className="form-control my-3"
        onChange={handleChange("url")}
        value={url}
        autoFocus
        required
        placeholder="For ex : Put your image here"
        />
    </div>
    <button  onClick={onSubmit} className="my-3 btn btn-outline-info btn-dark font-weight-bold">Push it</button>
</form>
   )

    return (
      <div>
        <div className="container-fluid m-0 p-0">
            <div className="jumbotron bg-dark text-white text-center">
                <h2 className="display-3">{title}</h2>
                <p className="lead">{description}</p>
            </div>  
        </div>

        <div>
         <h3 className="text-white text-center"> Post Your Own Meme</h3>
         <div className="row d-flex ">
           <div className="col-md-9 offset-md-2">
              {myMemeForm()} 
              {successMessage()}            
           </div>
       </div>
       </div>
       <p id="Rm" className="text-center">Recent Memes</p>
       <div id="cards-row" className="row text-center m-4 ">
           <div className="row ">
            {memes.map((meme,index)=> {
                return(
                  <div id="cards" key={index} className="col-12 mb-4">
                    
                   <Card meme={meme} />

                  </div>


                )

           })} 
           

           </div>
             
           
       </div>
        

       </div>
    
    )

    
}






export default Base;