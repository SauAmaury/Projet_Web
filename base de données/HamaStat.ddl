CREATE TABLE Utilisateur (id_utilisateur int4 NOT NULL, mail varchar(255) NOT NULL, mdp varchar(255) NOT NULL, PRIMARY KEY (id_utilisateur));
CREATE TABLE Configuration (id_configuration int4 NOT NULL, Nom varchar(255) NOT NULL, id_cg int4 NOT NULL, id_proc int4 NOT NULL, id_mem int4 NOT NULL, PRIMARY KEY (id_configuration));
CREATE TABLE Utilisateur_Configuration (id_utilisateur int4 NOT NULL, id_configuration int4 NOT NULL, PRIMARY KEY (id_utilisateur, id_configuration));
CREATE TABLE Jeux (id_jeux int4 NOT NULL, Nom varchar(255) NOT NULL, annee date, PRIMARY KEY (id_jeux));
CREATE TABLE Jeux_Configuration (id_jeux int4 NOT NULL, id_configuration int4 NOT NULL, PRIMARY KEY (id_jeux, id_configuration));
CREATE TABLE Carte_Graphique (id_carte_graphique int4 NOT NULL, nom varchar(255) NOT NULL, memoire varchar(255) NOT NULL, generation varchar(255) NOT NULL, PRIMARY KEY (id_carte_graphique));
CREATE TABLE Processeur (id_processeur SERIAL NOT NULL, nom varchar(255) NOT NULL, generation int4 NOT NULL, cadence numeric(2, 1) NOT NULL, PRIMARY KEY (id_processeur));
CREATE TABLE Memoire (id_memoire SERIAL NOT NULL, nom varchar(255) NOT NULL, capacite int4 NOT NULL, version varchar(255) NOT NULL, PRIMARY KEY (id_memoire));
CREATE TABLE Sujet (id_sujet SERIAL NOT NULL, description varchar(255) NOT NULL, score int4 NOT NULL, id_conf int4 NOT NULL, id_user int4 NOT NULL, id_jeux int4, PRIMARY KEY (id_sujet));
CREATE TABLE message (id_mes SERIAL NOT NULL, contenu varchar(255) NOT NULL, id_sujet int4 NOT NULL, id_utilisateur int4 NOT NULL, PRIMARY KEY (id_mes));
ALTER TABLE Utilisateur_Configuration ADD CONSTRAINT FKUtilisateu968140 FOREIGN KEY (id_utilisateur) REFERENCES Utilisateur (id_utilisateur);
ALTER TABLE Utilisateur_Configuration ADD CONSTRAINT FKUtilisateu666715 FOREIGN KEY (id_configuration) REFERENCES Configuration (id_configuration);
ALTER TABLE Jeux_Configuration ADD CONSTRAINT FKJeux_Confi701430 FOREIGN KEY (id_jeux) REFERENCES Jeux (id_jeux);
ALTER TABLE Jeux_Configuration ADD CONSTRAINT FKJeux_Confi585180 FOREIGN KEY (id_configuration) REFERENCES Configuration (id_configuration);
ALTER TABLE Configuration ADD CONSTRAINT FKConfigurat777349 FOREIGN KEY (id_cg) REFERENCES Carte_Graphique (id_carte_graphique);
ALTER TABLE Configuration ADD CONSTRAINT FKConfigurat530924 FOREIGN KEY (id_proc) REFERENCES Processeur (id_processeur);
ALTER TABLE Configuration ADD CONSTRAINT FKConfigurat315647 FOREIGN KEY (id_mem) REFERENCES Memoire (id_memoire);
ALTER TABLE Sujet ADD CONSTRAINT FKSujet528373 FOREIGN KEY (id_conf) REFERENCES Configuration (id_configuration);
ALTER TABLE Sujet ADD CONSTRAINT FKSujet850779 FOREIGN KEY (id_user) REFERENCES Utilisateur (id_utilisateur);
ALTER TABLE Sujet ADD CONSTRAINT FKSujet391474 FOREIGN KEY (id_jeux) REFERENCES Jeux (id_jeux);
ALTER TABLE message ADD CONSTRAINT FKmessage390897 FOREIGN KEY (id_sujet) REFERENCES Sujet (id_sujet);
ALTER TABLE message ADD CONSTRAINT FKmessage693625 FOREIGN KEY (id_utilisateur) REFERENCES Utilisateur (id_utilisateur);
