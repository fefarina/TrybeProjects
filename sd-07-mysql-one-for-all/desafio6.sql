CREATE VIEW SpotifyClone.faturamento_atual AS

SELECT MIN(p.valor) AS faturamento_minimo, MAX(p.valor) AS faturamento_maximo,
  ROUND(AVG(p.valor), 2) AS faturamento_medio, SUM(p.valor) AS faturamento_total
FROM SpotifyClone.usuarios AS u INNER JOIN SpotifyClone.planos AS p ON u.plano_id = p.id;
