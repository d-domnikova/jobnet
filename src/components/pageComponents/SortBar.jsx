export default function SortBar(){
   return(
    <form className="max-w-48 mx-auto">
        <select id="countries" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-sky-400 focus:border-sky-400 block w-full p-2.5">
        <option value="CreateAt DES" selected>Від нових до старих</option>
        <option value="CreateAt ASC">Від старих до нових</option>
        <option value="Salary ASC">За зростанням</option>
        <option value="Salary DES">За спаданням</option>
        </select>
    </form>
   )
}