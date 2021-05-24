
exports.getPost = (req,res)=>{
    res.json({
        post: [{title:'first post'},{title:'second post'}]
    });
};