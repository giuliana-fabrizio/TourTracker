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

const addTravel = "\
    insert into travel\
    (start_date, end_date, comment, score, client_id, city_id)\
    values ($1, $2, $3, $4, $5, $6);\
";

const updateTravel = "\
    update travel\
    set start_date = $1, end_date = $2, comment = $3, score = $4, client_id = $5, city_id = $6\
    where id = $7;\
";

const deleteActivities = "delete from activity where travel_id = $1;";

const deleteTravel = "delete from travel where id = $1;";

module.exports = {
    getTravels: getAllTravel,
    getTravel: getOneTravel,
    createTravel: addTravel,
    updateTravel: updateTravel,
    removeTravel: deleteTravel,
    removeActivities: deleteActivities
}
