import express from 'express';
import employees from './db/employees.js';

const app = express();

  app.get('/', (req, res) => {
    res.send("Hello employees!");
  });

  app.get('/employees/random', (req, res) => {

      const { id, name } = req.params;
    
      const randEmployee = employees[Math.floor(Math.random() * employees.length)];

      res.send(randEmployee);
  });

  app.get('/employees', (req, res) => {
    res.send(employees);
  });

  app.get('/employees/:id', (req, res) => {
    const { id } = req.params;

    const employee = employees.find(thisEmp => thisEmp.id === Number(id));

    if(!employee) {
      return res.status(404).send(`There is no employee with the ID number ${id}.`);
    }

      res.status(200).send(employee);
  });

  

export default app;