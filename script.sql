CREATE TABLE message (id_mes SERIAL NOT NULL, contenu varchar(255) NOT NULL, score int4 NOT NULL, "date" date NOT NULL, id_sujet int4 NOT NULL, id_utilisateur int4 NOT NULL, PRIMARY KEY (id_mes));
CREATE TABLE Sujet (id_sujet SERIAL NOT NULL, description varchar(255) NOT NULL, score int4 NOT NULL, "date" date NOT NULL, id_conf int4 NOT NULL, id_utilisateur int4 NOT NULL, id_jeux int4, PRIMARY KEY (id_sujet));
CREATE TABLE Configuration (id_configuration int4 NOT NULL, Nom varchar(255) NOT NULL, id_cg int4 NOT NULL, id_proc int4 NOT NULL, id_mem int4 NOT NULL, PRIMARY KEY (id_configuration));
CREATE TABLE Carte_Graphique (id_carte_graphique int4 NOT NULL, nom varchar(255) NOT NULL, memoire varchar(255) NOT NULL, generation varchar(255) NOT NULL, PRIMARY KEY (id_carte_graphique));
CREATE TABLE Processeur (id_processeur SERIAL NOT NULL, nom varchar(255) NOT NULL, generation int4 NOT NULL, cadence numeric(2, 1) NOT NULL, PRIMARY KEY (id_processeur));
CREATE TABLE Memoire (id_memoire SERIAL NOT NULL, nom varchar(255) NOT NULL, capacite int4 NOT NULL, version varchar(255) NOT NULL, PRIMARY KEY (id_memoire));
CREATE TABLE Utilisateur (id_utilisateur int4 NOT NULL, mail varchar(255) NOT NULL, mdp varchar(255) NOT NULL, PRIMARY KEY (id_utilisateur));
CREATE TABLE Jeux (id_jeux int4 NOT NULL, Nom varchar(255) NOT NULL, annee date, PRIMARY KEY (id_jeux));
CREATE TABLE Jeux_Configuration (id_jeux int4 NOT NULL, id_configuration int4 NOT NULL, marqueur varchar(1) NOT NULL, PRIMARY KEY (id_jeux, id_configuration));
CREATE TABLE Utilisateur_Configuration (id_utilisateur int4 NOT NULL, id_configuration int4 NOT NULL, PRIMARY KEY (id_utilisateur, id_configuration));
ALTER TABLE message ADD CONSTRAINT FKmessage390897 FOREIGN KEY (id_sujet) REFERENCES Sujet (id_sujet);
ALTER TABLE Sujet ADD CONSTRAINT FKSujet528373 FOREIGN KEY (id_conf) REFERENCES Configuration (id_configuration);
ALTER TABLE Configuration ADD CONSTRAINT FKConfigurat777349 FOREIGN KEY (id_cg) REFERENCES Carte_Graphique (id_carte_graphique);
ALTER TABLE Configuration ADD CONSTRAINT FKConfigurat530924 FOREIGN KEY (id_proc) REFERENCES Processeur (id_processeur);
ALTER TABLE Configuration ADD CONSTRAINT FKConfigurat315647 FOREIGN KEY (id_mem) REFERENCES Memoire (id_memoire);
ALTER TABLE Sujet ADD CONSTRAINT FKSujet850779 FOREIGN KEY (id_utilisateur) REFERENCES Utilisateur (id_utilisateur);
ALTER TABLE Sujet ADD CONSTRAINT FKSujet391474 FOREIGN KEY (id_jeux) REFERENCES Jeux (id_jeux);
ALTER TABLE message ADD CONSTRAINT FKmessage693625 FOREIGN KEY (id_utilisateur) REFERENCES Utilisateur (id_utilisateur);
ALTER TABLE Jeux_Configuration ADD CONSTRAINT FKJeux_Confi701430 FOREIGN KEY (id_jeux) REFERENCES Jeux (id_jeux);
ALTER TABLE Jeux_Configuration ADD CONSTRAINT FKJeux_Confi585180 FOREIGN KEY (id_configuration) REFERENCES Configuration (id_configuration);
ALTER TABLE Utilisateur_Configuration ADD CONSTRAINT FKUtilisateu968140 FOREIGN KEY (id_utilisateur) REFERENCES Utilisateur (id_utilisateur);
ALTER TABLE Utilisateur_Configuration ADD CONSTRAINT FKUtilisateu666715 FOREIGN KEY (id_configuration) REFERENCES Configuration (id_configuration);

INSERT INTO utilisateur (id_utilisateur, mail, mdp) VALUES(1, 'user@test.com', 'test');

INSERT INTO jeux (id_jeux, nom, annee) VALUES(1, 'Bioshock', '2011-01-01'); INSERT INTO jeux (id_jeux, nom, annee) VALUES(2, 'Read dead Redemption 2', '2018-01-01');

