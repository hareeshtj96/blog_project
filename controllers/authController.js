const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('../models/user')

exports.register = async (req, res) => {
    const { userName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ userName, email, password: hashedPassword })
    res.redirect('/auth/login');

}


exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
        req.session.user = { id: user.id, userName: user.userName }
        res.redirect('/posts')
    } else {
        res.send('Invalid credentials')
    }
}