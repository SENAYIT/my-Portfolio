export default function FooterCopyright() {
  const DevName = "Senayit";
  return (
    <div className="flex flex-col :md:items-start gap-2 mt-4 ">
      <div> &copy; 2023 {DevName}. All rights reserved.</div>
      <div> Built with using React, NextJS, TypeScript & Tailwind CSS </div>
    </div>
  );
}
