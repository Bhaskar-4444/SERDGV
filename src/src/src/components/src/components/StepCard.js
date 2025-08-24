import { motion } from "framer-motion";

export default function StepCard({ step, text }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl shadow-md p-6 text-center border-t-4 border-green-600"
    >
      <div className="text-3xl font-bold text-green-700">{step}</div>
      <p className="mt-4 text-gray-700">{text}</p>
    </motion.div>
  );
}
