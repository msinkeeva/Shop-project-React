import React, { useState, useEffect } from "react";
import arrow from "../assets/up-arrow.png"

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }
        })
    }, [])
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    return (
        <div className="top-to-btm">
            {" "}
            {showTopBtn && (
                <div className="scroll-button"
                    onClick={goToTop}>Наверх <img className="arrow" src={arrow}/></div>
            )}{" "}
        </div>
    )
}
export default ScrollToTop;