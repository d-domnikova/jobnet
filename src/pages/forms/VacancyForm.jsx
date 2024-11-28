import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function VacancyForm(){

    const { action, id } = useParams();
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    useEffect(() => {
       axios.get('https://localhost:6969/api/categories')
       .then(response => {
            setCategories(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);
    
    const [vacancy, setVacancy] = useState({
        title: "",
        salary: 0.0,
        description: "",
        city: "",
        region: "",
        categoryId: ""
      });

      const handleChange = (e) => {
        const value = e.target.value;
        setVacancy({
          ...vacancy,
          [e.target.name]: value
        });
      };    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            title: vacancy.title,
            description: vacancy.description,
            salary: vacancy.salary,
            location: `${vacancy.city}, ${vacancy.region}`,
            categoryId: vacancy.categoryId,
            userId: localStorage.getItem("userId")
          };
        axios.post("https://localhost:6969/api/jobs", userData).then((response) => {
            navigate("/vacancy/" + response.data.id)
          });  
        }

        if(action === "edit") {
            useEffect(() => {
                axios.get(`https://localhost:6969/api/jobs/${id}`)
                .then(response => {
                     setVacancy(response.data);
                 })
                 .catch(error => {
                     console.error(error);
                 });
             }, []);
        }

        const handleUpdateSubmit = (e) => {
            e.preventDefault();
            const userData = {
                title: vacancy.title,
                description: vacancy.description,
                salary: vacancy.salary,
                location: `${vacancy.city}, ${vacancy.region}`,
                categoryId: vacancy.categoryId
              };
            axios.put(`https://localhost:6969/api/jobs/${id}`, userData).then((response) => {
                console.log(response.data);
                navigate("/vacancy/" + response.data.id)
              });  
            }

    return(
        <div className="bg-white mx-auto py-4 w-9/12 md:w-8/12 border rounded-3xl shadow">
            <form className="md:mx-[3em] mx-[2em] mt-8 space-y-4" onSubmit={action == "create" ? handleSubmit : handleUpdateSubmit}>
            <h1 className="font-medium text-xl pb-2">{action == "create" ? "Створення" : "Редагування"} вакансії</h1>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ml-1">Назва вакансії</label>
                    <input type="text" value={vacancy.title} onChange={handleChange} name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ml-1">Пропонована зарплата</label>
                    <input type="number" value={vacancy.salary} onChange={handleChange} step=".01" name="salary" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2" placeholder="0.00" required />
                </div>
                <div>
                    <label className="block mb-2 font-medium text-gray-900">Категорія:</label>
                    <select name="categoryId" value={vacancy.categoryId} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-sky-400 block w-full p-2 hover:bg-gray-100">
                    { categories.map( category => 
                        (<option value={category.id}> {category.categoryName} </option> ))}
                    </select>                
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ml-1">Місто</label>
                    <input type="text" value={vacancy.city} name="city" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ml-1">Область</label>
                    <input type="text" value={vacancy.region} name="region" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2" required />
                </div>
                </div>
               <div>
                    <label className="block mb-2 font-medium text-gray-900">Опис вакансії:</label>
                    <textarea name="description" value={vacancy.description} onChange={handleChange} rows="30" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-sky-500 focus:border-sky-500" placeholder="Write your thoughts here..."></textarea>
                </div>
                <button type="submit" className="text-white bg-sky-400 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg w-full sm:w-auto px-10 py-2.5 text-center">Створити</button>
            </form>
        </div>
    )
}