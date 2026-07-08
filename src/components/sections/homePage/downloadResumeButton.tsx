"use client";

import Button from "@/components/ui/buttons/button";
import { Download } from "lucide-react";
import { downloadFile } from "@/lib/downloadFile";

export default function DownloadResumeButton() {
  const handleDownload = () => {
    downloadFile(
      "/resume/Senayit_Awoke_Resume.pdf",
      "Senayit_Awoke_Resume.pdf",
    );
  };
  return (
    <Button
      handleClick={handleDownload}
      className="text-white bg-cyan-600 hover:bg-cyan-500 transition-colors duration-200 rounded-md px-4 py-2"
    >
      <div className="flex flex-row items-center space-x-2">
        <Download className="w-5 h-5" />
        <span>Download Resume</span>
      </div>
    </Button>
  );
}
