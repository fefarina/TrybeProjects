CREATE VIEW SpotifyClone.top_3_artistas AS

SELECT a.nome AS artista, COUNT(u.nome) AS seguidores FROM SpotifyClone.artistas AS a
  INNER JOIN SpotifyClone.usuario_segue_artista AS usa ON a.id = usa.artista_id
  INNER JOIN SpotifyClone.usuarios AS u ON u.id = usa.usuario_id
GROUP BY artista ORDER BY seguidores DESC, artista LIMIT 3;
