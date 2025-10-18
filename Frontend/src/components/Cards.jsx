import React from 'react'

const Cards = ({ item }) => {
    // console.log(item);
    return (
        <div className="w-full ">
            <div className="card bg-base-100 shadow-md hover:shadow-xl h-full flex flex-col hover:scale-105 duration-500 border">
                <figure className="w-full">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-46 md:h-56 object-cover"
                    />
                </figure>
                <div className="card-body flex-1 flex flex-col">
                    <h2 className="card-title text-lg md:text-xl ">
                        {item.name}
                        <div className="badge badge-secondary ml-2">NEW</div>
                    </h2>
                    <p className="text-sm text-gray-700 mt-1 flex-1">{item.title}</p>
                    <div className="card-actions justify-between items-center mt-4">
                        <div className="badge badge-outline">${item.price}</div>
                        <button className="badge badge-outline px-2 py-4 hover:bg-pink-500 duration-300 text-sm">Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
