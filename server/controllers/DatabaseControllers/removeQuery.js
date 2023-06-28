import OverallStat from "../../models/OverallStat.js";
import Product from "../../models/Product.js";
import ProductStat from "../../models/ProductStat.js";
import Transaction from "../../models/Transaction.js";
import User from "../../models/User.js";
import CustomTrade from "../../models/CustomTrade.js";
import TempStat from "../../models/TempStat.js";

export const deleteOverallStat = async (req, res) => {
  try {
    const data = await OverallStat.findByIdAndDelete(req.params._id);

    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const data = await Product.findByIdAndDelete(req.params._id);

    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteProductStat = async (req, res) => {
  try {
    const data = await ProductStat.findByIdAndDelete(req.params._id);
    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const data = await Transaction.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.json({ message: "Transaction deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteStat = async (req, res) => {
  try {
    const data = await User.findByIdAndDelete(req.params._id);

    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteCustomTrade = async (req, res) => {
  try {
    const data = await CustomTrade.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "CustomTrade not found" });
    }

    res.json({ message: "CustomTrade deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteTempStat = async (req, res) => {
  try {
    const data = await TempStat.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};