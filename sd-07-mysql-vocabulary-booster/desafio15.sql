USE hr;
DELIMITER $$;
CREATE PROCEDURE buscar_media_por_cargo(IN job_title_parameter VARCHAR(50))
BEGIN
SELECT ROUND(AVG(E.salary),2) AS 'Média salarial'
FROM hr.employees AS E
INNER JOIN hr.jobs AS D
ON E.job_id = D.job_id
WHERE D.job_title = job_title_parameter;
END $$;
DELIMITER ;
CALL buscar_media_por_cargo('Programmer');
