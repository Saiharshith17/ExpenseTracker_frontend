import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';
import React,{ useState } from 'react';
import './HeroSection.css';  // Traditional CSS file
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "../../pages/SignUp/SignUp";
import Login from "../../pages/Login/Login";

// ElegantShape Component
function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = 'from-white/[0.08]',
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={`elegant-shape ${className}`}
        >
            <motion.div
                animate={{
                    y: [0, 150, 0],
                    
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div className="shape-background" />
            </motion.div>
        </motion.div>
    );
}

// HeroGeometric Component
function HeroGeometric({
    badge = 'Start Now',
    title1 = 'Track Everything of yours',
    title2 = 'Collecting all your expenses into one',
}) {
    return (
        <div className="hero-section">
            <div className="hero-background" />

            <div className="elegant-shapes-container">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    className="left-shape"
                />
                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="right-shape"
                />
                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    className="bottom-left-shape"
                />
                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    className="top-right-shape"
                />
                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-cyan-500/[0.15]"
                    className="top-left-shape"
                />
            </div>

            <div className="content">
                <div className="badge-container">
                    <Circle className="badge-icon" />
                    <span className="badge-text">{badge}</span>
                </div>

                <h1 className="title">
                    <span className="title-main">{title1}</span>
                    <br />
                    <span className="title-sub">{title2}</span>
                </h1>
                <div className="link">
                <div className="link1">
                    <Link to="/signup">
                        <button>Signup</button>
                    </Link>
                </div>
                <div className="link2">
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
            </div>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
                
                <p className="description">
                  
                </p>
            </div>

            <div className="overlay" />
        </div>
    );
}

export { HeroGeometric };