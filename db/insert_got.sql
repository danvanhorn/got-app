TRUNCATE TABLE got_character;
TRUNCATE TABLE got_house;
TRUNCATE TABLE got_specialty;
TRUNCATE TABLE got_alliance;
TRUNCATE TABLE got_house_ally;
TRUNCATE TABLE got_char_spec;

/* characters*/

INSERT INTO got_character(fname, lname, nickname, gender, age, house) VALUES ('Tywin','Lannister','The Old Lion','male',65,'Lannister of Casterly Rock');
INSERT INTO got_character(fname, lname, nickname, gender, age, house) VALUES ('Cersei','Lannister','Cersei the Lioness','female',34,'Lannister of Casterly Rock');
INSERT INTO got_character(fname, lname, nickname, gender, age, house) VALUES ('Jamie','Lannister','Kingslayer','male',34,'Lannister of Casterly Rock');
INSERT INTO got_character(fname, lname, nickname, gender, age, house) VALUES ('Tyrion','Lannister','The Imp','male',65,'Lannister of Casterly Rock');
INSERT INTO got_character(fname, lname, nickname, gender, age, house) VALUES ('Eddard','Stark','Ned','male',49,'Stark of Winterfell');
INSERT INTO got_character(fname, lname, nickname, gender, age, house) VALUES ('Aria','Stark','Arry','female',15,'Stark of Winterfell');
INSERT INTO got_character(fname, lname, nickname, gender, age, house) VALUES ('Sansa','Stark','Lady of Winterfell','female',18,'Stark of Winterfell');
INSERT INTO got_character(fname, lname, nickname, gender, age, house) VALUES ('Jon','Snow','King Crow','male',22,'Stark of Winterfell');
INSERT INTO got_character(fname, lname, nickname, gender, age, house) VALUES ('Robert','Baratheon','The Usurper','male',47,"Baratheon Of Storm's End");
INSERT INTO got_character(fname, lname, nickname, gender, age, house) VALUES ('Renley','Baratheon',"Lord of Storm's End",'male',30,"Baratheon Of Storm's End");
INSERT INTO got_character(fname, lname, nickname, gender, age, house) VALUES ('Robert','Arryn','Sweetrobin','male',47,"Arryn Of The Eyrie");
INSERT INTO got_character(fname, lname, nickname, gender, age, house) VALUES ('Lysa','Arryn','Lady Regent of the Vale','female',35,"Arryn Of The Eyrie");
INSERT INTO got_character(fname, lname, nickname, gender, age, house) VALUES ('Daenerys','Targaryen','Khaleesi','female',22,"Targaryen of King's Landing");
INSERT INTO got_character(fname, lname, nickname, gender, age, house) VALUES ('Edmure','Tully','Lord Paramount of the Trident', 'male',40,'Tully of Riverrun');
INSERT INTO got_character(fname, lname, nickname, gender, age, house) VALUES ('Mace','Tyrell','Lord Oaf','male',50,'Tyrell Of Highgarden');
INSERT INTO got_character(fname, lname, nickname, gender, age, house) VALUES ('Euron','Greyjoy','Son of the Sea Wind','male',35,'Greyjoy Of Pyke');
INSERT INTO got_character(fname, lname, nickname, gender, age, house) VALUES ('Theon','Greyjoy','Reek','male',23,'Greyjoy Of Pyke');
INSERT INTO got_character(fname, lname, nickname, gender, age, house) VALUES ('Doran','Martell','Lord of Sunspear','male',53,'Nymeros Martell');
INSERT INTO got_character(fname, lname, gender, age, house) VALUES ('Roose','Bolton','male',45,'Bolton Of Dreadfort');
INSERT INTO got_character(fname, lname, nickname, gender, age, house) VALUES('Maege','Mormont','The She-Bear','female',52,'Mormont Of Bear Island');
INSERT INTO got_character(fname, lname, nickname, gender, age, house) VALUES('Randyll','Tarley','Justiciar','male',56,'Tarley Of Horn Hill');
INSERT INTO got_character(fname, lname, nickname, gender, age, house) VALUES('Samwell','Tarley','Prince Pork-chop','male',22,'Tarley Of Horn Hill');

