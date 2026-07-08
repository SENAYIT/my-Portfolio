type MapProps = {
  src: string;
};

export default function Map({ src }: MapProps) {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        src={src}
        width="600"
        height="450"
        // style="border:0;"
        className="w-full h-full"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"

        // referrerpolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
