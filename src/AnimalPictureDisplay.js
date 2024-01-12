import React, { useState, useEffect } from "react";
import { useUser } from "./UserContext";
import { wait } from "@testing-library/user-event/dist/utils";

const AnimalPictureDisplay = () => {
    const {user} = useUser();
    const [url, setUrl] = useState('');
    const [picUrl, setPicUrl] = useState(null);
    const [tempUser,setTempUser] = useState(null);

   
    // console.log(user);
    

    useEffect(() => {
        const updateUrl = () => {
            if(user == 'Tom'){
                setUrl('https://api.thecatapi.com/v1/images/search');
            }
            else{
                setUrl('https://api.thedogapi.com/v1/images/search');
            }
        };
        updateUrl();
    }, [{user}]);

    //needed user to be in {} ??

    useEffect(() => {
        const fetchData = async () => {
            
            try {
                console.log(user)
                console.log(url);
                const response = await fetch(url);
                const data = await response.json();
                setPicUrl(data[0].url);
            } catch (error) {
                console.error("Error, could not get an animal pic, ",error);
            }
        };
        fetchData();
    }, [url]);


    //made a useEffect method that listens to user for the url rather than the fetch so the url will constantly update but 
    //the value won't change unless the user changes so the fetch only runs once per user.

    
    return (
        <img src = {picUrl}/>
        
    );
};
export default AnimalPictureDisplay;