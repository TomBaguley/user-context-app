import React, { useState, useEffect } from "react";
import { useUser } from "./UserContext";

const AnimalPictureDisplay = () => {
    const { user } = useUser();
    const [url, setUrl] = useState('https://api.thecatapi.com/v1/images/search');
    const [picUrl, setPicUrl] = useState(null);

   
    // console.log(user);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(user)
                if(user === 'Tom'){
                    setUrl('https://api.thecatapi.com/v1/images/search');
                }
                else{
                    setUrl('https://api.thedogapi.com/v1/images/search');
                }
                console.log(url);
                const response = await fetch(url);
                const data = await response.json();
                setPicUrl(data[0].url);
            } catch (error) {
                console.error("Error, could not get an animal pic, ",error);
            }
        };
        fetchData();
        
    }, [user,'Tom']);
    
    return (
        <img src = {picUrl}/>
        
    );
};
export default AnimalPictureDisplay;