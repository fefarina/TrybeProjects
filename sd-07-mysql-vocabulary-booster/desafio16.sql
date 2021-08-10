@@ -0,0 +1,15 @@
USE hr;
DELIMITER $$
CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(email_parameter VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
DECLARE total VARCHAR(50);
SELECT COUNT(*) AS total_empregos 
FROM hr.employees AS E 
INNER JOIN hr.job_history AS J 
ON J.employee_id = E.employee_id
WHERE E.email = 'NKOCHHAR'
INTO total;
RETURN total;
END $$
DELIMITER ;
