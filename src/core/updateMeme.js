import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {getMemebyId,updateMeme} from "./helper/coreapicalls"
import "../styles.css"


const Base = ({match}) => {
    
    // const [memes,setMemes] = useState([]);
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

  
    const {name,caption,url,loading,error,createdMeme,getaRedirect,formData}=values;

  

    const preload = (memeId) => {
        getMemebyId(memeId).then(data => {
            if(data.error){
                setValues({...values,error:data.error})
            }else {
                setValues({
                    ...values,
                    name : data.name,
                    caption : data.caption,
                    url : data.url,
                    formData : new FormData()
                })
            }
        })
            
    }
    useEffect(() => {
        preload(match.params.memeId);
        // loadAllMemes();
    }, [])

     const onSubmit = (event) => {
         event.preventDefault();
         setValues({ ...values, error: "", loading: true })
         updateMeme(match.params.memeId,formData).then(data => {
             if(data.error){
                 setValues({...values,error:data.error})
             }else{
                 setValues({
                     ...values,
                     name :"",
                     caption : "",
                     url : ""
                     
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
    <div className="alert alert-success mt-3" >
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
    <button  onClick={onSubmit} className="my-3 btn btn-outline-info btn-dark font-weight-bold">Update</button>
</form>
   )

    return (
      <div>
        <div className="container-fluid m-0 p-0">
            <div className="jumbotron bg-dark text-white text-center">
                <h2 className="display-3">Update Your Meme Here</h2>
                <p className="lead">dasda</p>
            </div>  
        </div>
        <div className="row d-flex ">
           <div className="col-md-9 offset-md-2">
            {myMemeForm()}
            {successMessage()}
        </div>
        </div>

        </div>
    

                )

       
           

    
    

    
}




export default Base;