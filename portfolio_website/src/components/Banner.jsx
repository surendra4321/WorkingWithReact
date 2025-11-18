import bannerImage from "../assets/profile.svg.svg";
const Banner = () => {
    return (
        <div className="main-container flex items-center">
           {/*first box*/}
            <div className="border w-full">
                {/*text*/}
                <div className="w-2/3 border ms-10"> 
                <h3 className="text-3xl font-semibold">Hi, I am </h3>
                <h1 className="mt-3 text-5xl font-bold">Nischal Kumar</h1>
                <h2>A am a fullstack developer</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Delectus itaque adipisci nihil. Possimus aliquam quia eveniet a odit,
                    recusandae qui nemo, magni excepturi deleniti illum iste deserunt,
                    officiis reiciendis ipsam? Esse odio tempora voluptates neque culpa
                    unde modi doloremque, voluptas, quis, alias fugiat molestias obcaecati quia
                    consequatur nostrum? Delectus, quos?</p>

                    <a href="contact">Contact Me</a>
                    </div>
            </div>
                {/*Second box*/}
            <div className="rounded-full shadow-lg w-fit flex justify-center">
                {/*image*/}
                <img src={bannerImage} />

            </div>
        </div>
    )
}
export default Banner;