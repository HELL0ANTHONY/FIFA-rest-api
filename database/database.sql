CREATE DATABASE fifa_api;

CREATE TABLE players(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  position VARCHAR(10),
  nation VARCHAR(30),
  team VARCHAR(50)
);

-- test
INSERT INTO players (
  name,
  position,
  nation,
  team
) VALUES (
  'Pepe',
  'LB',
  'Portugal',
  'Real Madrid'
);