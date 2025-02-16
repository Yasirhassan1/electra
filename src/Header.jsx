export default function Header({setSearch, setSearchItemm, selectedItem, setSelectedItem}){
    
    function searchItem(formData){
        let s = String(formData.get("searchItem"))
      setSearch(true)
      setSearchItemm(s.toLowerCase())
    }
    return(
        <header className="bg-[#2E2E2E] border-b-[2px] border-[#C99E4B] flex h-20 justify-center gap-4 items-center px-4 fixed z-50 w-full">   
    <select className='text-black rounded-sm p-2 bg-[#F9F9F9] outline-none cursor-pointer' name="electronics" id="electronics" value={selectedItem} onChange={(e)=>setSelectedItem(e.target.value)}>
    <option value="all" selected>All</option>
    <option value="laptop">Laptops</option>
    <option value="headphone">Headphones</option>
    <option value="microphone">Microphones</option>
    <option value="printer">Printers</option>
    <option value="speaker">Speakers</option>
    <option value="watch">Smart watch</option>

    </select>
            <form className="relative w-full shadow-2xl md:w-1/2" action={searchItem}>
           <input className="h-fit px-4 py-3 w-full bg-[#F9F9F9] text-black rounded-sm outline-none" type="text" placeholder="Search" name="searchItem"/>
          <button className="absolute right-0"><i className="fa-solid fa-magnifying-glass text-white bg-[#1E3A8A] p-4 rounded-tr-sm rounded-br-sm cursor-pointer"></i></button>
           </form>
        </header>
    )
}
import PropTypes from 'prop-types';

Header.propTypes = {
    setSearch: PropTypes.string.isRequired,
    setSearchItemm: PropTypes.func.isRequired,
    selectedItem: PropTypes.string.isRequired,
    setSelectedItem: PropTypes.func.isRequired,
};