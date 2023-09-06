import { Request, Response, Router, NextFunction } from 'express';
import bodyParser from 'body-parser'

const router = Router();
router.use(bodyParser.json())

interface Todo {
    id : number;
    task: string;
}

//Banco de dados

const todos: Todo[] = []

function autheticateToken (req: Request, res: Response, next: NextFunction) {
    const token = req.header('Authorization') 

    if(token === 'admin123'){
        next()
    }else{
        res.status(401).json({ message: 'Erro'});
    }
}

router.use(autheticateToken)

router.get('/todos', (req: Request, res:Response) => {
    res.json(todos)
})



export default router