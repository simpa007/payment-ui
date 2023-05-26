import React from "react";
import "./Payment.css";
import logo from "../img/payment-method.png";
import mastercard from "../img/mastercard.svg";
import chip from "../img/chip-rotate.png";
import { RiPencilFill } from "react-icons/ri";
import { GoVerified } from "react-icons/go";
import { CgMenuGridR } from "react-icons/cg";
import { AiFillApple, AiOutlineWifi } from "react-icons/ai";
import { BiReceipt } from "react-icons/bi";

//19A7CE blue
//DDE6ED ashe
//GrFormClose

function Payment() {
  return (
    <div className="container">
      <div className="main">
        <div className="main-1">
          <div className="main-logo">
            <img src={logo} alt="logo-design" />
            <div>
              AceCoin<span>Pay</span>
            </div>
          </div>
          <div>Time</div>
        </div>
        <div className="main-2">
          <div>
            <label htmlFor="">Card Number</label>
            <br />
            <span className="span">
              Enter the 16-digit card number on the card
            </span>
          </div>
          <div className="main2-icons">
            <RiPencilFill />
            <p>Edit</p>
          </div>
        </div>
        <div className="main-3">
          <img
            src={mastercard}
            alt="master-card"
            width={30}
            height={30}
            style={{ position: "absolute", left: "10px", top: "10px" }}
          />
          <input
            className="card-input"
            id="ccn"
            type="tel"
            inputmode="numeric"
            pattern="[0-9\s]{13,19}"
            autocomplete="cc-number"
            maxlength="19"
            placeholder="xxxx xxxx xxxx xxxx"
          />
          <GoVerified
            style={{
              position: "absolute",
              right: "10px",
              top: "15px",
              color: "#19a7ce",
            }}
          />
        </div>
        <div className="main-4">
          <div>
            <label>CVV Number</label>
            <br />
            <span className="span">
              Enter the 3 or 4 digit number on the card
            </span>
          </div>
          <div>
            <input className="input-4" type="text" value={327} />
            <CgMenuGridR
              style={{
                position: "absolute",
                right: "10px",
                top: "10px",
                fontSize: "25px",
              }}
            />
          </div>
        </div>
        <div className="main-5">
          <div>
            <label htmlFor="">Expiry Date</label>
            <br />
            <span className="span">Enter the expiration date of the card</span>
          </div>
          <div className="input-div">
            <input className="input-5" type="text" value="09" /> /
            <input className="input-5" type="text" value="22" />
          </div>
        </div>
        <div className="main-6">
          <div>
            <label htmlFor="">Password</label>
            <br />
            <span className="span">Enter your Dynamic password</span>
          </div>
          <div>
            <input className="input-4" type="password" value={222222} />
            <CgMenuGridR
              style={{
                position: "absolute",
                right: "10px",
                top: "10px",
                fontSize: "25px",
              }}
            />
          </div>
        </div>

        <div className="main-7">
          <input className="submit" type="button" value="Pay Now" />
        </div>
      </div>
      <div className="sidebar">
        <div className="atm-card">
          <div className="atm-icons">
            <img src={chip} alt="chip" width={40} height={40} />
            <AiOutlineWifi size={40} />
          </div>
          <div className="atm-holder">
            <p>Jonathan Michael</p>
            <p className="atm-pin">*** 3456</p>
          </div>
          <div className="atm-expire">
            <div className="atm-num">09/22</div>
            <div className="mastercard-logo">
              <img src={mastercard} alt="mastercard" width={50} height={50} />
              <p>mastercard </p>
            </div>
          </div>
        </div>
        <div className="sidebar-product">
          <div className="sidebar-1">
            <p>Company</p>
            <div className="apple-product">
              <AiFillApple />
              <h6>Apple</h6>
            </div>
          </div>
          <div className="sidebar-1">
            <p>Order Number</p>
            <h6>1266201</h6>
          </div>
          <div className="sidebar-1">
            <p>Product</p>
            <h6>MackBook Air</h6>
          </div>
          <div className="sidebar-1">
            <p>VAT(20%)</p>
            <h6>$100.00</h6>
          </div>
          <div className="sidebar-1 last">
            <div>
              <p>You have to Pay</p>
              <h6 className="figures">
                549.
                <sub>
                  99
                  <span> USD</span>
                </sub>
              </h6>
            </div>

            <BiReceipt size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
