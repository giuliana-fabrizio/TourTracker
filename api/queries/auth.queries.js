const sigin = "\
    select *\
    from client\
    where email like $1 and password like $2;\
";

module.exports = {
    sigin: sigin
}
