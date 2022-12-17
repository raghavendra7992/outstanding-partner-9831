import React, { useState } from "react";
import "./addProduct.css";

function AddProduct() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [mrp, setMrp] = useState(Number);
  const [mrpX, setMrpX] = useState("");
  const [brand, setBrand] = useState("");
  const [dealPrice, setDealPrice] = useState(Number);
  const [dealPriceX, setDealPriceX] = useState("");
  const [discount, setDiscount] = useState(Number);
  const [discountX, setDiscountX] = useState("");
  const [savePrice, setSavePrice] = useState(Number);
  const [savePriceX, setSavePriceX] = useState("");
  const [cashback, setCashback] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [isId, setIsId] = useState(Number);
  const [category, setCategory] = useState("");

  const obj = {
    id: isId,
    name: name,
    imglink: image,
    MRP: mrp,
    MRPx: mrp,
    brand: brand,
    dealprice: dealPrice,
    dealpricex: dealPriceX,
    discount: discount,
    discountx: discountX,
    saveprice: savePrice,
    savepricex: savePriceX,
    cashback: cashback,
    img1: img1,
    img2: img2,
    img3: img3,
    category: category,
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch(`https://relianceapi.onrender.com/${category}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <form action="#" className="form" onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            onChange={(e) => setIsId(e.target.value)}
            value={isId}
            type="number"
            placeholder=" Product Id"
          />
        </div>
        <div className="input-box">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder=" Name"
          />
        </div>

        <div className="input-box">
          <input
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text"
            placeholder="Product Image"
          />
        </div>

        <div className="">
          <div className="input-box">
            <input
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
              type="text"
              placeholder="Brand"
            />
          </div>
        </div>

        <div className="input-box address">
          <div className="column">
            <input
              onChange={(e) => setMrp(e.target.value)}
              value={mrp}
              type="number"
              placeholder="MRP"
            />
            <input
              onChange={(e) => setMrpX(e.target.value)}
              value={mrpX}
              type="text"
              placeholder="MRP-X"
            />
          </div>

          <div className="column">
            <input
              onChange={(e) => setDealPrice(e.target.value)}
              value={dealPrice}
              type="number"
              placeholder="Deal Price"
            />
            <input
              onChange={(e) => setDealPriceX(e.target.value)}
              value={dealPriceX}
              type="text"
              placeholder="Deal Price - X"
            />
          </div>

          <div className="column">
            <input
              onChange={(e) => setDiscount(e.target.value)}
              value={discount}
              type="number"
              placeholder="Discount"
            />
            <input
              onChange={(e) => setDiscountX(e.target.value)}
              value={discountX}
              type="text"
              placeholder="Discount -X"
            />
          </div>

          <div className="column">
            <input
              onChange={(e) => setSavePrice(e.target.value)}
              value={savePrice}
              type="number"
              placeholder="Save Price"
            />
            <input
              onChange={(e) => setSavePriceX(e.target.value)}
              value={savePriceX}
              type="text"
              placeholder="save Price - X"
            />
          </div>

          <div className="column">
            <input
              onChange={(e) => setCashback(e.target.value)}
              value={cashback}
              type="text"
              placeholder="Cashback"
            />
            <input
              onChange={(e) => setImg1(e.target.value)}
              value={img1}
              type="text"
              placeholder="Image 1"
            />
          </div>

          <div className="column">
            <input
              onChange={(e) => setImg2(e.target.value)}
              value={img2}
              type="text"
              placeholder="Image 2"
            />
            <input
              onChange={(e) => setImg3(e.target.value)}
              value={img3}
              type="text"
              placeholder="Image 3"
            />
          </div>

          <div
            class="select-box"
            name=""
            id=""
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
          >
            <select>
              <option hidden>Category</option>
              <option value="telivison">Television</option>
              <option value="soundbar">Soundbar</option>
              <option value="laptop">Laptop</option>
              <option value="watch">Watch</option>
            </select>
          </div>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
export default AddProduct;

// <input type="submit" value="Submit" />
// getData(payload)
// console.log(obj, category);

// const getData = async (payload, category) => {

//   await axios
//   .post(`https://relianceapi.onrender.com/${category}`, { payload })

// };
// const stNum=()=>{
// parseInt()

// }

// function roughScale(x, base) {
//   const parsed = parseInt(x, base);
//   if (isNaN(parsed)) { return 0; }
//   return parsed * 100;
// }

//   "name": "Samsung HW-T420/XL 2.1 Channel Sound bar",
// "MRP": 18499,
// "MRPx": "₹18,499",
// "brand": "Samsung",
// "dealprice": 11490,
// "dealpricex": "₹11,490",
// "discount": 38,
// "discountx": "38%",
// "saveprice": 7010,
// "savepricex": "₹7,010",
// "cashback": "no",

// https://www.codinglabweb.com/2022/12/create-registration-form-html-css.html

/* <div classNameName="inputForm">
        <label htmlFor=""> Name
          <input style={{outLine:"1px solid black" }} placeholder="Name" />
        </label>

        <label htmlFor="">
          <input placeholder="MRP" />
        </label>

        <label htmlFor="">
          <input placeholder="MRPx" />
        </label>

        <label htmlFor="">
          <input placeholder="Brand" />
        </label>

        <label htmlFor="">
          <input placeholder="Deal Price" />
        </label>

        <label htmlFor="">
          <input placeholder="Deal Price-X" />
        </label>

        <label htmlFor="">
          <input placeholder="Discount" />
        </label>

        <label htmlFor="">
          <input placeholder="Discount-X" />
        </label>

        <label htmlFor="">
          <input placeholder="Save Price" />
        </label>

        <label htmlFor="">
          <input placeholder="Save Prce-X" />
        </label>

        <label htmlFor="">
          <input placeholder="Cashback" />
        </label>

        <label htmlFor="">
          <input placeholder="Image1" />
        </label>

        <label htmlFor="">
          <input placeholder="Image2" />
        </label>

        <label htmlFor="">
          <input placeholder="Image3" />
        </label>
      </div> */
