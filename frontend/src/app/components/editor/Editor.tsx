"use client"

import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import Code from '@tiptap/extension-code';
import CodeBlock from '@tiptap/extension-code-block';
// import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Document from '@tiptap/extension-document';
import HardBreak from '@tiptap/extension-hard-break';
import Heading from '@tiptap/extension-heading';
import Highlight from '@tiptap/extension-highlight';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Image from '@tiptap/extension-image';
import Italic from '@tiptap/extension-italic';
import Link from '@tiptap/extension-link';
import ListItem from '@tiptap/extension-list-item';
import Mention from '@tiptap/extension-mention';
import OrderedList from '@tiptap/extension-ordered-list';
import Paragraph from '@tiptap/extension-paragraph';
import Strike from '@tiptap/extension-strike';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Text from '@tiptap/extension-text';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import Youtube from '@tiptap/extension-youtube';
import Toolbar from './Toolbar'; // Import the custom toolbar component
import Typography from '@tiptap/extension-typography';
import { dropCursor } from '@tiptap/pm/dropcursor';
import Dropcursor from '@tiptap/extension-dropcursor';

const EditorComponent: React.FC = () => {

  
  const editor = useEditor({
    extensions: [
      StarterKit,
      Blockquote,
      Bold,
      BulletList,
      Code,
      CodeBlock,
      // CodeBlockLowlight,
      Typography,
      Document,
      HardBreak,
      Heading,
      Highlight,
      HorizontalRule,
      Image,
      Italic,
      Link,
      ListItem,
      Mention,
      OrderedList,
      Paragraph,
      Strike,
      Subscript,
      Superscript,
      Table,
      TableCell,
      TableHeader,
      TableRow,
      TaskItem,
      TaskList,
      Text,
      TextStyle,
      Underline,
      Youtube,
      Highlight,
      Dropcursor,
    ],
    onUpdate: ({ editor }) => {
      console.log('Editor content updated:', editor.getHTML());
    },
  });

  return (
    <section className='pt-5'>
      {editor && (
        <section className='w-full flex items-center justify-center flex-col'>
          <Toolbar editor={editor} /> {/* Use the Toolbar component */}

          <EditorContent editor={editor} className='w-full mt-5 h-auto border rounded prose' />
        </section>
      )}
    </section>
  );
};

export default EditorComponent;
