import { Request, Response } from 'express';
import User from '../models/User';

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
};

export const idadeForm = (req: Request, res: Response) => {
    res.render('pages/idade');
};

export const idadeAction = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if (req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};

export const addUserAction = async (req: Request, res: Response) => {
    const { firstName, lastName, email, age, interests } = req.body

    if(firstName || lastName || email || age || interests !== '') {
        parseInt(age)
        try {
            const newUser = await User.create({
                name: { firstName, lastName },
                email,
                age,
                interests
            })
            console.log(newUser)
            console.log('Cadastro Realizado com Sucesso')
            await newUser.save()
            res.redirect('/')
        } catch(err) {
            console.log('Erro ao fazer cadastro', err)
        }
    } 
}