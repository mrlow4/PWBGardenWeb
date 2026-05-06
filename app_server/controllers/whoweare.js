/* GET Who We Are age*/
const whoweare= (req, res) => {
    res.render("whoweare", {title:"This is who we are!"});
};

module.exports = {
    whoweare
}