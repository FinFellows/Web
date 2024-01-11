import React from 'react';
import Close from '@/public/icons/close.svg';
import { cls } from '@/utils/cls';

type TFilterResultProps = {
  text: string;
  toggleFn: () => void;
  styles: string;
};

const FilterResult: React.FC<TFilterResultProps & React.HTMLAttributes<HTMLDivElement>> = ({
  text,
  toggleFn,
  styles,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cls(
        'inline-flex px-10 py-2 items-center bg-mainLevel400 rounded-100 tablet:px-13 tablet:py-2 desktop:px-14 desktop:py-3',
        styles ? styles : '',
      )}
    >
      <span className='text-secondary mr-4 paragraph-small tablet:paragraph-medium tablet:mr-5 desktop:mr-6 desktop:paragraph-medium'>
        {text}
      </span>
      <Close
        className='cursor-pointer stroke-2 stroke-secondary w-14 h-14 tablet:w-16 tablet:h-16 desktop:w-18 desktop:h-18'
        onClick={toggleFn}
      />
    </div>
  );
};

export default FilterResult;
