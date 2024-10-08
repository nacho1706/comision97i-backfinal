const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUserById,
  deleteUserByUsername,
  registerUser,
  loginUser,
  recoveryPass,
  changePass,
  getUserAppointments,
  getMedicoAppointments,
  getAllMedicos,
  changeUserRole,
} = require("../controllers/userController");

// Ruta para obtener todos los usuarios
router.get("/getAllUsers", getAllUsers);

// Ruta para actualizar un usuario por ID
router.put("/update/:id", updateUser);

// Ruta para eliminar un usuario por ID
router.delete("/delete/:id", deleteUserById);

// Ruta para eliminar un usuario por username
router.delete("/usernameDelete/:username", deleteUserByUsername);

// Ruta para registrar un nuevo usuario
router.post("/register", registerUser);

// Ruta para iniciar sesión
router.post("/login", loginUser);

// Ruta para recuperar la contraseña
router.post("/recovery", recoveryPass);

// Ruta para cambiar la contraseña
router.post("/change-password", changePass);

// Ruta para obtener todos los turnos de un usuario
router.get("/:id/appointments", getUserAppointments);

// Ruta para obtener todos los turnos asignados a un médico
router.get("/medico/:id/appointments", getMedicoAppointments);

//Ruta para traer todo los medicos
router.get("/medicos", getAllMedicos);
//Ruta para cambiar de rol
router.put('/userRoleChange/:id', changeUserRole);

module.exports = router;
