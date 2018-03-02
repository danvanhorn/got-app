INSERT INTO got_house(name, sigil, location, lord_id, castle, words)
VALUES (
	'Lannister of Casterly Rock', 
	'Lion', 
	(SELECT id from got_character WHERE fname = 'Tywin' AND lname = 'Lannister'), 
	'The Westerlands', 
	'Casterly Rock', 
	'Hear Me Roar!'
);

INSERT INTO got_house(name, sigil, location, lord_id, castle, words)
VALUES (
	'Stark of Winterfell', 
	'Dire Wolf', 
	(SELECT id from got_character WHERE fname = 'Eddard' AND lname = 'Stark'), 
	'The North', 
	'Winterfell', 
	'Winter Is Coming'
);

INSERT INTO got_house(name, sigil, location, lord_id, castle, words)
VALUES (
	'Baratheon Of Storm\'s End', 
	'Crowned Stag', 
	(SELECT id from got_character WHERE fname = 'Robert' AND lname = 'Baratheon'), 
	'Stormlands', 
	'Storm\'s End', 
	'Ours Is The Fury'
);

INSERT INTO got_house(name, sigil, location, lord_id, castle, words)
VALUES (
	'Arryn Of The Eyrie', 
	'Falcon', 
	(SELECT id from got_character WHERE fname = 'Robert' AND lname = 'Arryn'), 
	'The Vale Of Arryn', 
	'The Eyrie', 
	'As High As Honor'
);

INSERT INTO got_house(name, sigil, location, lord_id, castle, words)
VALUES (
	'Targaryen of King\'s Landing', 
	'Three Headed Dragon', 
	(SELECT id from got_character WHERE fname = 'Daenerys' AND lname = 'Targaryen'), 
	'Crownlands', 
	'Dragonstone', 
	'Fire and Blood'
);

INSERT INTO got_house(name, sigil, location, lord_id, castle, words)
VALUES (
	'Tully of Riverrun', 
	'Silver Trout', 
	(SELECT id from got_character WHERE fname = 'Edmure' AND lname = 'Tully'), 
	'Riverlands', 
	'Riverrun', 
	'Family, Duty, Honor'
);

INSERT INTO got_house(name, sigil, location, lord_id, castle, words)
VALUES (
	'Tyrell Of Highgarden', 
	'Golden Rose', 
	(SELECT id from got_character WHERE fname = 'Mace' AND lname = 'Tyrell'), 
	'Reach', 
	'Highgarden', 
	'Growing Strong'
);

INSERT INTO got_house(name, sigil, location, lord_id, castle, words)
VALUES (
	'Greyjoy Of Pyke', 
	'Gold Kraken', 
	(SELECT id from got_character WHERE fname = 'Euron' AND lname = 'Greyjoy'), 
	'Iron Islands', 
	'Pyke', 
	'We Do Not Sow'
);

INSERT INTO got_house(name, sigil, location, lord_id, castle, words)
VALUES (
	'Nymeros Martell', 
	'Gold Spear Piercing A Red Sun', 
	(SELECT id from got_character WHERE fname = 'Doran' AND lname = 'Martell'), 
	'Dorne', 
	'Sunspear', 
	'Unbowed, Unbent, Unbroken'
);

INSERT INTO got_house(name, sigil, location, lord_id, castle, words)
VALUES (
	'Bolton Of Dreadfort', 
	'Flayed Man', 
	(SELECT id from got_character WHERE fname = 'Roose' AND lname = 'Bolton'), 
	'The North', 
	'The Dreadfort', 
	'Our Blades Are Sharp'
);

INSERT INTO got_house(name, sigil, location, lord_id, castle, words)
VALUES (
	'Mormont Of Bear Island', 
	'Black Bear', 
	(SELECT id from got_character WHERE fname = 'Maege' AND lname = 'Mormont'), 
	'The North', 
	'Mormont Keep', 
	'Here We Stand'
);

INSERT INTO got_house(name, sigil, location, lord_id, castle, words)
VALUES (
	'Tarley Of Horn Hill', 
	'Striding Hunstman', 
	(SELECT id from got_character WHERE fname = 'Randyll' AND lname = 'Tarley'), 
	'Reach', 
	'Horn Hill', 
	'First In Battle'
);
