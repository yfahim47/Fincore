const checkRole = () => {
    return (req, res, next) => {
        console.log(req.user.role);
        if(req.user.role !== 'Admin' && req.user.role !== 'admin' ){
            return res.status(403).json({message:'Unauthorized user'});
        }else{
            console.log("else block");
        }
        next();
    }
}

module.exports = checkRole;