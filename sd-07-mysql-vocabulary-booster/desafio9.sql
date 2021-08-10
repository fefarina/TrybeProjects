SELECT
CONCAT(EMPLOYEES.FirstName, ' ', EMPLOYEES.LastName) AS 'Nome completo',
    COUNT(ORDERS.OrderID) AS 'Total de pedidos'
FROM w3schools.employees AS EMPLOYEES
INNER JOIN w3schools.orders AS ORDERS ON ORDERS.EmployeeID = EMPLOYEES.EmployeeID
GROUP BY EMPLOYEES.EmployeeID
ORDER BY `Total de pedidos`;
