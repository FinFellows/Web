import SlateCompiler from '@/libs/editor/slateCompiler';
import { Descendant } from 'slate';

export default function EditorRenderer({
  contents,
  ...props
}: { contents: string } & React.HTMLAttributes<HTMLDivElement>) {
  const slateCompiler = new SlateCompiler();
  const html = slateCompiler.toHtml(JSON.parse(contents) as Descendant[]);
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} {...props}>
      {props.children}
    </div>
  );
}
