import { motion } from "framer-motion";

export default function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-lg p-6 text-center border border-green-100"
    >
      <div className="text-green-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="font-semibold text-lg text-green-700">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{desc}</p>
    </motion.div>
  );
}
