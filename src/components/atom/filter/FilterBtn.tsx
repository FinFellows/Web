import React from 'react';
import ArrowDown from '@/public/icons/arrow-down.svg';
import { cls } from '@/utils/cls';

type TFilterBtnProps = {
  text: string;
  isOn: boolean;
  size: 'Large' | 'Small';
};

const FilterBtn: React.FC<TFilterBtnProps & React.HTMLAttributes<HTMLDivElement>> = ({
  text,
  isOn,
  size,
  ...props
}) => {
  return size === 'Large' ? (
    <div
      {...props}
      className={cls(
        'inline-flex p-12 items-center bg-secondary rounded-10 border cursor-pointer',
        isOn ? 'border-main' : 'border-border02',
      )}
    >
      <span className={cls('mr-4 label-medium', isOn ? 'text-main' : 'text-typoPrimary')}>{text}</span>
      <ArrowDown className={cls('w-24 h-24 stroke-2', isOn ? 'stroke-main' : 'stroke-primary')} />
    </div>
  ) : (
    <div
      {...props}
      className={cls(
        'inline-flex p-8 items-center bg-secondary rounded-[7.452px] border cursor-pointer',
        isOn ? 'border-main' : 'border-border02',
      )}
    >
      <span className={cls('mr-3 label-small', isOn ? 'text-main' : 'text-typoPrimary')}>{text}</span>
      <ArrowDown className={cls('w-17 h-17 stroke-2', isOn ? 'stroke-main' : 'stroke-primary')} />
    </div>
  );
};

export default FilterBtn;
