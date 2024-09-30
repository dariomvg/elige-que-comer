"use client"; 
import { getCategory, getFoods, getSearchFood } from "@/helpers/getFoods";
import { useEffect, useState } from "react"


export const useFoods = () => {
    const [foods, setFoods] = useState([]); 
    const [selectFood, setSelectFood] = useState("");
    const [pages, setPages] = useState(10);

    const getUniqueFood = async (food) => {
        const searchFood = await getSearchFood(food); 
        setFoods(searchFood); 
    };

    const getCategoryFood = async (category) => {
        const searchCategory = await getCategory(category); 
        setFoods(searchCategory);
    };

    const changePage = async () => {
        setPages(pages+7);
    };

    useEffect(() => {
        const getAllFoods = async () => {
            const localFoods = await getFoods();
            setFoods(localFoods);  
        }
        getAllFoods(); 
    }, []);
    

    return { foods, getUniqueFood, getCategoryFood, selectFood, setSelectFood, changePage, pages };
};
