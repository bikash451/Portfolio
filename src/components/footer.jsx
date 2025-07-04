import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/bikash451',
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bikash-chaudhary/',
      icon: Linkedin
    },
    {
      name: 'Email',
      url: 'mailto:bkashchaudhary24@gmail.com',
      icon: Mail
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Bikash Chaudhary</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full-stack developer passionate about creating digital experiences 
              that make a difference. Always learning, always building. 
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 group"
                    aria-label={link.name}
                  >
                    <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <ExternalLink className="w-3 h-3" />
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <span>bkashchaudhary24@gmail.com</span>
              </div>
              <div className="text-gray-400">
                <p className="mb-2">Available for freelance projects</p>
                <p>Open to new opportunities</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 text-sm mb-4 sm:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-400 fill-current" />
            <span>by Bikash Chaudhary</span>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Bikash Chaudhary. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;