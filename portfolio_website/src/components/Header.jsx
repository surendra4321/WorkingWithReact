import { useState } from "react";

const Header = () => {
    const [brandName, setBrandName] = useState("Nischal Kumar");
       const[menuLinnks, setMenuLinks]= useState([
        {
         title: "Home",
         link: "/home",
         id:1,
    },
     {
         title: "About",
         link: "/about",
         id:1,
    },
     {
         title: "Portfolio",
         link: "/portfolio",
         id:1,
    },
     {
         title: "Skills",
         link: "/skills",
         id:1,
    },
     {
         title: "Contact",
         link: "/contact",
         id:1,
    },
]);
    return (
        <>
            <div className="h-20 border main flex justify-between items-center">
                <div>
                    {/*brand logo */}
                    <h1 className="text-2xl font-bold">{brandName}</h1>
                </div>
                <div className="space-x-6">
                    {/*menu link*/}
                    {/*<a href="/about" className="hover:text-orange-600">About</a>
                    <a href="/skills" className="hover:text-orange-600">Skills</a>
                    <a href="/portfolio" className="hover:text-orange-600">Portfolio</a>
                    <a href="/contact" className="hover:text-orange-600">Contact</a>*/}
             {
                menuLinnks.map((link) =>(
                  <a key={link.id} href={link.link} className="hover:text-orange-600">{link.title}</a>
                ))
             }

                </div>
                <div>
                    {/*buttons*/}
                     <button className="bg-orange-600 text-white px-3 py-1 rounded-full shadow-lg">Hire me</button>

                </div>
            </div>
        </>
    )

}
export default Header;

