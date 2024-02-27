const getAllTravel = "\
    select c.id, c.department_id, c.label, d.region_id,\
    t.comment, t.id, t.start_date, t.end_date, t.score\
    from travel as t\
    left join city as c on c.id = t.city_id\
    inner join department as d on d.id = c.department_id\
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
    (lifetime, comment, score, client_id, city_id)\
    values ($1, $2, $3, $4, $5);\
";

const updateTravel = "\
    update travel\
    set lifetime = $1, comment = $2, score = $3, client_id = $4, city_id = $5\
    where id = $6;\
";

const deleteTravel = "delete from travel where id = $1;";

const getAllDepartments = "select * from department order by label asc;";

const getAllRegions = "select * from region order by label asc;";

module.exports = {
    getTravels: getAllTravel,
    getTravel: getOneTravel,
    createTravel: addTravel,
    updateTravel: updateTravel,
    removeTravel: deleteTravel,
    getDepartments: getAllDepartments,
    getRegions: getAllRegions
}
