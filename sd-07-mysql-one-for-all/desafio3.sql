CREATE VIEW SpotifyClone.historico_reproducao_usuarios AS

SELECT u.nome AS usuario, c.nome AS nome FROM SpotifyClone.usuarios AS u
  INNER JOIN SpotifyClone.usuario_ouve_cancao AS uoc ON u.id = uoc.usuario_id
  INNER JOIN SpotifyClone.cancoes AS c ON c.id = uoc.cancao_id
ORDER BY usuario, nome;
