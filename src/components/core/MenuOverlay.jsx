import React from 'react'

function MenuOverlay({ hideMenuOverlay }) {
    return (
        <div className="menu-drawer">
            <div className="close-btn">
                <div onClick={hideMenuOverlay} className="toggle-close">
                    <div className="cross-icon">
                        <div className="cross-bar left"></div>
                        <div className="cross-bar right"></div>
                    </div>
                    <div style={{ color: 'rgb(236,196,198)' }} className="close-label">
                        <p className="close-btn-label">close</p>
                    </div>
                </div>
            </div>
            <div className="drawer-body">
                <div className="menu-list">
                    <ul role="list" className="list">
                        <li className="drawer-item">Christmas</li>
                        <li className="drawer-item">Brans</li>
                        <li className="drawer-item">Evening</li>
                        <li className="drawer-item">Noon</li>
                        <li className="drawer-item">happy hour</li>
                        <li className="drawer-item">BLUE ROOM GUIDE</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MenuOverlay;
