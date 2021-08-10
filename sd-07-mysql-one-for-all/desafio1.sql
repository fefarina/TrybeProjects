DROP DATABASE IF EXISTS SpotifyClone;

CREATE DATABASE SpotifyClone;

USE SpotifyClone;

DROP TABLE IF EXISTS SpotifyClone.planos ;

CREATE TABLE IF NOT EXISTS SpotifyClone.planos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(50) NOT NULL,
    valor DECIMAL(5,2) NOT NULL
) ENGINE = InnoDB;

DROP TABLE IF EXISTS SpotifyClone.usuarios;

CREATE TABLE IF NOT EXISTS SpotifyClone.usuarios(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    idade INT NOT NULL,
    plano_id INT,
    FOREIGN KEY (plano_id) REFERENCES planos (id)
) ENGINE = InnoDB;

DROP TABLE IF EXISTS SpotifyClone.artistas;

CREATE TABLE IF NOT EXISTS SpotifyClone.artistas(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) ENGINE = InnoDB;

DROP TABLE IF EXISTS SpotifyClone.albuns;

CREATE TABLE IF NOT EXISTS SpotifyClone.albuns(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    artista_id INT,
    FOREIGN KEY (artista_id) REFERENCES artistas (id)
) ENGINE = InnoDB;

DROP TABLE IF EXISTS SpotifyClone.usuario_segue_artista;

CREATE TABLE IF NOT EXISTS SpotifyClone.usuario_segue_artista(
    usuario_id INT NOT NULL,
    artista_id INT,
    PRIMARY KEY (usuario_id, artista_id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios (id),
    FOREIGN KEY (artista_id) REFERENCES artistas (id)
) ENGINE = InnoDB;

DROP TABLE IF EXISTS SpotifyClone.cancoes;

CREATE TABLE IF NOT EXISTS SpotifyClone.cancoes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    artista_id INT,
    album_id INT,
    FOREIGN KEY (artista_id) REFERENCES artistas (id),
    FOREIGN KEY (album_id) REFERENCES albuns (id)
) ENGINE = InnoDB;

DROP TABLE IF EXISTS SpotifyClone.usuario_ouve_cancao;

CREATE TABLE IF NOT EXISTS SpotifyClone.usuario_ouve_cancao(
    usuario_id INT NOT NULL,
    cancao_id INT,
    PRIMARY KEY (usuario_id, cancao_id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios (id),
    FOREIGN KEY (cancao_id) REFERENCES cancoes (id)
) ENGINE = InnoDB;

INSERT INTO planos (tipo, valor) VALUES
('gratuito', 0),
('familiar', 7.99),
('universitario', 5.99);

INSERT INTO usuarios (nome, idade, plano_id) VALUES
('Thati', 23, 1),
('Cintia', 35, 2),
('Bill', 20, 3),
('Roger', 45, 1);

INSERT INTO artistas (nome) VALUES
('Walter Phoenix'),
('Peter Strong'),
('Lance Day'),
('Freedie Shannon');

INSERT INTO albuns (nome, artista_id) VALUES
('Envious', 1),
('Exuberant', 1),
('Hallowed Steam', 2),
('Incandescent', 3),
('Temporary Culture', 4);

INSERT INTO usuario_segue_artista (usuario_id, artista_id) VALUES
(1, 1),
(1, 4),
(1, 3),
(2, 1),
(2, 3),
(3, 2),
(3, 1),
(4, 4);

INSERT INTO cancoes (nome, artista_id, album_id) VALUES
('Soul For Us', 1, 1),
('Reflections Of Magic', 1, 1),
('Dance With Her Own', 1, 1),
('Troubles Of My Inner Fire', 1, 2),
('Time Fireworks', 1, 2),
('Magic Circus', 2, 3),
('Honey, So Do I', 2, 3),
("Sweetie, Let's Go Wild", 2, 3),
('She Knows', 2, 3),
('Fantasy For Me', 3, 4),
('Celebration Of More', 3, 4),
('Rock His Everything', 3, 4),
('Home Forever', 3, 4),
('Diamond Power', 3, 4),
("Honey, Let's Be Silly", 3, 4),
('Thang Of Thunder', 4, 5),
('Words Of Her Life', 4, 5),
('Without My Streets', 4, 5);

INSERT INTO usuario_ouve_cancao (usuario_id, cancao_id) VALUES
(1, 1),
(1, 6),
(1, 14),
(1, 16),
(2, 13),
(2, 17),
(2, 2),
(2, 15),
(3, 4),
(3, 16),
(3, 6),
(4, 3),
(4, 18),
(4, 11);
