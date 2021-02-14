import {API} from "../../backend"

export const createaMeme = (meme) => {
    return fetch(`${API}/memes`,{
       method :"POST",
       headers : {
        Accept:"application/json"
       },
       body : meme,

    }).then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const getMemes = () => {
    return fetch(`${API}/memes`,{
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const getMemebyId = memeId => {
    return fetch(`${API}/memes/${memeId}`,{
        method : "GET"
    }).then(response => {
        return response.json()
    })
    .catch(err => console.log(err));
}

export const updateMeme = (memeId,meme)=> {
    return fetch(`${API}/memes/${memeId}`, {
        method : "PUT",
        headers : {
            Accept : "application/json"
           
        },
        body : meme,
    }).then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
} 
