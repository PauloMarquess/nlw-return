import { useState } from 'react';
import { feedbackTypes } from '../__mocks__';
import { CloseButton } from './CloseButton';

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<any | null>(null);
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu Feedback</span>
        <CloseButton />
      </header>
      {!feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
          {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:to-brand-500 focus:outline-none"
                type="button"
                onClick={() => setFeedbackType(key as String)}
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <p>Hello World</p>
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
