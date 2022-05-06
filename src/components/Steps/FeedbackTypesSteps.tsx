import { FeedbackTypes, feedbackTypes } from '../../__mocks__';

interface FeedBackTypeStepsProps {
  onFeedbackTypeStep: (type: FeedbackTypes) => void;
}

export const FeedBackTypesSteps = ({
  onFeedbackTypeStep,
}: FeedBackTypeStepsProps) => {
  return (
    <div className="flex py-8 gap-2 w-full">
      {Object.entries(feedbackTypes).map(([key, value]) => {
        return (
          <button
            key={key}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:to-brand-500 focus:outline-none"
            type="button"
            onClick={() => onFeedbackTypeStep(key as FeedbackTypes)}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        );
      })}
    </div>
  );
};