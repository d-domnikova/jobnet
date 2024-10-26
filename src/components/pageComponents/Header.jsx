import MainLinkButton from "./MainLinkButton";

export default function Header(){
    return(
        <nav className="bg-white fixed w-full z-50 top-0 start-0 border-b border-gray-200 font-medium">
            <div className="max-w-screen-2xl flex items-center justify-between mx-auto md:max-lg:px-2 px-4 py-6">
                <div className="flex space-x-4">
                <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="logo.svg" className="md:h-10 h-12" alt="JobNet Logo"/>
                <span className="self-center text-xl font-semibold whitespace-nowrap max-md:text-2xl xl:text-2xl hover:text-sky-600">JobNet</span>
            </a>
                </div>
            <div className="flex md:order-2 space-x-4 md:max-lg:space-x-3 rtl:space-x-reverse">
                <a href="#" className="text-white bg-gray-400 hover:bg-gray-600 focus:ring-4 focus:outline-none rounded-xl px-5 py-2.5 text-center hidden sm:inline">Реєстрація</a>
                <MainLinkButton url="" text="Увійти"/>
            </div>
            <div className="items-center justify-between hidden md:flex md:order-1" id="navbar-sticky">
                <ul className="flex flex-col w-full lg:w-auto p-4 md:p-0 mt-4 border border-gray-100 rounded-lg space-x-7 xl:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                    <li className="md:max-lg:hidden text-center">
                        <HeaderButtons text="Розмістити резюме" url="#"/>
                    </li>
                    <li className="md:max-lg:hidden text-center">
                        <HeaderButtons text="Додати послугу" url="#"/>
                    </li>
                    <li className="lg:hidden text-center">
                        <HeaderButtons text="Розмістити >" url="#"/>
                    </li>
                    <li className="text-center">
                        <HeaderButtons text="Всі вакансії" url="#"/>
                    </li>
                    <li className="text-center">
                        <HeaderButtons text="Всі послуги" url="#"/>
                    </li>
                    <li className="text-center">
                        <HeaderButtons text="Блог" url="#"/>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

function HeaderButtons(props){
    return(
        <a href={props.url} className="inline text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600">{props.text}</a>
    )
}