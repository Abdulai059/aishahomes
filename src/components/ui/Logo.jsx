// src/components/ui/Logo.jsx
import React from "react";

const Logo = ({ src = "/Aishahomeslogobg.png", alt = "Aishahomes Logo" }) => {
  return (
    <div className={`flex items-center  hidden md:flex flex gap-2 `}>
      <img src={src} alt={alt} className="h-10 w-auto sm:h-10 md:h-18" />
      {/* <span className="font-bold text-lg sm:text-xl md:text-2xl text-foreground">
        ACME
      </span> */}
    </div>
  );
};

export default Logo;
