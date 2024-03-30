import React, { useState, useEffect } from 'react';
import MenuOverlay from "@/components/core/MenuOverlay";

function TopBarSection() {
    const [showMenuOverlay, setShowMenuOverlay] = useState(false);

    useEffect(() => {
        if (showMenuOverlay) document.body.classList.add('overflow-hidden');
        else document.body.classList.remove('overflow-hidden');
    }, [showMenuOverlay]);

    return (
        <div className="top-bar-section">
            <div className="top-bar">
                <div
                    onClick={() => setShowMenuOverlay(true)}
                    className="hamburger-pc"
                >
                    <div className="hamburger-btn">
                        <div className="hamburger-bar"></div>
                        <div className="hamburger-bar middle"></div>
                        <div className="hamburger-bar"></div>
                    </div>
                    <div className="hamburger-label">
                        <p className="hamburger-label-text">More</p>
                    </div>
                </div>
                <div className="logo">
                    <div className="logo-wrapper"><img src="/public/images/logo-anna.svg" loading="lazy" alt="" className="image" /></div>
                </div>
                <p className="cta">Order a table</p>
            </div>
            {showMenuOverlay && (
                <MenuOverlay
                    hideMenuOverlay={() => setShowMenuOverlay(false)}
                />
            )}
        </div>
    );
}

export default TopBarSection;
