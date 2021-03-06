import { useState } from 'react';
import { feedbackTypes } from '../../__mocks__';
import { CloseButton } from '../CloseButton';
import { FeedBackContentSteps } from '../Steps/FeedbackContentSteps';
import { FeedBackSucessSteps } from '../Steps/FeedbackSucessSteps';
import { FeedBackTypesSteps } from '../Steps/FeedbackTypesSteps';

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<any | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const handleRestartFeedback = () => {
    setFeedbackType(null);
    setFeedbackSent(false);
  };
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedBackSucessSteps
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {' '}
          {!feedbackType ? (
            <FeedBackTypesSteps onFeedbackTypeStep={setFeedbackType} />
          ) : (
            <FeedBackContentSteps
              onFeedbackRestartRequestd={handleRestartFeedback}
              feedbackType={feedbackType}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela &nbsp;
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
          target="_blank"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
};
