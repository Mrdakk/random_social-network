import React from 'react';

import '../../css/footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="containerFooter">
                © Copyright {new Date().getFullYear()}
            </div>
        </footer>
    );
}