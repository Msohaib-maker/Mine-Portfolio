type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="max-w-2xl mb-12">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-hazel-400 mb-4">
        {eyebrow}
      </p>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
