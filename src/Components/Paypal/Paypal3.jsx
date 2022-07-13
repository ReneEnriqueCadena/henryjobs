import { PayPalButtons } from "@paypal/react-paypal-js";
import React, { useState } from "react";
import PremiumCard from "../SerPremium/CardPremium";

export default function Paypal3() {

  return (
    <div>
      <PremiumCard />
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: 20.00,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
          });
        }}
      />
  </div>
  );
}
