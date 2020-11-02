const express = require("express");
const {
  addOrderItems,
  getOrderById,
} = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, addOrderItems);
// Make sure this route is at the bottom.
router.route("/:id").get(protect, getOrderById);

module.exports = router;
