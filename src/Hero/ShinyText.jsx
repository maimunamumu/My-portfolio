import React from "react";

const ShinyText = ({ text = "Mymuna Jahan" }) => {
    return (
        <h1
            className="sm:text-xl text-[15px] font-bold bg-clip-text text-transparent"
            style={{
             backgroundImage: "linear-gradient(90deg, #2A0A33, #4A1A5C, rgba(255,255,255,0.6), #4A1A5C, #2A0A33)",

                backgroundSize: "200% auto",
                animation: "shine 7s linear infinite",
            }}
        >
            {text}
            <style>
                {`
          @keyframes shine {
            0% { background-position: -200%; }
            100% { background-position: 200%; }
          }
        `}
            </style>
        </h1>
    );
};

export default ShinyText;
