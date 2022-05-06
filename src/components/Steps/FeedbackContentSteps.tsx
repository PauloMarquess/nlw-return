import { ArrowLeft } from 'phosphor-react';
import { FeedbackTypes, feedbackTypes } from '../../__mocks__';
import { CloseButton } from '../CloseButton';

interface FeedBackContentSteps {
  feedbackType: FeedbackTypes;
  onFeedbackRestartRequestd: () => void;
}

export const FeedBackContentSteps = ({
  feedbackType,
  onFeedbackRestartRequestd,
}: FeedBackContentSteps) => {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
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
      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[104px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 focus:outline-none focus:border-brand-500 bg-transparent rounded-md focus:ring-brand-500 focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thi"
          placeholder="Conte com detalhes o que está acontecendo..."
        ></textarea>
        <footer>
          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover-bg-brand-300"
          ></button>
        </footer>
      </form>
    </>
  );
};
