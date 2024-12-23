const ShoeCard = ({ imageURL, changeBigShoeImage, bigShoeImg }) => {
    if (!imageURL || !imageURL.bigshoe || !imageURL.thumbnail){
        console.error("invalid imageURL object:", imageURL);
        return null;
    }
    const handleClick = () => {
      if (bigShoeImg !== imageURL.bigshoe) {
        changeBigShoeImage(imageURL.bigshoe);
      }
    };
  
    return (
      <div
        className={`border-2 rounded-xl ${
          bigShoeImg === imageURL.bigshoe
            ? "border-coral-red"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        <div className='flex justify-center items-center 
        bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
          <img
            src={imageURL.thumbnail}
            alt='shoe colletion'
            width={127}
            height={103.34}
            className='object-contain'
          />
        </div>
      </div>
    )
  }
  
  export default ShoeCard;
  