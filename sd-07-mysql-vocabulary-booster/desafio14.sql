SELECT País FROM
(SELECT Country AS País FROM w3schools.customers AS C
UNION ALL
SELECT Country AS País FROM w3schools.suppliers AS S) AS T
GROUP BY País
ORDER BY País
LIMIT 5;
