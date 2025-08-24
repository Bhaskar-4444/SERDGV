import { motion } from "framer-motion";

export default function Testimonial({ name, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow p-6"
    >
      <p className="italic text-gray-700">“{text}”</p>
      <div className="mt-4 font-semibold text-green-700">- {name}</div>
    </motion.div>
  );
}
