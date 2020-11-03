const express = require("express");
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
} = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, addOrderItems);
// Make sure this route is at the bottom.
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);

module.exports = router;
