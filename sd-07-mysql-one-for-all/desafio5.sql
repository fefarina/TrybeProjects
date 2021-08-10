CREATE VIEW SpotifyClone.top_2_hits_do_momento AS

SELECT c.nome AS cancao, COUNT(uoc.cancao_id) AS reproducoes FROM SpotifyClone.cancoes AS c
  INNER JOIN SpotifyClone.usuario_ouve_cancao AS uoc ON c.id = uoc.cancao_id
GROUP BY cancao ORDER BY reproducoes DESC, cancao LIMIT 2;
