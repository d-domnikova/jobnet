import HeartOutline from "../icons/HeartOutline";
import ReportForm from "./modals/ReportForm";
import Tag from "./Tag";
import Telegram from "../icons/Telegram";
import Viber from "../icons/Viber";
import Inst from "../icons/Inst";

export default function Service(props){
    return(
        <div className="block max-w-4xl px-12 py-6 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100">
          <div className="relative flex justify-between">
            <a href={"/services/"+ props.id} className="block">
                <h5 className="mb-2 text-2xl pt-4 font-bold tracking-tight text-gray-900 hover:underline">Назва послуги</h5>
                <p className="font-semibold text-gray-900 py-1">120/год</p>
                <p className="font-semibold text-gray-900 py-1 ">Ім'я Прізвище, Спеціалізація</p>
                <p className="font-semibold text-gray-900 py-1">Місто, Область</p>
                <div className="md:flex space-x-4">
                <p className="font-semibold text-gray-900 py-1 pb-2">+380-000-000-00-00</p>
                <div className="md:pt-1.5 flex space-x-3 mb-2">
                    <Viber width="22" height="22" color="black"/>
                    <Telegram width="24" height="24" color="black"/>
                    <Inst width="24" height="24" color="black"/>
                </div>
                </div>
          </a>
          <img className="p-5 rounded-t-lg max-h-[20em]" src="https://placehold.co/80x100" alt="Vacancy image" />
          <ReportForm />
        </div>
        <p className="font-normal text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin, turpis quis sagittis vehicula, sem erat semper mauris, nec rutrum turpis dui ac ante. Etiam imperdiet libero sed felis tempus scelerisque eget et urna. Vivamus fermentum tortor lorem, id luctus mauris volutpat efficitur.</p>
        <div className="relative flex justify-between py-6">
      <div className="grid gap-2 grid-cols-2 lg:grid-cols-4">
        <Tag url="#" text="Назва тегу"/>
        <Tag url="#" text="Назва тегу"/>
        <Tag url="#" text="Назва тегу"/>
        <Tag url="#" text="Назва тегу"/>
      </div>
      <button className="flex space-x-2 font-semibold md:text-lg absolute bottom-10 lg:bottom-6 right-0"><span className="hidden sm:flex">Зберігти</span>
          <div className="pl-2 pt-1">
            <HeartOutline color="#b2b2b2"/>
          </div>
        </button>
      </div>
      </div>
    )
}