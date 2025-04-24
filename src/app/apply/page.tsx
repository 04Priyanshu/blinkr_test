"use client"
import React, { useState } from 'react'
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { BackgroundLines } from '@/components/ui/background-lines';
import { useRouter } from 'next/navigation';

export default function ApplyPage() {
  const router = useRouter();
  const [isFlipped, setIsFlipped] = useState(false);
  const [showEmploymentType, setShowEmploymentType] = useState(false);
  const [formData, setFormData] = useState({
    pan: '',
    mobile: '',
    otp: '',
    employmentType: ''
  });
  const [timer, setTimer] = useState(60);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [canResend, setCanResend] = useState(false);

  // useEffect(() => {
  //   let interval: NodeJS.Timeout;
  //   if (isFlipped && timer > 0) {
  //     interval = setInterval(() => {
  //       setTimer(prev => prev - 1);
  //     }, 1000);
  //   } else if (timer === 0) {
  //     setCanResend(true);
  //   }
  //   return () => clearInterval(interval);
  // }, [isFlipped, timer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFlipped) {
      // Handle initial form submission
      console.log('Form submitted:', formData);
      setIsFlipped(true);
      setTimer(60);
      setCanResend(false);
    } else if (!showEmploymentType) {
      // Handle OTP verification
      console.log('OTP submitted:', formData.otp);
      setShowEmploymentType(true);
    } else {
      // Handle employment type submission
      console.log('Employment type submitted:', formData.employmentType);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      router.push('/get-cibil-score' as any);
    }
  };

  const handleResendOTP = () => {
    // Here you would typically make an API call to resend OTP
    console.log('Resending OTP to:', formData.mobile);
    setTimer(60);
    setCanResend(false);
  };

  return (
    <>
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
    <div className="relative z-10 w-full flex items-center justify-center mt-32">
        <CardContainer className="inter-var">
          <CardBody className={cn(
            "relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[32rem] rounded-xl p-8 border transition-all duration-500 [transform-style:preserve-3d]",
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          )}>
            <BackgroundBeams />
            <form onSubmit={handleSubmit} className="flex flex-col h-full [transform-style:preserve-3d]">
              {!isFlipped && (
                <CardItem
                  translateZ="150"
                  className="w-48 h-48 mx-auto"
                >
                  <Image 
                    src="/image 10.png" 
                    alt="Logo" 
                    width={192}
                    height={192}
                    className="w-full h-full object-contain"
                  />
                </CardItem>
              )}
              
              {!isFlipped ? (
                <div className="mt-auto space-y-6">
                  <div>
                    <label htmlFor="pan" className="block text-sm font-medium text-neutral-300 mb-2">
                      PAN Number
                    </label>
                    <input
                      type="text"
                      id="pan"
                      name="pan"
                      value={formData.pan}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:text-black transition-colors duration-200"
                      placeholder="Enter PAN number"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-neutral-300 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:text-black transition-colors duration-200"
                      placeholder="Enter mobile number"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors duration-200 mt-8"
                  >
                    Submit
                  </button>
                </div>
              ) : !showEmploymentType ? (
                <div className="flex flex-col items-center justify-center h-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="w-full max-w-xs space-y-6">
                    <div>
                      <label htmlFor="otp" className="block text-sm font-medium text-neutral-300 mb-2 text-center">
                        Enter OTP
                      </label>
                      <input
                        type="text"
                        id="otp"
                        name="otp"
                        value={formData.otp}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:text-black transition-colors duration-200 text-center"
                        placeholder="Enter OTP"
                        required
                      />
                    </div>

                    <div className="text-center text-sm text-neutral-400">
                      {timer > 0 ? (
                        <p>Resend OTP in {timer} seconds</p>
                      ) : (
                        <button
                          type="button"
                          onClick={handleResendOTP}
                          className="text-emerald-500 cursor-pointer hover:text-emerald-400 transition-colors duration-200"
                        >
                          Resend OTP
                        </button>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors duration-200"
                    >
                      Verify OTP
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="w-full max-w-xs space-y-6">
                    <div>
                      <label htmlFor="employmentType" className="block text-lg font-semibold text-neutral-300 mb-4 text-center">
                        Are you salaried or self-employed?
                      </label>
                      <select
                        id="employmentType"
                        name="employmentType"
                        value={formData.employmentType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:text-black transition-colors duration-200 text-center"
                        required
                      >
                        <option value="">Select employment type</option>
                        <option value="salaried">Salaried</option>
                        <option value="self-employed">Self Employed</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors duration-200"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </form>
          </CardBody>
        </CardContainer>
      </div>
    </BackgroundLines>
    <Footer />
    </>
  )
}