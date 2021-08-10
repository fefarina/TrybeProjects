SELECT C1.ContactName AS Nome, 
C1.Country AS País, 
Count(C2.Country)-1 AS 'Número de compatriotas'
FROM w3schools.customers AS C1,
w3schools.customers AS C2
WHERE C1.Country = C2.Country
GROUP BY C1.ContactName, C1.Country
HAVING COUNT(C2.Country) - 1 > 0
ORDER BY C1.ContactName ASC;
