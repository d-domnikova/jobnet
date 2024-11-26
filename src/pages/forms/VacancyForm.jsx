import FormField from "/src/components/pageComponents/FormField";

export default function VacancyForm(){

    return(
        <div className="bg-white mx-auto py-4 w-9/12 md:w-8/12 border rounded-3xl shadow">
            <form className="md:mx-[3em] mx-[2em] mt-8 space-y-4" method="POST">
            <h1 className="font-medium text-xl pb-2">Створення вакансії</h1>
                <FormField name="Назва вакансії" id="Title" type="text" />
                <FormField name="Пропонована зарплата" id="Salary" type="text" step=".01"/>
                <div>
                    <label for="Category" className="block mb-2 font-medium text-gray-900">Категорія:</label>
                    <select id="Category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-400 focus:border-sky-400 block w-full p-2 hover:bg-gray-100">
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>                
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <FormField name="Місто" id="city" type="text"/>
                    <FormField name="Область" id="region" type="text"/> 
                </div>
               <div>
                    <label for="Description" className="block mb-2 font-medium text-gray-900">Опис вакансії:</label>
                    <textarea id="Description" rows="30" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-sky-500 focus:border-sky-500" placeholder="Write your thoughts here..."></textarea>
                </div>
                <button type="submit" className="text-white bg-sky-400 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg w-full sm:w-auto px-10 py-2.5 text-center">Створити</button>
            </form>
        </div>
    )
}