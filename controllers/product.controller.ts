import db from '../models';
const Users = db.users;
const Products = db.products;
import jsonwebtoken from "jsonwebtoken";
import { Request, Response } from 'express';



exports.get_data = (req: Request, res: Response) => {
    Products.find().then((data: any) => {
        res.send(data);
    });
};

exports.login = (req: Request, res: Response) => {

    const { name, pass } = req.body;
    console.log(name, pass);

    var condition1 = name
        ? {
            name: { $regex: new RegExp(name), $options: "i" },
        }
        : {};

    var condition2 = pass
        ? {
            pass: { $regex: new RegExp(pass), $options: "i" },
        }
        : {};

    try {
        Users.find(condition1).then((data: any) => {
            if (data.length == 0) {
                return res.status(401).send("user not found");
            }
            else {
                Users.find(condition2).then((data: any) => {
                    if (data.length == 0) {
                        return res.status(401).send("user not found");
                    }
                    else {
                        const token = jsonwebtoken.sign(
                            { name, pass },
                            process.env.JWT_TOKEN_KEY as string,
                            {
                                expiresIn: 5 * 60,
                            }
                        );
                        return res.send(token);
                    }
                });

            }
        });
    } catch (error) {
        return res.status(401).send(error);
    }

}

exports.order_items = (req: Request, res: Response) => {
    const { order_items, cardNo, expiryDate, CVC } = req.body

    // console.log(cardNo,expiryDate,CVC);

    let price = [];
    let qty = [];

    for (let i = 0; i < order_items.length; i++) {
        price.push(order_items[i].price);
        qty.push(order_items[i].quantity);
    }

    const order_details = {
        order_items: order_items,
        order_total: price.reduce((a, b) => a + b, 0),
        order_qty: qty.reduce((a, b) => a + b, 0),
        cardNo: cardNo,
        expiryDate: expiryDate,
        CVC: CVC
    }
    res.send(`order placed => ${JSON.stringify(order_details, null, 2)}`)
}
