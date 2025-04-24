import React from 'react'
import { Timeline } from "@/components/ui/timeline";


const data =[
    {
        title: "Enter your PAN and mobile number",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Enter your PAN and mobile number to avail loan
            </p>
          </div>
        ),
      },
      {
        title: "Get your CIBIL score",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Get your CIBIL score to get a loan amount
            </p>
          </div>
        ),
      },
      {
        title: "Upload your Bank Statement",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Upload your documents to further incresase your loan amount
            </p>
          </div>
        ),
      },
      {
        title: "Get your eKYC done",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Enter your aadhar details to get your eKYC done
            </p>
          </div>
        ),
      },
      {
        title: "Esign your sanction letter",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Esign your sanction letter to avail loan
            </p>
          </div>
        ),
      },
      {
        title: "Get your loan disbursed",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Get your loan disbursed to your bank account
            </p>
          </div>
        ),
      },
]

function LoanProcess() {
  return (
    <div className="relative">
      <div 
        className="absolute left-20 top-20 w-1/6 h-1/6 bg-no-repeat animate-rotate"
        style={{
          backgroundImage: 'url("/ring.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          opacity: 0.5
        }}
      />
      <div 
        className="absolute right-0 top-0 w-1/2 h-full bg-no-repeat animate-float"
        style={{
          backgroundImage: 'url("/golden_pipe_1.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'right center',
          opacity: 0.8
        }}
      />
      <div className="relative z-10">
        <Timeline data={data} />
      </div>
    </div>
  )
}

export default LoanProcess