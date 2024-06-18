import mysqlPool from "../config/db.js";

//Getting All Employe
export const getAllEmploye = async (req, res) => {
  try {
    const data = await mysqlPool.query("SELECT * FROM employtable");
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No Records Found!",
      });
    }
    //Success response
    res.status(200).send({
      success: true,
      message: "All Employs Records",
      total: data[0].length,
      data: data[0],
    });
  } catch (error) {
    //Error Handling
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error with getAllEmploy",
      error,
    });
  }
};

//Getting Single Employe by ID
export const getEmployByID = async (req, res) => {
  try {
    const employid = req.params.id;
    if (!employid) {
      return res.status(404).send({
        success: false,
        message: "No Records Found! or no ID found",
      });
    }
    //Query executing
    const data = await mysqlPool.query(
      `SELECT * FROM employtable WHERE idEmployTable=?`,
      [employid]
    );
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No Records Found!",
      });
    }
    //Success Reponse
    res.status(200).send({
      success: true,
      employedata: data[0],
    });
  } catch (error) {
    //Error Handling
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error with getEmployByID",
      error,
    });
  }
};

//Creating Employe
export const createEmploye = async (req, res) => {
  try {
    //Getting data from body
    const { name, phonenumber, wage, age, department } = req.body;
    if (!name || !phonenumber || !wage || !age || !department) {
      return res.status(404).send({
        success: false,
        message: "Please Fill All Fields!",
      });
    }
    //Query executing
    const data = await mysqlPool.query(
      `INSERT INTO employtable (name,phonenumber,wage,age,department) VALUES (?,?,?,?,?)`,
      [name, phonenumber, wage, age, department]
    );
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "Error in inserting data",
      });
    }
    //Success reponse
    res.status(200).send({
      success: true,
      message: "New Employe Created Succesfully!",
    });
  } catch (error) {
    //Error handling
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error with getEmployByID",
      error,
    });
  }
};

//Updating Employe
export const updateEmploy = async (req, res) => {
  try {
    const employid = req.params.id;
    if (!employid) {
      return res.status(404).send({
        success: false,
        message: "Invalid Id or Provide id",
      });
    }
    //What to update
    const { name, phonenumber, wage, age, department } = req.body;
    const data = await mysqlPool.query(
      `UPDATE employtable SET name=?, phonenumber=?, wage=?, age=?, department=? WHERE idEmployTable=?`,
      [name, phonenumber, wage, age, department, employid]
    );
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "Error in Updating data",
      });
    }
    //Success Response
    res.status(200).send({
      success: true,
      message: "Employe details Updated Successfully",
    });
  } catch (error) {
    //Error Handling
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error with updateEmploy",
      error,
    });
  }
};

//Deleteing Employe
export const deleteEmploy = async (req, res) => {
  try {
    const employid = req.params.id;
    if (!employid) {
      return res.status(404).send({
        success: false,
        message: "Invalid Id or Provide id",
      });
    }
    //Query Executing
    await mysqlPool.query(`DELETE FROM employtable WHERE idEmployTable=?`, [
      employid,
    ]);
    //Success response
    res.status(404).send({
      success: true,
      message: "Employe Deleted!",
    });
  } catch (error) {
    //Error handling
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error with deleteEmploy",
      error,
    });
  }
};
