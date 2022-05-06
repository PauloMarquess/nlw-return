import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Loading } from '../Loading';

interface ScreenshotButtonProps {
  onScreenshot: (screenshot: string | null) => void;
  screeshot: string | null;
}

export const ScreenshotButton = ({
  screeshot,
  onScreenshot,
}: ScreenshotButtonProps) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTalkScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');
    onScreenshot(base64image);
    setIsTakingScreenshot(false);
  }
  if (screeshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `${screeshot}`,
          backgroundPosition: 'right bottom',
          backgroundSize: '180',
        }}
      >
        <Trash weight="fill" onClick={() => onScreenshot(null)} />
      </button>
    );
  }
  return (
    <button
      onClick={handleTalkScreenshot}
      type="button"
      className="p-2 bg-zinc-800 border-transparent hover:bg-zinc-700 transition-colors focus:outline:none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 "
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
};
