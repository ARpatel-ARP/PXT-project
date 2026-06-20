import jwt from "jsonwebtoken"

export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({
                success:false,
                message:"User not Authenticated"
            })
        }
        // agr token hai then verify
        const decode = await jwt.verify(token, process.env.JWT_SECRET)
        if (!decode) {
            return res.status(401).json({
                success:false,
                message:"Invalid Token"
            })
        }
        req.id = decode.userId;
        next()
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message:'Internal server error',
            success:false
        })
        
    }
}