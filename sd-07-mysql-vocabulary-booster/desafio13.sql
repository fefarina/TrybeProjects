SELECT T.ProductName AS Produto, T.Price AS Preço
FROM (
SELECT ProductName, Price
FROM w3schools.products AS Prod
INNER JOIN w3schools.order_details as O ON O.ProductID = Prod.ProductID
WHERE Quantity > 80
) AS T
ORDER BY T.ProductName ASC;
