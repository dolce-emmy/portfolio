'use client'
import React from 'react'
import {useState, useEffect} from 'react'

const useThemeSwitcher = () => {

const  preferDarkQuery = "(prefers-color-scheme: dark)";
const [mode, setMode] = useState("");
  
useEffect(() => {

    // here we are using media query to check if the user has set the theme to dark or light in their system settings so that we can set the theme accordingly to the user's system settings
    const mediaQuery = window.matchMedia(preferDarkQuery);
   
    // here we are using the local storage to check if the user has set the theme to dark or light so that we can persist the theme even after the user refreshes the page
    const userPref = window.localStorage.getItem("theme");
    
    const handleChange = () => {
      
        if (userPref) {
            let check = userPref === "dark" ? "dark" : "light";
            setMode(check);
            if (check === "dark") {
                document.documentElement.classList.add("dark");
            }else {
                document.documentElement.classList.remove("dark");
            }
            
        } else {
            let check = mediaQuery.matches ? "dark" : "light";
            setMode(check);
            if (check === "dark") {
                document.documentElement.classList.add("dark");
            }else {
                document.documentElement.classList.remove("dark");
            }
        }

    } 
    
    // here we are adding an event listener to the media query to check if the user has changed the theme in their system settings, we are also calling the handleChange function to set the theme accordingly
    // change here means that the user has changed the theme in their system settings
    mediaQuery.addEventListener("change", handleChange);
    
    return () => {
        mediaQuery.removeEventListener("change", handleChange);
    }

},[])


useEffect(() => {

if (mode === "dark") {
    window.localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
    

} else {
    window.localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
    
}

}, [mode])

return [mode, setMode]

}

export default useThemeSwitcher