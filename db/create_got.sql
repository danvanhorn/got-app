SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

DROP TABLE IF EXISTS got_character;
DROP TABLE IF EXISTS got_house;
DROP TABLE IF EXISTS got_specialty;
DROP TABLE IF EXISTS got_alliance;
DROP TABLE IF EXISTS got_char_spec;
DROP TABLE IF EXISTS got_char_ally;
DROP TABLE IF EXISTS got_house_ally;

CREATE TABLE got_house(
	id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    sigil varchar(255) NOT NULL,
    location varchar(255) NOT NULL,
    lord_id INT(11) UNSIGNED,
    castle varchar(255),
    words varchar(255),
    PRIMARY KEY (id),
    UNIQUE KEY(name),
    FOREIGN KEY (lord_id) REFERENCES got_character(id) ON UPDATE NO ACTION
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE got_character (
	id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    fname varchar(255) NOT NULL,
    lname varchar(255) NOT NULL,
    nickname varchar(255),
    gender varchar(255),
    age INT(11) UNSIGNED,
    house varchar(255),
    PRIMARY KEY (id),
    UNIQUE KEY (fname, lname),
    FOREIGN KEY (house) REFERENCES got_house(name) ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE got_specialty (
	id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    specialty_type varchar(255),
    PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE got_alliance (
	id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE got_char_spec (
	char_id INT(11) UNSIGNED,
    spec_id INT(11) UNSIGNED,
	PRIMARY KEY  (char_id, spec_id),
	CONSTRAINT fk_char_spec_char FOREIGN KEY (char_id) REFERENCES got_character (id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_char_spec_spec FOREIGN KEY (spec_id) REFERENCES got_specialty (id)  ON DELETE RESTRICT ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE got_char_ally (
	char_id INT(11) UNSIGNED,
    ally_id INT(11) UNSIGNED,
	PRIMARY KEY (char_id, ally_id),
	CONSTRAINT fk_char_ally_char FOREIGN KEY (char_id) REFERENCES got_character (id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_char_ally_ally FOREIGN KEY (ally_id) REFERENCES got_alliance (id) ON DELETE RESTRICT ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE got_house_ally (
	house_id INT(11) UNSIGNED,
    ally_id INT(11) UNSIGNED,
	PRIMARY KEY (house_id, ally_id),
	CONSTRAINT fk_house_ally_house FOREIGN KEY (house_id) REFERENCES got_character(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_house_ally_ally FOREIGN KEY (ally_id) REFERENCES got_alliance(id) ON DELETE RESTRICT ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS=1;
