import { url_base, url_category, url_name, url_random } from "@/utils/urls"

export const getFoods = async () => {
    const response = await fetch(url_base); 
    const res = await response.json(); 
    return res.meals; 
}

export const getCategory = async (category) => {
    const response = await fetch(`${url_category}${category}`); 
    const res = await response.json(); 
    return res.meals;
}

export const getSearchFood = async (food) => {
    const response = await fetch(`${url_name}${food}`); 
    const res = await response.json(); 
    return res.meals; 

}

export const getRandomFood = async () => {
    const response = await fetch(url_random); 
    const res = await response.json(); 
    return res.meals[0]; 
};
