// AnimatedWave.jsx
export default function AnimatedWave({ className = "absolute bottom-0 left-0 w-[200%]" }) {
  return (
    <div className={`${className} overflow-hidden`} style={{ height: "80px", width: "210%"  }}>
      <svg
        viewBox="0 0 2880 120"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <g className="wave-group">
          {/* First wave */}
          <path
            d="
              M0,60 
              Q60,0 120,60
              Q180,120 240,60
              Q300,0 360,60
              Q420,120 480,60
              Q540,0 600,60
              Q660,120 720,60
              Q780,0 840,60
              Q900,120 960,60
              Q1020,0 1080,60
              Q1140,120 1200,60
              Q1260,0 1320,60
              Q1380,120 1440,60
              L1440,120 L0,120 Z
            "
            className="fill-white"
          />
          {/* Second wave (exactly same, starts at 1440) */}
          <path
            d="
              M1200,60 
              Q1260,0 1320,60
              Q1380,120 1440,60
              Q1500,0 1560,60
              Q1620,120 1680,60
              Q1740,0 1800,60
              Q1860,120 1920,60
              Q1980,0 2040,60
              Q2100,120 2160,60
              Q2220,0 2280,60
              Q2340,120 2400,60
              Q2460,0 2520,60
              Q2580,120 2640,60
              Q2700,0 2760,60
              Q2820,120 2880,60
              L2880,120 L1200,120 Z
            "
            className="fill-white"
          />
        </g>
      </svg>

      {/* Animation CSS */}
      <style>
        {`
          .wave-group {
            animation: waveMove 32s linear infinite;
          }

          @keyframes waveMove {
            0% { transform: translateX(0); }
            100% { transform: translateX(-1440px); } /* slide by one wave width */
          }
        `}
      </style>
    </div>
  );
}
