import { Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import "./addProduct.css";

function AddProduct() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [mrp, setMrp] = useState("");
  const [mrpX, setMrpX] = useState("");
  const [brand, setBrand] = useState("");
  const [dealPrice, setDealPrice] = useState("");
  const [dealPriceX, setDealPriceX] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountX, setDiscountX] = useState("");
  const [savePrice, setSavePrice] = useState("");
  const [savePriceX, setSavePriceX] = useState("");
  const [cashback, setCashback] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(`https://relianceapi.onrender.com/${category}`, {
      method: "POST",
      headers: {
        "application-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        image,
        mrp,
        mrpX,
        brand,
        dealPrice,
        dealPriceX,
        discount,
        discountX,
        savePrice,
        savePriceX,
        cashback,
        img1,
        img2,
        img3,
      }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <form action="#" className="form" onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder=" Name"
            required
          />
        </div>

        <div className="input-box">
          <input
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text"
            placeholder="Product Image"
            required
          />
        </div>

        <div className="column">
          <div className="input-box">
            <input
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
              type="number"
              placeholder="Brand"
              required
            />
          </div>
        </div>

        <div className="input-box address">
          <div className="column">
            <input
              onChange={(e) => setMrp(e.target.value)}
              value={mrp}
              type="text"
              placeholder="MRP"
              required
            />
            <input
              onChange={(e) => setMrpX(e.target.value)}
              value={mrpX}
              type="number"
              placeholder="MRP-X"
              required
            />
          </div>

          <div className="column">
            <input
              onChange={(e) => setDealPrice(e.target.value)}
              value={dealPrice}
              type="text"
              placeholder="Deal Price"
              required
            />
            <input
              onChange={(e) => setDealPriceX(e.target.value)}
              value={dealPriceX}
              type="number"
              placeholder="Deal Price - X"
              required
            />
          </div>

          <div className="column">
            <input
              onChange={(e) => setDiscount(e.target.value)}
              value={discount}
              type="text"
              placeholder="Discount"
              required
            />
            <input
              onChange={(e) => setDiscountX(e.target.value)}
              value={discountX}
              type="number"
              placeholder="Discount -X"
              required
            />
          </div>

          <div className="column">
            <input
              onChange={(e) => setSavePrice(e.target.value)}
              value={savePrice}
              type="text"
              placeholder="Save Price"
              required
            />
            <input
              onChange={(e) => setSavePriceX(e.target.value)}
              value={savePriceX}
              type="number"
              placeholder="save Price - X"
              required
            />
          </div>

          <div className="column">
            <input
              onChange={(e) => setCashback(e.target.value)}
              value={cashback}
              type="text"
              placeholder="Cashback"
              required
            />
            <input
              onChange={(e) => setImg1(e.target.value)}
              value={img1}
              type="number"
              placeholder="Image 1"
              required
            />
          </div>

          <div className="column">
            <input
              onChange={(e) => setImg2(e.target.value)}
              value={img2}
              type="text"
              placeholder="Image 2"
              required
            />
            <input
              onChange={(e) => setImg3(e.target.value)}
              value={img3}
              type="number"
              placeholder="Image 3"
              required
            />
          </div>
          <select
            name=""
            id=""
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
          >
            <option value="">Category</option>
            <option value="">Soundbar</option>
            <option value="">Laptop</option>
            <option value="">Watch</option>
            <option value="">Television</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default AddProduct;

{
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
}
