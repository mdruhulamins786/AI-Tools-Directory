import React from "react";

import save from "../../asset/save.png";
import edit from "../../asset/edit.png";

const Product = ({ product }) => {
  const { name, dec, img, buttonText } = product;

  return (
    <>
      {" "}
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{dec}</p>
          <div className="flex items-center justify-between mt-3">
            <div>
              <button className="bg-[#E3E4F5] uppercase duration-300 font-semibold hover:bg-[#b8b9db] px-4 py-1 rounded-full text-[#1A22EF]">
                {buttonText}
              </button>
            </div>
            <div>
              <div className="card-actions justify-end">
                <button>
                  <img src={save} alt="" />
                </button>
                <button className="ml-2">
                  {" "}
                  <img src={edit} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
