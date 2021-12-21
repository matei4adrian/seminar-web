const Employee = require("../models/employees");
const { Op } = require("sequelize");

const router = require("express").Router();

router
  .route("/employees")
  .get(async (req, res) => {
    const { simplified } = req.query;
    try {
      const { minSalary, firstName } = req.query;
      let employees = null;
      if (!minSalary) {
        employees = await Employee.findAll({
          attributes: ["firstName", "lastName"],
          where: firstName ? { firstName: { [Op.eq]: firstName } } : undefined,
        });
      } else if (!firstName) {
        employees = await Employee.findAll({
          attributes: simplified ? { exclude: "id" } : undefined,
          order: [["firstName", "DESC"]],
          where: minSalary ? { salary: { [Op.gt]: minSalary } } : undefined,
        });
      } else {
        employees = await Employee.findAll({
          where: minSalary
            ? {
                salary: { [Op.gt]: minSalary },
                firstName: { [Op.eq]: firstName },
              }
            : undefined,
        });
      }
      return res.status(200).json(employees);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  })
  .post(async (req, res) => {
    console.log(Object.keys(Employee.rawAttributes));
    try {
      if (req.body.firstName.length > 3 && req.body.firstName.length < 10) {
        const newEmpployee = await Employee.create(req.body);
        return res.status(200).json(newEmpployee);
      } else {
        return res.status(400).json({
          message: "Firstname length sould be between 3 and 10 characters",
        });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  });

router
  .route("/employees/:id")
  .get(async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id);
      if (employee) {
        return res.status(200).json(employee);
      } else {
        res
          .status(404)
          .json({ error: `Employee with id ${req.params.id} not found!` });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  })
  .put(async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id);
      if (employee) {
        const updatedEmployee = await employee.update(req.body);
        return res.status(200).json(updatedEmployee);
      } else {
        res
          .status(404)
          .json({ error: `Employee with id ${req.params.id} not found!` });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  })
  .delete(async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id);
      if (employee) {
        const deletedEmployee = await employee.destroy();
        return res.status(200).json(deletedEmployee);
      } else {
        res
          .status(404)
          .json({ error: `Employee with id ${req.params.id} not found!` });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  });

module.exports = router;
