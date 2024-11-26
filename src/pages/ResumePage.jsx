import Telegram from "../icons/Telegram";
import Viber from "../icons/Viber";
import Inst from "../icons/Inst";
import HeartOutline from "../icons/HeartOutline";
import ReportForm from "../components/modals/ReportForm";
import Tag from "/src/components/Tag";

export default function ResumePage(props){
    return(
       <div className="mx-[5em] md:mx-[7em] max-w-4xl">
       <a href="/resumes" className="flex mx-4 font-semibold text-lg text-gray-500 hover:underline">
          <svg className="w-3 h-3 rotate-180 inline mt-2 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
          Всі резюме</a>
       <div className="block px-12 py-6 bg-white border border-gray-200 rounded-3xl shadow mt-6 mb-10">
       <div className="flex justify-between">
          <div className="md:space-y-1.5 mb-3">
            <h5 className="mb-2 md:text-3xl text-2xl pt-4 font-bold text-gray-900">Ім'я Призвище</h5>
            <p className="font-semibold md:text-xl text-gray-900 py-1">Спеціалізація</p>
            <p className="font-semibold md:text-xl text-gray-900 py-1">Місто, Область</p>
            <div className="md:flex space-x-4">
            <p className="font-semibold md:text-xl text-gray-900 py-1 pb-4">+380-000-000-00-00</p>
            <div className="md:pt-2 flex space-x-3">
                <Viber color="black"/>
                <Telegram color="black"/>
                <Inst color="black"/>
            </div>
            </div>
        </div>
        <div className="relative">
          <img className="p-5 rounded-t-lg max-h-[24em]" src="https://placehold.co/100x125" alt="Vacancy image" />
          <ReportForm />
        </div>
      </div>
      <div className="max-w-xl grid gap-1 grid-cols-2 md:grid-cols-4">
        <Tag url="#" text="Назва тегу"/>
        <Tag url="#" text="Назва тегу"/>
        <Tag url="#" text="Назва тегу"/>
        <Tag url="#" text="Назва тегу"/>
        <Tag url="#" text="Назва тегу"/>
        <Tag url="#" text="Назва тегу"/>
      </div>
      <h5 className="mb-2 text-2xl pt-8 font-bold text-gray-900">Опис послуги</h5>
      <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin, turpis quis sagittis vehicula, sem erat semper mauris, nec rutrum turpis dui ac ante. Etiam imperdiet libero sed felis tempus scelerisque eget et urna. Vivamus fermentum tortor lorem, id luctus mauris volutpat efficitur.</p>
      <div className="flex space-x-3 md:space-x-6 py-6">
      <button className="text-white md:text-lg bg-sky-400 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-xl px-5 text-center">Запропонувати роботу</button>
      <button className="flex font-semibold text-lg rounded-xl px-3 py-2.5 hover:bg-gray-200"><span className="hidden md:flex">Зберігти</span> 
          <div className="md:pl-3 md:pt-1">
            <HeartOutline />
          </div>
        </button>
      </div>
    </div>

    <div className="relative block px-12 py-6 bg-white border border-gray-200 rounded-3xl shadow">
        <h5 className="mb-2 text-2xl font-bold text-gray-900">Відгуки про фахівця</h5>
        <a href={"/personpage/" + props.id} className="font-semibold hidden md:flex md:absolute md:right-20 md:top-7 md:text-lg rounded-xl md:-mt-3 px-6 py-1.5 border-2 border-sky-400 hover:bg-sky-200">Детальніше
          <svg className="w-2.5 h-2.5 inline mt-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
        </a>
        <p className="text-base/2 text-gray-600 mt-4 mb-10 md:mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin, turpis quis sagittis vehicula, sem erat semper mauris, nec rutrum turpis dui ac ante. Etiam imperdiet libero sed felis tempus scelerisque eget et urna. </p>
        <a href={"/personpage/" + props.id} className="font-semibold absolute right-8 bottom-4 md:hidden rounded-xl px-6 py-1.5 border-2 border-sky-400 hover:bg-sky-200">Детальніше
          <svg className="w-2.5 h-2.5 inline -mt-0.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
        </a>
    </div>
    </div>
  )
}