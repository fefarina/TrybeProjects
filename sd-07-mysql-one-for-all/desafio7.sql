CREATE VIEW SpotifyClone.perfil_artistas AS

SELECT a.nome AS artista, al.nome AS album, COUNT(*) AS seguidores FROM SpotifyClone.artistas AS a
  INNER JOIN SpotifyClone.albuns AS al ON a.id = al.artista_id
  INNER JOIN SpotifyClone.usuario_segue_artista AS usa ON a.id = usa.artista_id
GROUP BY artista, album ORDER BY seguidores DESC, artista, album;
