import OverallStat from "../../models/OverallStat.js";
import TempStat from "../../models/TempStat.js";

export const getSales = async (req, res) => {
  try {
    const overallStats = await OverallStat.find();

    res.status(200).json(overallStats[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTempStat = async (req, res) => {
  try {
    const stat = await TempStat.findOne().sort('createdAt');
    console.log('Communication Established');
    if (!stat) {
      return res.status(404).json({ message: "Stat not found" });
    }

    // Extract necessary fields from the 'stat' object
    const { weekStats, todayStats, thisMonthStats, thisMonthLeads } = stat;
    
    // Send the details as separate variables
    console.log("Data: ", weekStats, todayStats, thisMonthStats, thisMonthLeads);
    res.json({
      weekStats,
      todayStats,
      thisMonthStats,
      thisMonthLeads
    });
  } catch (error) {
    res.status(500).json({ message: `Error: ${error}` });
  }
};

