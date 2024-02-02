const getAllTravel = "\
    select a.label, c.id, c.label, t.lifetime, t.score\
    from travel as t\
    left join activity as a on a.travel_id = t.id\
    left join city as c on c.id = t.city_id\
    where t.client_id = $1;\
";

module.exports = {
    getTravels: getAllTravel
}
