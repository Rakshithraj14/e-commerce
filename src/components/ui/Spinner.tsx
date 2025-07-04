import React from 'react';

export const Spinner = () => (
  <>
    <style>
      {`
        .spinner-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px;
          background: #fff;
          perspective: 1000px;
        }

        .coin {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: radial-gradient(circle, #ff8a00, #ff5e00);
          border: 3px solid #ffae42;
          box-shadow:
            0 0 15px #ff8a00aa,
            0 0 5px #ff5e00 inset;
          color: #000;
          font-weight: bold;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          animation: spinY 1.2s linear infinite;
        }

        .coin::before {
          content: 'GPU';
          transform: rotateY(0deg);
        }

        @keyframes spinY {
          0%   { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
      `}
    </style>

    <div className="spinner-wrapper">
      <div className="coin" />
    </div>
  </>
);
