import { Request, Response } from 'express';

import { Product } from '../models/Product';
import { User } from '../models/user';

export const home = async(req: Request, res: Response)=>{
    let users = await User.findAll();
    // console.log('Usuários: ', JSON.stringify(users))


    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Nick',
        lastName: 'Suzuki',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users
    });
};