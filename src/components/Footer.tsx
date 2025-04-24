import React from 'react'
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandX,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
  IconMapPin,
} from "@tabler/icons-react";

const socialLinks = [
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "YouTube",
      icon: (
        <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
];

const quickLinks = [
  { title: "About Us", href: "#" },
  { title: "Services", href: "#" },
  { title: "Portfolio", href: "#" },
  { title: "Blog", href: "#" },
  { title: "Contact", href: "#" },
];

function Footer() {
  return (
    <footer className="bg-black relative">
        {/* <div 
        className="absolute inset-0 bg-cover bg-no-repeat opacity-20"
        style={{ 
          backgroundImage: "url('/golden_pipe_2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingBottom: '4rem',
          paddingRight: '2rem'
        }}
      /> */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">BlinkR</h3>
            <p className="text-gray-300">
              Making the world a better place through innovative solutions and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-300">
                <IconMail className="h-5 w-5" />
                <span>contact@company.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <IconPhone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <IconMapPin className="h-5 w-5" />
                <span>123 Business Street, City, Country</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons - Centered */}
        <div className="mt-12 flex justify-center">
          <FloatingDock
            mobileClassName="translate-y-20"
            items={socialLinks}
          />
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} Blinkr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer