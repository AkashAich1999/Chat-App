import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET_KEY, {
        expiresIn:'15d'
    });

    res.cookie("jwt", token, {
        maxAge:15*24*60*60*1000,   // Milliseconds
        httpOnly:true,    // Users cannot access this Cookie via JavaScript (Prevents XXS Attacks - Cross-Site Scripting Attacks)
        sameSite:"Strict",  // CSRF Attacks Cross-Site Request Forgery Attacks
        secure:process.env.NODE_ENV !== "development" 
    });
}

export default generateTokenAndSetCookie;