INSERT INTO got_character(fname, nickname, gender, age) VALUES ('Bronn','Bronn','male',18);
INSERT INTO got_character(fname, lname, nickname, gender, age) VALUES ('Gregor','Clegaine','The Mountain','male',40);
INSERT INTO got_character(fname, lname, nickname, gender, age) VALUES ('Sandor','Clegaine','The Hound','male',38);
INSERT INTO got_character(fname, lname, nickname, gender, age) VALUES ('Brienne','Tarth','The Maid of Tarth','female',34);

/* houses */

INSERT INTO got_house(name, sigil, location, lord_id, castle, words) VALUES ('Lannister of Casterly Rock', 'Lion', 'The Westerlands', (SELECT id from got_character WHERE fname = 'Tywin' AND lname = 'Lannister'), 'Casterly Rock', 'Hear Me Roar!');
INSERT INTO got_house(name, sigil, location, lord_id, castle, words) VALUES ('Stark of Winterfell', 'Dire Wolf', 'The North',(SELECT id from got_character WHERE fname = 'Eddard' AND lname = 'Stark'), 'Winterfell', 'Winter Is Coming');
INSERT INTO got_house(name, sigil, location, lord_id, castle, words) VALUES ("Baratheon Of Storm's End",'Crowned Stag', 'Stormlands',(SELECT id from got_character WHERE fname = 'Robert' AND lname = 'Baratheon'), "Storm's End", 'Ours Is The Fury');
INSERT INTO got_house(name, sigil, location, lord_id, castle, words) VALUES ('Arryn Of The Eyrie', 'Falcon', 'The Vale Of Arryn', (SELECT id from got_character WHERE fname = 'Robert' AND lname = 'Arryn'), 'The Eyrie', 'As High As Honor');
INSERT INTO got_house(name, sigil, location, lord_id, castle, words) VALUES ("Targaryen of King's Landing", 'Three Headed Dragon', 'Crownlands', (SELECT id from got_character WHERE fname = 'Daenerys' AND lname = 'Targaryen'), 'Dragonstone', 'Fire and Blood');
INSERT INTO got_house(name, sigil, location, lord_id, castle, words) VALUES ('Tully of Riverrun', 'Silver Trout','Riverlands', (SELECT id from got_character WHERE fname = 'Edmure' AND lname = 'Tully'), 'Riverrun', 'Family, Duty, Honor');
INSERT INTO got_house(name, sigil, location, lord_id, castle, words) VALUES ('Tyrell Of Highgarden', 'Golden Rose', 'Reach',(SELECT id from got_character WHERE fname = 'Mace' AND lname = 'Tyrell'), 'Highgarden', 'Growing Strong');
INSERT INTO got_house(name, sigil, location, lord_id, castle, words) VALUES ('Greyjoy Of Pyke', 'Gold Kraken', 'Iron Islands',(SELECT id from got_character WHERE fname = 'Euron' AND lname = 'Greyjoy'), 'Pyke', 'We Do Not Sow');
INSERT INTO got_house(name, sigil, location, lord_id, castle, words) VALUES ('Nymeros Martell', 'Gold Spear Piercing A Red Sun', 'Dorne',(SELECT id from got_character WHERE fname = 'Doran' AND lname = 'Martell'), 'Sunspear', 'Unbowed, Unbent, Unbroken');
INSERT INTO got_house(name, sigil, location, lord_id, castle, words) VALUES ('Bolton Of Dreadfort', 'Flayed Man', 'The North',(SELECT id from got_character WHERE fname = 'Roose' AND lname = 'Bolton'), 'The Dreadfort', 'Our Blades Are Sharp');
INSERT INTO got_house(name, sigil, location, lord_id, castle, words) VALUES ('Mormont Of Bear Island', 'Black Bear','The North', (SELECT id from got_character WHERE fname = 'Maege' AND lname = 'Mormont'), 'Mormont Keep', 'Here We Stand');
INSERT INTO got_house(name, sigil, location, lord_id, castle, words) VALUES ('Tarley Of Horn Hill', 'Striding Hunstman', 'Reach',(SELECT id from got_character WHERE fname = 'Randyll' AND lname = 'Tarley'), 'Horn Hill', 'First In Battle');


