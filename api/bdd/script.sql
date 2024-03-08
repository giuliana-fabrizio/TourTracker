drop table if exists activity;
drop table if exists travel;
drop table if exists client;
drop table if exists city;
drop table if exists department;
drop table if exists region;

create table region (
    id      varchar(3),
    label   varchar(50),
    constraint region_pk primary key (id)
);

create table department (
    region_id   varchar(3),
    id          varchar(3),
    label       varchar(50),
    constraint department_pk primary key (id),
    constraint department_region_fk
    foreign key (region_id) references region(id)
);

create table city (
    id              serial,
    label           varchar(50),
    coords          geometry(point, 4326),
    department_id  varchar(3),
    constraint city_pk primary key (id),
    constraint city_department_fk
    foreign key (department_id) references department(id)
);

create table client (
    id          serial,
    firstname   varchar(20),
    name        varchar(50),
    email       varchar(50),
    gender      varchar(10),
    city_id     int,
    password    varchar(9),
    constraint client_pk primary key (id),
    constraint client_city
    foreign key (city_id) references city(id)
);

create table travel (
    id          serial,
    start_date  date,
    end_date    date,
    comment     text,
    score       int,
    client_id   int,
    city_id     int,
    constraint travel_pk primary key (id),
    constraint client_travel
    foreign key (client_id) references client(id),
    constraint city_travel
    foreign key (city_id) references city(id)
);

create table activity (
    id          serial,
    label       varchar(50),
    description text,
    phone       varchar(15),
    place       varchar(150),
    travel_id   int,
    constraint activity_pk primary key (id),
    constraint activity_travel
    foreign key (travel_id) references travel(id)
);
