import { ArrowLeft, Camera } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { FeedbackTypes, feedbackTypes } from '../../__mocks__';
import { CloseButton } from '../CloseButton';
import { ScreenshotButton } from '../WidgetForm/ScreenshotButton';

interface FeedBackContentSteps {
  feedbackType: FeedbackTypes;
  onFeedbackRestartRequestd: () => void;
  onFeedbackSent: () => void;
}

export const FeedBackContentSteps = ({
  feedbackType,
  onFeedbackRestartRequestd,
  onFeedbackSent,
}: FeedBackContentSteps) => {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [screeshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const handleSubmitFeedback = (event: FormEvent) => {
    event.preventDefault();
    onFeedbackSent();
    console.log({
      screeshot,
      comment,
    });
  };

  return (
    <>
      <header>
        <button
          type="button"
          onClick={onFeedbackRestartRequestd}
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2 justify-center ">
          <img
            className="w-6 h-6"
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="min-w-[304px] w-full min-h-[104px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 focus:outline-none focus:border-brand-500 bg-transparent rounded-md focus:ring-brand-500 focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thi"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screeshot={screeshot}
            onScreenshot={setScreenshot}
          />
          <button
            disabled={comment.length === 0}
            type="submit"
            className="p-2 bg-brand-500 border-transparent flex-1 flex justify-center items-center focus:outline:none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  );
};
