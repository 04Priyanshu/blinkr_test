"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { BackgroundBeams } from "./ui/background-beams";

export function FeaturedSection() {
  return (
    <div className="flex justify-between">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <CardContainer className="inter-var">
          <CardBody className="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 100%, .08) 0, hsla(0, 0%, 100%, .02) 50%, hsla(0, 0%, 100%, 0) 80%) relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex flex-col items-center justify-center">
            <BackgroundBeams />
            <CardItem
              translateZ="50"
              className="text-5xl font-bold text-center bg-clip-text text-transparent bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,_hsla(0,_0%,_100%,_.8)_0,_hsla(0,_0%,_100%,_.4)_50%,_hsla(0,_0%,_100%,_.2)_80%)] tracking-wider font-mono font-cursive"
            >
              Insured Loan
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-300 text-2xl max-w-sm mt-10 text-center"
            >
              Faster Processing <br /> <span className="text-center">and</span> <br />get disbursed quickly in a blink
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              {/* Empty div for spacing */}
            </div>
          </CardBody>
        </CardContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <CardContainer className="inter-var">
          <CardBody className="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .06) 0, hsla(0, 0%, 100%, .02) 80%, transparent 100%) relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <BackgroundBeams />
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-300 text-sm max-w-sm mt-2"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              {/* Empty div for spacing */}
            </div>
          </CardBody>
        </CardContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <CardContainer className="inter-var">
          <CardBody className="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 100%, .02) 80%, transparent 100%) relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <BackgroundBeams />
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-300 text-sm max-w-sm mt-2"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              {/* Empty div for spacing */}
            </div>
          </CardBody>
        </CardContainer>
      </motion.div>
    </div>
  );
}