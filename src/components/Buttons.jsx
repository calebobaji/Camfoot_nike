
const Buttons = ({label, iconURL}) => {
  return (
    <button className="flex justify-center items-center
    gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    bg-dull-yellow rounded-full text-white hover:scale-110">
        {label}
        {iconURL && 
        <img src={iconURL} alt="arrow-right-icon"
         className="ml-2 rounded-full w-5 h-5"
         />}
    </button>
  )
}

export default Buttons