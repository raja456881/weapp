// import Product from "./Product";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { useNavigate } from "react-router-dom";
// import prod1 from "../assets/prod1.svg";
// import prod2 from "../assets/prod2.svg";
// import prod3 from "../assets/prod3.svg";
// import prod4 from "../assets/prod4.svg";
// import prod5 from "../assets/prod5.svg";
// import generative from "../assets/generativeparts.svg";
// import "../../src/App.css";
// const Products = () => {
//   const navigate = useNavigate();
//   const list = [prod1, prod2, prod3, prod4, prod5, generative];
//   return (
//     <div className="main_wrap">
//       <div className="prod_headline">Our Product</div>
//       <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
//         <div style={{ width: "75%" }}>
//           <Carousel
//             additionalTransfrom={0}
//             arrows
//             autoPlaySpeed={3000}
//             centerMode={false}
//             className=""
//             containerClass="container-with-dots"
//             dotListClass=""
//             draggable
//             focusOnSelect={false}
//             infinite
//             itemClass=""
//             keyBoardControl
//             minimumTouchDrag={80}
//             pauseOnHover
//             renderArrowsWhenDisabled={false}
//             renderButtonGroupOutside={false}
//             renderDotsOutside={false}
//             responsive={{
//               desktop: {
//                 breakpoint: {
//                   max: 3000,
//                   min: 600,
//                 },
//                 items: 3,
//                 partialVisibilityGutter: 40,
//               },
//             }}
//             rewind={false}
//             rewindWithAnimation={false}
//             rtl={false}
//             shouldResetAutoplay
//             showDots={false}
//             sliderClass=""
//             slidesToSlide={1}
//             swipeable
//           >
//             {list.map((el, index) => {
//               return <Product pic={el} key={Math.random() * 56} />;
//             })}
//           </Carousel>
//         </div>
//       </div>
//       <br />
//       <div
//         style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
//       >
//         <div className="explore_more_btn" onClick={() => navigate("/product")}>
//           Explore more
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;


import Product from "./Product";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";


import React, { useEffect , useState} from "react";

import axios from "axios";
import "../../src/App.css";
const Products = () => {
  const [productdata, setproductdata ] = useState();



  useEffect(() => {
    window.scrollTo({top:705, left:0, behavior:"smooth"})

    axios({
      // Endpoint to send files
      url: "https://amey1331.pythonanywhere.com/get-product",
      method: "POST",
  })

      // Handle the response from backend here
      .then((res) => {
        setproductdata(res.data.data)
       })

      // Catch errors if any
      .catch((err) => { });
}, []);
  const navigate = useNavigate();
  // const list = [prod1, prod2, prod3, prod4, prod5, generative];
  return (
    <div className="main_wrap">
      <div className="prod_headline">Our Product</div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "75%" }}>
          <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={true}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 600,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {console.log(productdata,"dghgjhkl;k")}
              {productdata?.map((iteam, index) => {
            return <Product pic={`https://amey1331.pythonanywhere.com/${iteam?.image}`} name={iteam?.name} key={iteam?.id} />         
        })}
          </Carousel>
        </div>
      </div>
      <br />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <div className="explore_more_btn" onClick={() => navigate("/product")}>
          Explore more
        </div>
      </div>
    </div>
  );
};

export default Products;