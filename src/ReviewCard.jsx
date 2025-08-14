
// const ReviewCard = ({ rating = 5, title, text, reviewer }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-5 max-w-sm mx-auto">
//       {/* Stars */}
//       <div className="flex gap-1 mb-2">
//         {[...Array(5)].map((_, index) => (
//           <div
//             key={index}
//             className={`w-5 h-5 ${
//               index < rating ? "bg-[#00b67a]" : "bg-gray-300"
//             }`}
//             style={{
//               clipPath:
//                 "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
//             }}
//           ></div>
//         ))}
//       </div>

//       {/* Title */}
//       <div className="font-semibold text-lg mb-1">{title}</div>

//       {/* Review Text */}
//       <p className="text-gray-700 text-sm">{text}</p>

//       {/* Reviewer */}
//       <div className="text-gray-500 text-xs mt-3">— {reviewer}</div>
//     </div>
//   );
// };

// export default ReviewCard

// TrustpilotWidget.jsx
import { useEffect, useRef } from "react";

export default function TrustpilotWidget({
  businessUnitId,
  templateId = "53aa8912dec7e10d38f59f36", // example: Micro Review Count / Carousel variants vary
  reviewUrl = "https://www.trustpilot.com/review/yourdomain.com",
  locale = "en-US",
  theme = "light",
  styleHeight = "220px",
  styleWidth = "100%",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const ensureScript = () =>
      new Promise((resolve) => {
        if (window.Trustpilot) return resolve();
        const s = document.createElement("script");
        s.src =
          "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
        s.async = true;
        s.onload = resolve;
        document.head.appendChild(s);
      });

    let cancelled = false;
    ensureScript().then(() => {
      if (cancelled) return;
      if (window.Trustpilot && ref.current) {
        // Force (re)render in SPAs
        window.Trustpilot.loadFromElement(ref.current, true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [businessUnitId, templateId, reviewUrl, locale, theme, styleHeight, styleWidth]);

  return (
    <div className="w-full">
      {/* This div is replaced by Trustpilot's iframe with the exact official look */}
      <div
        ref={ref}
        className="trustpilot-widget"
        data-locale={locale}
        data-template-id={templateId}
        data-businessunit-id={businessUnitId}
        data-style-height={styleHeight}
        data-style-width={styleWidth}
        data-theme={theme}
      >
        <a href={reviewUrl} target="_blank" rel="noreferrer">
          Trustpilot
        </a>
      </div>
    </div>
  );
}
