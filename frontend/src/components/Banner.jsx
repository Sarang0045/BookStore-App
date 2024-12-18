import React from "react";
import banner from "../../public/banner.jpg";
function Banner() {
    return (
        <>
            <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-12">
                <div className="block md:hidden my-8">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
                <div className="w-full order-2 md:order-1 md:w-1/2 md:mt-36">
                    <div className="space-y-8">
                        <h1 className="text-3xl md:text-4xl font-bold">
                            Hello, welcomes here to learn something{" "}
                            <span className="text-pink-500">new everyday!!!</span>
                        </h1>
                        <p className="text-sm md:text-xl">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                            et totam. Tempora amet atque expedita, quae corrupti totam sed
                            pariatur corporis at veniam est voluptas animi!
                        </p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70"
                            >
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                    </div>
                    <button className="btn mt-6 btn-secondary">Get Started</button>
                </div>
                <div className=" order-1 w-full md:w-1/2">
                    <img
                        src={banner}
                        className="md:w-[550px] md:h-[460px] md:ml-12"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}

export default Banner;