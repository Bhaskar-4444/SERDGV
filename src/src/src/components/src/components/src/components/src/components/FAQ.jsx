import { motion } from "framer-motion";

export default function FAQ({ question, answer }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-white rounded-2xl shadow p-6 border border-green-100"
    >
      <h3 className="font-semibold text-green-700">{question}</h3>
      <p className="text-gray-600 mt-2 text-sm">{answer}</p>
    </motion.div>
  );
}