/* specialties */

INSERT INTO got_specialty(specialty_type) VALUES ('Fighter');
INSERT INTO got_specialty(specialty_type) VALUES ('Leader');
INSERT INTO got_specialty(specialty_type) VALUES ('Politician');
INSERT INTO got_specialty(specialty_type) VALUES ('Maester');
INSERT INTO got_specialty(specialty_type) VALUES ('Magic');
INSERT INTO got_specialty(specialty_type) VALUES ('Espionage');

/* alliances */

INSERT INTO got_alliance(name) VALUES ('Neutral');
INSERT INTO got_alliance(name) VALUES ('Evil');
INSERT INTO got_alliance(name) VALUES ('In Power');
INSERT INTO got_alliance(name) VALUES ('Rebellion');

/*people alliance relationship */


/* house alliance relationship */
INSERT INTO got_house_ally(house_id, ally_id) VALUES ((SELECT id FROM got_house where name  = 'Lannister of Casterly Rock'), (SELECT id FROM got_alliance WHERE name = 'In Power'));
INSERT INTO got_house_ally(house_id, ally_id) VALUES ((SELECT id FROM got_house where name  = 'Stark of Winterfell'), (SELECT id FROM got_alliance WHERE name = 'Rebellion'));
INSERT INTO got_house_ally(house_id, ally_id) VALUES ((SELECT id FROM got_house where name  = "Baratheon of Storm's End"), (SELECT id FROM got_alliance WHERE name = 'In Power'));
INSERT INTO got_house_ally(house_id, ally_id) VALUES ((SELECT id FROM got_house where name  = 'Arryn Of The Eyrie'), (SELECT id FROM got_alliance WHERE name = 'Neutral'));
INSERT INTO got_house_ally(house_id, ally_id) VALUES ((SELECT id FROM got_house where name  = "Targaryen of King's Landing"), (SELECT id FROM got_alliance WHERE name = 'Rebellion'));
INSERT INTO got_house_ally(house_id, ally_id) VALUES ((SELECT id FROM got_house where name  = 'Tully of Riverrun'), (SELECT id FROM got_alliance WHERE name = 'Rebellion'));
INSERT INTO got_house_ally(house_id, ally_id) VALUES ((SELECT id FROM got_house where name  = 'Tyrell of Highgarden'), (SELECT id FROM got_alliance WHERE name = 'Neutral'));
INSERT INTO got_house_ally(house_id, ally_id) VALUES ((SELECT id FROM got_house where name  = 'Greyjoy Of Pyke'), (SELECT id FROM got_alliance WHERE name = 'Neutral'));
INSERT INTO got_house_ally(house_id, ally_id) VALUES ((SELECT id FROM got_house where name  = 'Nymeros Martell'), (SELECT id FROM got_alliance WHERE name = 'Rebellion'));
INSERT INTO got_house_ally(house_id, ally_id) VALUES ((SELECT id FROM got_house where name  = 'Bolton Of Dreadfort'), (SELECT id FROM got_alliance WHERE name = 'Evil'));
INSERT INTO got_house_ally(house_id, ally_id) VALUES ((SELECT id FROM got_house where name  = 'Mormont Of Bear Island'), (SELECT id FROM got_alliance WHERE name = 'In Power'));
INSERT INTO got_house_ally(house_id, ally_id) VALUES ((SELECT id FROM got_house where name  = 'Tarley Of Horn Hill'), (SELECT id FROM got_alliance WHERE name = 'Rebellion'));

