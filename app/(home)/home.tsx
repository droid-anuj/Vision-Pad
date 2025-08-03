import React, { useState } from 'react';
import { Users, Zap, Shield, Palette, Globe, Star,  Mail } from 'lucide-react';
import Image from 'next/image';
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import {
  Atom,
  Boxes,
  ShieldCheck,
  Network,
  CircleDot,
} from "lucide-react";

const VisionPadHome = () => {
  const [showTestingCreds, setShowTestingCreds] = useState(false);

  const features = [
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Real-time Collaboration",
      description: "Work together seamlessly with your team in real-time. See changes instantly as they happen.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Ultra-responsive interface with minimal latency. Your ideas flow as fast as you think.",
    },
    {
      icon: <Palette className="w-8 h-8 text-orange-600" />,
      title: "Rich Drawing Tools",
      description: "Complete set of drawing tools, shapes, and text options for unlimited creativity.",
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-600" />,
      title: "Secure & Private",
      description: "Enterprise-grade security ensures your ideas and collaborations stay protected.",
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: "Access Anywhere",
      description: "Work from any device, anywhere in the world. Your boards sync across all platforms.",
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Version History",
      description: "Never lose your work. Track changes and revert to any previous version instantly.",
    },
  ];
  

const techStack = [
  {
    title: "React",
    description: "Declarative, component-based UI library for building fast interfaces.",
    icon: <Atom className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "Next.js",
    description: "Powerful React framework for building server-rendered and static websites.",
    icon: <Boxes className="w-10 h-10 text-black" />,
  },
  {
    title: "Clerk",
    description: "Authentication and user management made easy with pre-built components.",
    icon: <ShieldCheck className="w-10 h-10 text-purple-600" />,
  },
  {
    title: "Liveblocks",
    description: "Real-time collaboration for your app with presence and conflict-free syncing.",
    icon: <Network className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Convex",
    description: "A backend as a service designed for modern, reactive apps.",
    icon: <CircleDot className="w-10 h-10 text-indigo-600" />,
  },
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br rounded-lg flex items-center justify-center">
                <Image
                    src="/logo.svg"
                    alt="VisionPad"
                    width={20}
                    height={20}
                    className="w-10 h-10"
                    />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                VisionPad
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors">
                <SignInButton/>
              </div>
              <div className="px-6 py-2 bg-gradient-to-r from-orange-500 to-yellow-600 text-white rounded-lg hover:from-orange-600 hover:to-yellow-700 font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                <SignUpButton/>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Collaborate. Create.{' '}
            <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Visualize.
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            VisionPad is the ultimate real-time collaborative whiteboard that brings your team&apos;s ideas to life. 
            Draw, brainstorm, and innovate together from anywhere in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-600 text-white rounded-lg hover:from-orange-600 hover:to-yellow-700 font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <SignUpButton>
                Start Creating Free
                </SignUpButton>
            </div>
            <button 
              onClick={() => setShowTestingCreds(!showTestingCreds)}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-orange-500 hover:text-orange-600 font-semibold text-lg transition-all duration-200"
            >
              Demo Credentials!
            </button>
          </div>
        </div>
      </section>

      {/* Testing Credentials Section */}
      {showTestingCreds && (
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-yellow-50 border-y border-yellow-200">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-400">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium mr-3">
                  TESTING
                </span>
                Demo Credentials
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 mb-2">Email:</p>
                  <code className="text-blue-600 bg-blue-50 px-2 py-1 rounded text-sm">
                    anujyadavvvv12345@gmail.com
                  </code>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 mb-2">Password:</p>
                  <code className="text-blue-600 bg-blue-50 px-2 py-1 rounded text-sm">
                    visionpadtest
                  </code>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Use these credentials to test the application. This is a demo account with limited functionality.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-200">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-black mb-4">
                Everything you need to bring ideas to life
            </h3>
            <p className="text-xl text-black max-w-2xl mx-auto">
                Powerful features designed for modern teams who value creativity and collaboration.
            </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <div 
                key={index}
                className="bg-gray-200 p-8 rounded-3xl shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] hover:shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] transition-all duration-300 group"
                >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 text-indigo-600">
                    {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                </p>
                </div>
            ))}
            </div>
        </div>
        </section>


      {/* Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-200">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
                The Stack Behind VisionPad
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Built using modern web tools to deliver fast, secure, and real-time collaboration.
            </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
                <div
                key={index}
                className="bg-gray-200 p-8 rounded-3xl shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] hover:shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] transition-all duration-300 group"
                >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 text-indigo-600">
                    {tech.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    {tech.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                    {tech.description}
                </p>
                </div>
            ))}
            </div>
        </div>
        </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-brrounded-lg flex items-center justify-center">
                 <Image
                        src="/logo.svg"
                        alt="VisionPad"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                        />
                </div>
                <h4 className="text-xl font-bold">VisionPad</h4>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                The ultimate real-time collaborative whiteboard for modern teams. 
                Create, collaborate, and innovate together.
              </p>
            </div>
            
            <div>
                <h5 className="font-semibold mb-4">Connect</h5>
                <ul className="space-y-3 text-gray-400">
                    <li>
                    <a
                        href="https://github.com/droid-anuj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors flex items-center space-x-2"
                    >
                        <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                        <span className="text-sm font-bold">f</span>
                        </div>
                        <span>GitHub</span>
                    </a>
                    </li>
                    <li>
                    <a
                        href="https://www.linkedin.com/in/anuj-yadav-194aa81bb/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors flex items-center space-x-2"
                    >
                        <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                        <span className="text-sm font-bold">in</span>
                        </div>
                        <span>LinkedIn</span>
                    </a>
                    </li>
                    <li>
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText('anujyadavvvv12345@gmail.com');
                            alert('Email copied to clipboard!');
                        }}
                        className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                    >
                        <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                            <Mail className="text-sm font-bold">@</Mail>
                        </div>
                        <span> anujyadavvvv12345@gmail.com</span>
                    </button>
                    </li>
                </ul>
                </div>


          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 VisionPad. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default VisionPadHome;
