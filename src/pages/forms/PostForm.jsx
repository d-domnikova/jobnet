import { useParams } from "react-router-dom";
import FormField from "/src/components/pageComponents/FormField";

export default function PostForm() {
    const { action } = useParams(); // Expecting "create" or "edit"

    return (
        <div className="bg-white mx-auto py-4 w-9/12 md:w-8/12 border rounded-3xl shadow">
            <form
                className="md:mx-[3em] mx-[2em] mt-8 space-y-4"
                method={action === "create" ? "POST" : "PUT"}
            >
                <h1 className="font-medium text-xl pb-2">
                    {action === "create" ? "Створення" : "Редагування"} блогу
                </h1>

                {/* Title */}
                <FormField name="Назва" id="title" type="text" placeholder="Введіть назву блогу" />

                {/* Banner URL */}
                <FormField name="URL банера" id="bannerUrl" type="text" placeholder="https://example.com/image.jpg" />

                {/* Content */}
                <div>
                    <label htmlFor="content" className="block mb-2 font-medium text-gray-900">
                        Контент:
                    </label>
                    <textarea
                        id="content"
                        rows="10"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-sky-500 focus:border-sky-500"
                        placeholder="Введіть контент блогу..."
                    ></textarea>
                </div>

                {/* Tag */}
                <FormField name="Тег" id="tag" type="text" placeholder="Введіть тег блогу" />

                {/* Author ID */}
                <FormField
                    name="ID автора"
                    id="authorId"
                    type="number"
                    placeholder="Введіть ID автора"
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    className="text-white bg-sky-400 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg w-full sm:w-auto px-10 py-2.5 text-center"
                >
                    {action === "create" ? "Створити" : "Оновити"}
                </button>
            </form>
        </div>
    );
}
