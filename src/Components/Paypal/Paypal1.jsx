import { PayPalButtons } from "@paypal/react-paypal-js";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PremiumCard from "../SerPremium/CardPremium";
import { useDispatch } from "react-redux";
import { setPremium } from "../../reducer/actions/actionPost";
import { PremiumCardasd } from "../SerPremium/premiumStyle/premium";

export default function Paypal1() {

  const {id} = useParams();
 
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <PremiumCardasd>
      <PremiumCard />
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: 10.00,
                },
              },
            ],
            application_context: {
              return_url: "localhost:3000/home",
              cancel_url: "localhost:3000/home"
            }
          });
        }}
        onApprove={ async (data, actions) => {
          console.log("esto es data de onApprove -> ", data)
          return actions.order.capture().then((details) => {
            console.log("esto es details de onApprove -> ", details)
            const name = details.payer.name.given_name;
            alert(`Transacción realizada con exito, seras rediccerionado automaticamente. Reinicia sesion para ver los cambios :)` );
             dispatch(setPremium(id)); 
            setTimeout(() => navigate('/home'), 5000)

          });
        }}
        onCancel={(data) => {
          console.log("esto es data de onCancel", data) 
          
        }}
        onError={(error) => {
          alert(error)
        }}
      />
  </PremiumCardasd>
  );
}
