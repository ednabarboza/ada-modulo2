import { Request, Response, Router, NextFunction } from 'express';
import bodyParser from 'body-parser'

const router = Router();
router.use(bodyParser.json())

interface Todo {
    id: number, 
    task: string
}

// Banco de dados

//const todo:Todo[] = []

const todo:Todo[] = [
    {
        id : 1,
        task: 'Comer'
    }
]

function autheticateToken (req: Request, res: Response, next: NextFunction) {
    const token = req.header('Key_Postman') // key do postman

    if(token === 'admin123'){
        next()
    }else{
        res.status(400).json({message: 'Errooooooou'})
    }
}

router.use(autheticateToken)

router.get('/todos', (req:Request, res:Response) => {
    //res.status(200).json(todo)
    res.status(200).send(todo)
})

export default router