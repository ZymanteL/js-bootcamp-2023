import studentModel from "../models/studentModel.js";

export const createStudent = async (req, res) => {
  try {
    const student = new studentModel({
      ...req.body,
    });
    await student.save();
    res.status(201).send(`New student named: ${req.body.name} is created`);
  } catch {
    console.log(error);
    res.status(400).send(error);
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await studentModel.find({});
    res.status(201).send(students);
  } catch {
    console.log(error);
    res.status(400).send(error);
  }
};

export const getStudent = async (req, res) => {
  try {
    //student/get/
    const student = await studentModel.find({ name: req.params.name });
    res.status(201).send(student);
  } catch {
    console.log(error);
    res.status(400).send(error);
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const student = await studentModel.deleteOne({ name: req.params.name });
    res.status(201).send(student);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const updateStudent = async (req, res) => {
  try {
    const student = await studentModel.findOneAndUpdate(
      {
        name: req.params.name,
      },
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(201).send(student);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
