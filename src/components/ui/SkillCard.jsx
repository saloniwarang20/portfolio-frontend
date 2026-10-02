const SkillCard = ({ skill }) => {
  return (
    <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02] hover:border-purple-400/40 hover:-translate-y-1 transition">

      <h3 className="font-semibold">
        {skill.name}
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        {skill.category}
      </p>

    </div>
  );
};

export default SkillCard;