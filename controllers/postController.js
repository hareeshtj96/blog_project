const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    const image = req.file.filename;
    await Post.create({
        title,
        content,
        image,
        userId: req.session.user.id,
    });
    res.redirect('/posts');
};
