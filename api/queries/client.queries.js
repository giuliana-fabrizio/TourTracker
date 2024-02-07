const getuser = "\
    select *\
    from client\
    where email like $1;\
";

const signup = "\
    insert into client\
    (firstname, name, email, gender, city_id, password)\
    values ($1,$2, $3, $4, $5, $6);\
";

module.exports = {
    getuser: getuser,
    signup: signup
}