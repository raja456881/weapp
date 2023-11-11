

import React, { useEffect , useState} from "react";

import axios from "axios";
import Product from "../components/Product";
import Footer from "../components/Footer";



const OurProducts = () => {
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
        setproductdata(res.data)
       })

      // Catch errors if any
      .catch((err) => { });
}, []);
  
  return (
    <div>
      <div className="prod_headline">Our Product</div>
      <div className="product_listing">
        {productdata?.data.map((iteam, index) => {
          console.log(iteam)
            return <Product pic={`https://amey1331.pythonanywhere.com/${iteam?.image}`} name={iteam?.name} key={iteam?.id} />         
        })}
      </div>
      <Footer />
    </div>
  );
};

export default OurProducts;



