// import React, { useEffect, useState } from 'react';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Cards from './Cards';

// const FreeBook = () => {
//   const [filterList, setFilterList] = useState([]);

//   useEffect(() => {
//     fetch('/list.json')
//       .then((res) => res.json())
//       .then((data) => {
//         const freeItems = data.filter((item) => item.category === "Free");
//         setFilterList(freeItems);
//       })
//       .catch((err) => console.error("Error loading JSON:", err));
//   }, []);

//   // console.log(filterList);

//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     responsive: [
//       {
//         breakpoint: 1024, // below 1024px
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 768, // below 768px (tablets / large phones)
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 480, // below 480px (small phones)
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (<>
//     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:text-white">
//       <div className="text-center my-6">
//         <h1 className="text-2xl md:text-3xl font-semibold">Free Books</h1>
//         <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mt-2 dark:text-white">Explore our collection of free books available for download. All books listed here are completely free and can be accessed instantly.</p>
//       </div>

//       <div className="py-4">
//         <Slider {...settings}>
//           {filterList.map((book) => (
//             <div key={book.id} className="px-2 h-150">
//               <Cards item={book} />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   </>
//   );
// };

// export default FreeBook;


import React, { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const FreeBook = () => {
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    fetch('/list.json')
      .then((res) => res.json())
      .then((data) => {
        const freeItems = data.filter((item) => item.category === "Free");
        setFilterList(freeItems);
      })
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  // console.log(filterList);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // below 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // below 768px (tablets / large phones)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // below 480px (small phones)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (<>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div className="text-center my-6">
        <h1 className="text-2xl md:text-3xl font-semibold">Free Books</h1>
        <p className="text-sm md:text-base max-w-2xl mx-auto mt-2 ">Explore our collection of free books available for download. All books listed here are completely free and can be accessed instantly.</p>
      </div>

      <div className="py-4">
        <Slider {...settings}>
          {filterList.map((book) => (
            <div key={book.id} className="px-2 h-150">
              <Cards item={book} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </>
  );
};

export default FreeBook;
