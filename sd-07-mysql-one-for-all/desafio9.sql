DELIMITER $$

CREATE PROCEDURE albuns_do_artista(IN nomeUsuario VARCHAR(50))

BEGIN
SELECT a.nome AS artista, al.nome AS album FROM SpotifyClone.artistas AS a
  RIGHT JOIN SpotifyClone.albuns AS al ON a.id = al.artista_id
  WHERE a.nome = nomeUsuario ORDER BY album;
END $$

DELIMITER ;
