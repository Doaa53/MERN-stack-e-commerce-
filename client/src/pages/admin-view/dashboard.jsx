import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { DollarSign, Users, UserPlus, ShoppingBag, Eye, CheckCircle, ClipboardList, Package } from "lucide-react";

const Dashboard = () => {
  const dailySalesData = [
    { name: "Mon", sales: 400 },
    { name: "Tue", sales: 300 },
    { name: "Wed", sales: 500 },
    { name: "Thu", sales: 200 },
    { name: "Fri", sales: 450 },
    { name: "Sat", sales: 600 },
    { name: "Sun", sales: 700 },
  ];

  const cardAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50 to-pink-100 p-6">
      <h1 className="text-3xl font-bold text-pink-700 mb-8">🌸 Flower Shop Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {/* Today's Money */}
        <motion.div {...cardAnimation}>
          <Card className="bg-white shadow-xl rounded-2xl p-4 hover:shadow-2xl transition">
            <CardContent className="flex flex-col items-center">
              <DollarSign className="text-green-500 w-10 h-10 mb-2" />
              <h2 className="text-lg font-semibold text-gray-700">Today's Money</h2>
              <p className="text-2xl text-green-600 font-bold mt-2">$1,200</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Today's Users */}
        <motion.div {...cardAnimation}>
          <Card className="bg-white shadow-xl rounded-2xl p-4 hover:shadow-2xl transition">
            <CardContent className="flex flex-col items-center">
              <Users className="text-blue-500 w-10 h-10 mb-2" />
              <h2 className="text-lg font-semibold text-gray-700">Today's Users</h2>
              <p className="text-2xl text-blue-600 font-bold mt-2">320</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* New Clients */}
        <motion.div {...cardAnimation}>
          <Card className="bg-white shadow-xl rounded-2xl p-4 hover:shadow-2xl transition">
            <CardContent className="flex flex-col items-center">
              <UserPlus className="text-purple-500 w-10 h-10 mb-2" />
              <h2 className="text-lg font-semibold text-gray-700">New Clients</h2>
              <p className="text-2xl text-purple-600 font-bold mt-2">45</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sales */}
        <motion.div {...cardAnimation}>
          <Card className="bg-white shadow-xl rounded-2xl p-4 hover:shadow-2xl transition">
            <CardContent className="flex flex-col items-center">
              <ShoppingBag className="text-pink-500 w-10 h-10 mb-2" />
              <h2 className="text-lg font-semibold text-gray-700">Sales</h2>
              <p className="text-2xl text-pink-600 font-bold mt-2">78 Orders</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Charts and Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Sales */}
        <motion.div {...cardAnimation}>
          <Card className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Daily Sales</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={dailySalesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#ec4899" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Overview */}
        <div className="grid grid-cols-1 gap-6">
          <motion.div {...cardAnimation}>
            <Card className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition">
              <div className="flex items-center gap-2">
                <Eye className="text-indigo-500 w-8 h-8" />
                <h2 className="text-xl font-semibold text-gray-700">Website Views</h2>
              </div>
              <p className="text-4xl font-bold text-indigo-600 mt-4">8,500</p>
            </Card>
          </motion.div>

          <motion.div {...cardAnimation}>
            <Card className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500 w-8 h-8" />
                <h2 className="text-xl font-semibold text-gray-700">Completed Tasks</h2>
              </div>
              <p className="text-4xl font-bold text-green-600 mt-4">24/30</p>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Projects & Orders Overview */}
      <motion.div {...cardAnimation} className="mt-10">
        <Card className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Projects and Orders Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <ClipboardList className="mx-auto text-yellow-500 w-10 h-10 mb-2" />
              <h3 className="text-2xl font-bold text-yellow-600">5</h3>
              <p className="text-gray-500">Ongoing Projects</p>
            </div>
            <div>
              <Package className="mx-auto text-pink-500 w-10 h-10 mb-2" />
              <h3 className="text-2xl font-bold text-pink-600">12</h3>
              <p className="text-gray-500">Completed Orders</p>
            </div>
            <div>
              <ClipboardList className="mx-auto text-red-500 w-10 h-10 mb-2" />
              <h3 className="text-2xl font-bold text-red-600">3</h3>
              <p className="text-gray-500">Pending Deliveries</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Dashboard;
