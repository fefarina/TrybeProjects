SELECT
  CUSTOMERS.ContactName AS 'Nome',
  CUSTOMERS.Country AS 'País',
  COUNT(CUSTOMERS2.Country) - 1 AS 'Número de compatriotas'
FROM w3schools.customers  AS CUSTOMERS,
w3schools.customers AS CUSTOMERS2
WHERE CUSTOMERS.Country = CUSTOMERS2.Country
GROUP BY CUSTOMERS.ContactName, CUSTOMERS.Country
HAVING COUNT(CUSTOMERS2.Country) - 1 > 0
ORDER BY CUSTOMERS.ContactName ASC;
