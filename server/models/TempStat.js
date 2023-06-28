import mongoose from 'mongoose';

const TempStatSchema = new mongoose.Schema(
  {
    weekStats: {
      totalRevenue: Number,
      percentageChange: Number,
    },
    todayStats: {
      totalLeads: Number,
      percentageChange: Number,
    },
    thisMonthStats: {
      totalRevenue: Number,
      percentageChange: Number,
    },
    thisMonthLeads: {
      totalLeads: Number,
      percentageChange: Number,
    },
  },
  { timestamps: true }
);

const TempStat = mongoose.model('TempStat', TempStatSchema);

export default TempStat;
