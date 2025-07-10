const User = require('../models/User');

exports.getProfile = async (req, res) => {

    const user  = await User.findByPk(req.user.id, {
        attributes : ['id', 'username', 'email', 'role']
    });
    if(!user){
        return res.status(404).json({message: 'User not found'})
    }
    return res.json(user);
};

