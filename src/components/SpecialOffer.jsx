
import arrowRight from "../assets/icons/arrow-right.svg";
import offer from "../assets/images/offer.svg";
import Buttons from "./Buttons";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center mt-10 p-6 max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-dull-yellow'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Buttons label='Shop now' iconURL={arrowRight} />
          <button className="flex justify-center items-center
            gap-2 px-7 py-4 border text-muted-blue border-dull-yellow font-montserrat text-lg leading-none
          rounded-full hover:scale-110">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
