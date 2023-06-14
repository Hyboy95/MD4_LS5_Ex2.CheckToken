export const checkToken = (req, res, next) => {
    let token = req.body.token;
    if (token === "123456") {
        console.log('Correct');
        next();
    } else {
        res.status(401).json({
            message:"Unauthorized"
        })
    }
}