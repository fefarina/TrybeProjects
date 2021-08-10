SELECT
CUSTOMERS.ContactName AS 'Nome de contato',
    SHIPPERS.ShipperName AS 'Empresa que fez o envio',
    ORDERS.OrderDate AS 'Data do pedido'
FROM w3schools.orders AS ORDERS
INNER JOIN w3schools.shippers AS SHIPPERS ON SHIPPERS.ShipperID = ORDERS.ShipperID
INNER JOIN w3schools.customers AS CUSTOMERS ON ORDERS.CustomerID = CUSTOMERS.CustomerID
WHERE ORDERS.ShipperID = 1 OR ORDERS.ShipperID = 2
ORDER BY `Nome de contato`, `Empresa que fez o envio`, `Data do pedido`;