INSERT INTO memoire (id_memoire, nom, capacite, "version") VALUES(1, 'Kingston', 8, 'DDR4'); INSERT INTO memoire (id_memoire, nom, capacite, "version") VALUES(2, 'Hypex', 16, 'DDR3'); INSERT INTO memoire (id_memoire, nom, capacite, "version") VALUES(3, 'Corsair', 32, 'DDR4'); INSERT INTO memoire (id_memoire, nom, capacite, "version") VALUES(4, 'MSI', 4, 'DDR4'); INSERT INTO memoire (id_memoire, nom, capacite, "version") VALUES(5, 'ASUS', 8, 'DDDR3'); 

INSERT INTO carte_graphique (id_carte_graphique, nom, memoire, generation) VALUES(1, 'GTX 1080', '8', 'GDDR5'); INSERT INTO carte_graphique (id_carte_graphique, nom, memoire, generation) VALUES(2, 'GTX 2080', '16', 'GDDR5'); INSERT INTO carte_graphique (id_carte_graphique, nom, memoire, generation) VALUES(3, 'HD RADEON 7750', '8', 'GDDR5'); INSERT INTO carte_graphique (id_carte_graphique, nom, memoire, generation) VALUES(4, 'HD RADEON 7800', '16', 'GDDR5'); INSERT INTO carte_graphique (id_carte_graphique, nom, memoire, generation) VALUES(5, 'GTX 780 TI', '8', 'GDDR5');

INSERT INTO processeur (id_processeur, nom, generation, cadence) VALUES(1, 'Intel i2 v1', 2, 4.0); INSERT INTO processeur (id_processeur, nom, generation, cadence) VALUES(2, 'AMD v51', 5, 3.2); INSERT INTO processeur (id_processeur, nom, generation, cadence) VALUES(3, 'Intel i3', 3, 0.8); INSERT INTO processeur (id_processeur, nom, generation, cadence) VALUES(4, 'AMD v4', 4, 1.0); INSERT INTO processeur (id_processeur, nom, generation, cadence) VALUES(5, 'Intel i2 v2', 2, 4.3);

INSERT INTO configuration (id_configuration, nom, id_cg, id_proc, id_mem) VALUES(1, ' commodo', 1, 3, 2); INSERT INTO configuration (id_configuration, nom, id_cg, id_proc, id_mem) VALUES(2, 'fugiat nulla pariatur', 5, 1, 4); INSERT INTO configuration (id_configuration, nom, id_cg, id_proc, id_mem) VALUES(3, 'ulpa', 3, 3, 2); INSERT INTO configuration (id_configuration, nom, id_cg, id_proc, id_mem) VALUES(4, 'henderit', 5, 1, 2); INSERT INTO configuration (id_configuration, nom, id_cg, id_proc, id_mem) VALUES(5, 'aliquip', 3, 2, 2);

INSERT INTO utilisateur_configuration (id_utilisateur, id_configuration) VALUES(1, 5); INSERT INTO utilisateur_configuration (id_utilisateur, id_configuration) VALUES(1, 4);

INSERT INTO jeux_configuration (id_jeux, id_configuration, marqueur) VALUES(1, 1, 'e'); INSERT INTO jeux_configuration (id_jeux, id_configuration, marqueur) VALUES(1, 3, ' '); INSERT INTO jeux_configuration (id_jeux, id_configuration, marqueur) VALUES(2, 3, 'e'); INSERT INTO jeux_configuration (id_jeux, id_configuration, marqueur) VALUES(2, 4, 'e');

INSERT INTO sujet (id_sujet, description, score, "date", id_conf, id_utilisateur, id_jeux) VALUES(2, 'a deserunt mollit anim id est laborum.Lorem', 10, '1946-02-16', 5, 1, 2);

INSERT INTO message (id_mes, contenu, score, "date", id_sujet, id_utilisateur) VALUES(1, 'ex ea commodo consequat. Duis aute irure dolor in reprehenderit i', 50, '1955-05-24', 2, 1); INSERT INTO message (id_mes, contenu, score, "date", id_sujet, id_utilisateur) VALUES(2, 'eiusmod tempor incididunt ut lab', 20, '1945-06-16', 2, 1); INSERT INTO message (id_mes, contenu, score, "date", id_sujet, id_utilisateur) VALUES(3, ' cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ', 45, '1992-12-23', 2, 1); INSERT INTO message (id_mes, contenu, score, "date", id_sujet, id_utilisateur) VALUES(4, 'didunt ut labore et dolor', 10, '2025-03-29', 2, 1); INSERT INTO message (id_mes, contenu, score, "date", id_sujet, id_utilisateur) VALUES(5, 'ur. Excepte', 5, '1991-06-11', 2, 1);




