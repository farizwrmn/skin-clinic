"use client";

import React from "react";
import { FaQuestion } from "react-icons/fa6";
import { useState } from "react";

type Props = {};

export default function Desc({}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shortText = `
    Beauty Skin Clinic, established in 2022, has rapidly grown into a
    trusted name in the beauty industry, known for its commitment to
    excellence and customer satisfaction. Since its inception, the clinic
    has served over 500 satisfied clients, earning a reputation for
    delivering high-quality treatments and personalized care.
  `;

  const fullText = (
    <>
      Beauty Skin Clinic, established in 2022, has rapidly grown into a trusted
      name in the beauty industry, known for its commitment to excellence and
      customer satisfaction. Since its inception, the clinic has served over 500
      satisfied clients, earning a reputation for delivering high-quality
      treatments and personalized care.
      <br />
      <br />
      The clinic continuously evolves by adopting the latest advancements in
      beauty technology and techniques. From advanced skin treatments to
      cutting-edge procedures, Beauty Skin Clinic strives to stay at the
      forefront of innovation, ensuring clients receive the most effective and
      up-to-date services. This commitment to progress and improvement reflects
      the clinic’s dedication to helping clients look and feel their best, while
      maintaining the highest standards of safety and professionalism.
      <br />
      <br />
      By combining a client-first approach with state-of-the-art technology,
      Beauty Skin Clinic has built a loyal customer base and continues to expand
      its offerings, positioning itself as a leader in the beauty industry.
    </>
  );

  return (
    <>
      <div className="xl:mt-10 mt-80 xl:ml-40 justify-end bg-yellow-300 p-5 rounded-xl">
        <h1 className="text-3xl font-sergio flex text-center justify-center">
          Why with us{" "}
          <FaQuestion className="animate-bounce direction-reverse" />
        </h1>
        <div>
          <p className="text-md font-mono mt-4 text-center xl:text-end">
            We help you to look beautiful and healthy, best services,
          </p>
          <p className="text-md font-mono text-end">
            we hires professional to make your life easier.
          </p>
        </div>
      </div>
      <div className="xl:mt-10 mt-5 xl:ml-80 justify-center bg-gradient-to-br from-pink-200 via-white to-pink-300 p-5 rounded-xl">
        <div>
          <p className="text-md font-mono mt-4 text-center tracking-tight">
            {isExpanded ? fullText : shortText}
          </p>
          <div className="text-center mt-4">
            {/* Toggle button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-4 py-1 bg-gray-100 text-slate-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300"
            >
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
