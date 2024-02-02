const getAllTravel = "\
    select a.label, c.id, c.label, t.lifetime, t.score\
    from travel as t\
    left join activity as a on a.travel_id = t.id\
    left join city as c on c.id = t.city_id\
    where t.client_id = $1;\
";

const getOneTravel = "\
    select a.label, a.description, a.phone, a.place,\
        c.id, c.label,\
        t.lifetime, t.comment, t.score\
    from travel as t\
    left join activity as a on a.travel_id = t.id\
    left join city as c on c.id = t.city_id\
    where t.id = $1;\
";

module.exports = {
    getTravels: getAllTravel,
    getTravel: getOneTravel
}
