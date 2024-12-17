import FeaturedCard from "../Cards/FeaturedCard.jsx"
import shoe4 from "../assets/images/shoe4.svg"
import shoe5 from "../assets/images/shoe5.svg"
import shoe6 from "../assets/images/shoe6.svg"
import shoe7 from "../assets/images/shoe7.svg"
const Featured = () => {
    const featured = [
        {
            imgURL: shoe4,
            name: "Sanfoot/Nike collab 1",
            price: "$200.20",
        },
        {
            imgURL: shoe5,
            name: "Sanfoot/Nike collab 2",
            price: "$210.20",
        },
        {
            imgURL: shoe6,
            name: "Sanfoot/Nike collab 3",
            price: "$220.20",
        },
        {
            imgURL: shoe7,
            name: "Sanfoot/Nike collab 4",
            price: "$230.20",
        },
    ]
  return (
    <section id = "featured" className="p-6 max-container max-sm:pt-12">
        <div className="flex flex-col justify-start gap-5">
            <h2 className="text-4xl font-palanquin font-bold">
                Our <span className="text-dull-yellow"> Featured</span> Products
            </h2>
            <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
                Experience high-end quality and fashion with our on-demand 
                selections. Discover a new perspective of comfort, design and value
            </p>
        </div>

        <div className="mt-16 grid lg:grid-cols4 md:grid-cols-3 sm:grid-cols-2
        grid-cols-1 sm:gap-6 gap-14">
            {featured.map((featured)=>
            (
                <FeaturedCard key = {featured.name} {...featured} />
            )
            )}
        </div>
    </section>
  )
}

export default Featured