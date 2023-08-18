/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button1 } from "../Button1";
import { ButtonMenu } from "../ButtonMenu";
import { Frame } from "../Frame";
import { PropertyDefaultWrapper } from "../PropertyDefaultWrapper";
import "./style.css";

export const Encabezado = ({ className }) => {
  return (
    <div className={`encabezado ${className}`}>
      <div className="frame-2">
        <ButtonMenu className="design-component-instance-node" property1="default" text="Inicio" />
        <ButtonMenu className="design-component-instance-node" property1="default" text="Cursos" />
        <ButtonMenu className="design-component-instance-node" property1="default" text="Instructores" />
        <ButtonMenu className="design-component-instance-node" property1="default" text="contactos" />
      </div>
      <div className="frame-3">
        <Frame className="design-component-instance-node" property1="default" text="&nbsp;&nbsp; buscar..." />
        <PropertyDefaultWrapper className="design-component-instance-node" property1="default" />
        <Button1 property1="default" />
      </div>
      <img
        className="image"
        alt="Image"
        src="https://generation-sessions.s3.amazonaws.com/710670f343f60b485a741ba281ea8ad1/img/image-9-1@2x.png"
      />
    </div>
  );
};