/* character specialty relationship */

INSERT INTO got_char_spec(char_id, spec_id) VALUES ((SELECT id FROM got_character WHERE fname = "Tywin" AND lname = "Lannister"),(SELECT id FROM got_specialty WHERE specialty_type = "Politician"));
INSERT INTO got_char_spec(char_id, spec_id) VALUES ((SELECT id FROM got_character WHERE fname = "Jamie" AND lname = "Lannister"),(SELECT id FROM got_specialty WHERE specialty_type = "Leader"));
INSERT INTO got_char_spec(char_id, spec_id) VALUES ((SELECT id FROM got_character WHERE fname = "Jamie" AND lname = "Lannister"),(SELECT id FROM got_specialty WHERE specialty_type = "Fighter"));
INSERT INTO got_char_spec(char_id, spec_id) VALUES ((SELECT id FROM got_character WHERE fname = "Tyrion" AND lname = "Lannister"),(SELECT id FROM got_specialty WHERE specialty_type = "Politician"));
INSERT INTO got_char_spec(char_id, spec_id) VALUES ((SELECT id FROM got_character WHERE fname = "Tyrion" AND lname = "Lannister"),(SELECT id FROM got_specialty WHERE specialty_type = "Espionage"));
INSERT INTO got_char_spec(char_id, spec_id) VALUES ((SELECT id FROM got_character WHERE fname = "Cersei" AND lname = "Lannister"),(SELECT id FROM got_specialty WHERE specialty_type = "Espionage"));
INSERT INTO got_char_spec(char_id, spec_id) VALUES ((SELECT id FROM got_character WHERE fname = "Cersei" AND lname = "Lannister"),(SELECT id FROM got_specialty WHERE specialty_type = "Politician"));
INSERT INTO got_char_spec(char_id, spec_id) VALUES ((SELECT id FROM got_character WHERE fname = "Cersei" AND lname = "Lannister"),(SELECT id FROM got_specialty WHERE specialty_type = "Leader"));
INSERT INTO got_char_spec(char_id, spec_id) VALUES ((SELECT id FROM got_character WHERE fname = "Eddard" AND lname = "Stark"),(SELECT id FROM got_specialty WHERE specialty_type = "Leader"));
INSERT INTO got_char_spec(char_id, spec_id) VALUES ((SELECT id FROM got_character WHERE fname = "Eddard" AND lname = "Stark"),(SELECT id FROM got_specialty WHERE specialty_type = "Fighter"));
INSERT INTO got_char_spec(char_id, spec_id) VALUES ((SELECT id FROM got_character WHERE fname = "Aria" AND lname = "Stark"),(SELECT id FROM got_specialty WHERE specialty_type = "Fighter"));
INSERT INTO got_char_spec(char_id, spec_id) VALUES ((SELECT id FROM got_character WHERE fname = "Aria" AND lname = "Stark"),(SELECT id FROM got_specialty WHERE specialty_type = "Espionage"));
INSERT INTO got_char_spec(char_id, spec_id) VALUES ((SELECT id FROM got_character WHERE fname = "Aria" AND lname = "Stark"),(SELECT id FROM got_specialty WHERE specialty_type = "Magic"));
INSERT INTO got_char_spec(char_id, spec_id) VALUES ((SELECT id FROM got_character WHERE fname = "Sansa" AND lname = "Stark"),(SELECT id FROM got_specialty WHERE specialty_type = "Leader"));
INSERT INTO got_char_spec(char_id, spec_id) VALUES ((SELECT id FROM got_character WHERE fname = "Jon" AND lname = "Snow"),(SELECT id FROM got_specialty WHERE specialty_type = "Leader"));
INSERT INTO got_char_spec(char_id, spec_id) VALUES ((SELECT id FROM got_character WHERE fname = "Jon" AND lname = "Snow"),(SELECT id FROM got_specialty WHERE specialty_type = "Fighter"));

