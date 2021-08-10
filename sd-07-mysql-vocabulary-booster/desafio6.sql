SELECT 
CONCAT(EMPLOYEES.FIRST_NAME, ' ', EMPLOYEES.LAST_NAME) AS 'Nome completo',
    JOBS.JOB_TITLE AS Cargo,
    HIS_JOB.START_DATE AS 'Data de início do cargo',
    DEPARTMENTS.DEPARTMENT_NAME AS Departamento
FROM hr.job_history AS JOB_HISTORY
INNER JOIN hr.employees AS EMPLOYEES ON JOB_HISTORY.EMPLOYEE_ID = EMPLOYEES.EMPLOYEE_ID
INNER JOIN hr.jobs AS JOBS ON JOBS.JOB_ID = JOB_HISTORY.JOB_ID
INNER JOIN hr.departments AS DEPARTMENTS ON DEPARTMENTS.DEPARTMENT_ID = JOB_HISTORY.DEPARTMENT_ID
ORDER BY `Nome completo` DESC, JOB_TITLE;