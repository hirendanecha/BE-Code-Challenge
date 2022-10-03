# data.json

find [] of products in assets/data.json.

## install pakages via `npm i`

### make get req at [http://localhost:3000/api/get_products] in postman.

## insert name,pass in users model in mogodb.

## make post req [http://localhost:3000/api/log_in] in postman.

{
"name":"admin",
"pass":"admin"
}

it will return jwt token which will expire in 5 minutes. copy it.

## make post req [http://localhost:3000/api/order_items] in postman.

{
"order_items" : [products [] from data.json],
"cardNo" : 1234567812341234,
"expiryDate" : "10/11",
"CVC" : 234,
"token": "paste token here."
}

it will return orders item, card details,order_total,order_qty.
