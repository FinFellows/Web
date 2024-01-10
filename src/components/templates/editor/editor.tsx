import React, { useCallback, useMemo, useState } from 'react';
import { Descendant, createEditor } from 'slate';

import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';
import isHotkey from 'is-hotkey';
import { toggleMark } from '@/libs/editor/toggleMark';
import SlateElement from './slateElement';
import SlateLeaf from './slateLeaf';
import HOTKEYS from '@/constants/editor/hotkeys';
import { TPluginFormat } from '@/types/editor/editorType';
import Preview from './plugins/preview';
import Tools from './tools';

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: '오늘의 이야기...' }],
  },
];

export default function Editor() {
  const renderElement = useCallback((props: any) => <SlateElement {...props} />, []);
  const renderLeaf = useCallback((props: any) => <SlateLeaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [editorValue, setEditorValue] = useState<Descendant[]>(initialValue);
  const [activatedPlugin, setActivatedPlugin] = useState<TPluginFormat | null>(null);
  const titleRef = React.useRef<HTMLInputElement>(null);
  console.log(editorValue);

  function handleChangeEditorValue(value: Descendant[]) {
    setEditorValue([...value, { type: 'paragraph', children: [{ text: 'ㄴㄴㄴ' }] }]);
  }

  // useEffect(() => {
  //   if (!isAdmin) {
  //     router.replace('/');
  //   }
  // }, [router, isAdmin]);
  return (
    <div className='p-40 mt-[-130px] mx-auto w-full min-h-[calc(100vh-124px)] max-w-[1024px] post-box'>
      {/* 상단 버튼 */}
      <div className='flex items-center justify-end gap-20'>
        <button className='flex justify-center items-center px-20 py-8 text-16 text-blue font-bold rounded-4 border-1 border-blue'>
          임시 저장
        </button>
        <button className='flex justify-center items-center px-20 py-8 text-16 text-white bg-blue font-bold rounded-4 border-1 border-blue'>
          업로드
        </button>
      </div>
      {/* 제목 */}
      <input
        type='text'
        autoComplete='off'
        spellCheck='false'
        placeholder='제목을 입력하세요'
        className='w-full mb-50 p-20 text-48 font-bold box-border placeholder:text-page1'
        style={{ borderBottom: '1px solid #f0f0f5' }}
        ref={titleRef}
      />

      <div className='flex flex-col items-start'>
        <Slate editor={editor} initialValue={editorValue} onChange={handleChangeEditorValue}>
          <Tools activatedPlugin={activatedPlugin} setActivatedPlugin={setActivatedPlugin} />

          {/* h-calc (Toolbar 위에 고정 시키기 위한 높이 설정) */}
          {/* 전체 높이 - nav_bar - Toolbar(margin 포함) - box 아래 padding - 페이지 아래 padding - 추가 padding (위) */}
          <div className=' overflow-y-scroll h-[calc(100vh-70px-60px-40px-30px-30px)] w-full'>
            <Editable
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              placeholder='오늘의 이야기...'
              autoFocus
              onKeyDown={(event) => {
                for (const hotkey in HOTKEYS) {
                  if (isHotkey(hotkey, event as any)) {
                    event.preventDefault();
                    const mark = HOTKEYS[hotkey];
                    toggleMark(editor, mark);
                  }
                }
              }}
              className='outline-none prose w-full max-w-full '
            ></Editable>
          </div>
          {activatedPlugin === 'preview' && (
            <Preview
              title={titleRef.current?.value}
              editorValue={editorValue}
              closePreview={() => setActivatedPlugin(null)}
              className='p-40 mx-auto w-full h-[calc(100vh-100px)] max-w-[1024px] overflow-y-scroll post-box prose'
            />
          )}
        </Slate>
      </div>
    </div>
  );
}
