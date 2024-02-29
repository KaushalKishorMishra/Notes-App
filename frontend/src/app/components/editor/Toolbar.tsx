import React from 'react';
import { Editor } from '@tiptap/react';

interface ToolbarProps {
    editor: Editor;
}

const isValidUrl = (url: string) => {
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
};

export const tableHTML = `
  <table style="width:100%">
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>80</td>
    </tr>
  </table>
`

const Toolbar: React.FC<ToolbarProps> = ({ editor }) => {

    const addImage = () => {
        const url = window.prompt('Enter the image URL or upload an image file:');

        if (url) {
            // Check if the input is a URL
            if (isValidUrl(url)) {
                // If it's a URL, directly set the image
                editor.chain().focus().setImage({ src: url }).run();
            } else {
                // If it's not a URL, assume it's a file path
                // Create a temporary HTMLImageElement to check if the URL is valid
                const img = new Image();
                img.onload = () => {
                    // If the image loads successfully, convert it to a data URL
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    if (ctx) {
                        canvas.width = img.width;
                        canvas.height = img.height;
                        ctx.drawImage(img, 0, 0);
                        const dataUrl = canvas.toDataURL('image/png');
                        // Insert the image into the editor
                        editor.chain().focus().setImage({ src: dataUrl }).run();
                    }
                };
                img.onerror = () => {
                    // If the image fails to load, show an error message
                    alert('Invalid image URL or file path!');
                };
                img.src = url;
            }
        }
    };

    return (
        <div className="flex flex-row gap-5 justify-center items-center border rounded-lg px-3 py-2">
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                }
                className={`${editor.isActive('bold') ? 'is-active btn' : ''} `}
            >
                B
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleItalic()
                        .run()
                }
                className={editor.isActive('italic') ? 'is-active btn' : ''}
            >
                <em>I</em>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleStrike()
                        .run()
                }
                className={editor.isActive('strike') ? 'is-active btn' : ''}
            >
                Strike
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleCode()
                        .run()
                }
                className={editor.isActive('code') ? 'is-active btn' : ''}
            >
                Code
            </button>
            {/* <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? 'is-active btn' : ''}
            >
                p
            </button> */}
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 1 }) ? 'is-active btn' : ''}
            >
                h1
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive('heading', { level: 2 }) ? 'is-active btn' : ''}
            >
                h2
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={editor.isActive('heading', { level: 3 }) ? 'is-active btn' : ''}
            >
                h3
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                className={editor.isActive('heading', { level:  4 }) ? 'is-active btn' : ''}
            >
                h4
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                className={editor.isActive('heading', { level: 5 }) ? 'is-active btn' : ''}
            >
                h5
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                className={editor.isActive('heading', { level:  6 }) ? 'is-active btn' : ''}
            >
                h6
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active btn' : ''}
            >
                bullet list
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'is-active btn' : ''}
            >
                ordered list
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'is-active btn' : ''}
            >
                code block
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'is-active btn' : ''}
            >
                blockquote
            </button>
            <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                horizontal rule
            </button>
            <button onClick={() => editor.chain().focus().setHardBreak().run()}>
                hard break
            </button>
            <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .undo()
                        .run()
                }
            >
                undo
            </button>
            <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .redo()
                        .run()
                }
            >
                redo
            </button>

            <button onClick={addImage}>Image</button>


            <details className='dropdown'>
                <summary className="m-1" >Table</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>

                        <button onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>
                            insertTable
                        </button>
                    </li>
                    <li>

                        <button onClick={() => editor.chain().focus().insertContent(tableHTML, {
                            parseOptions: {
                                preserveWhitespace: false,
                            },
                        }).run()}>
                            insertHTMLTable
                        </button>
                    </li>

                    <li>

                        <button onClick={() => editor.chain().focus().addColumnBefore().run()} disabled={!editor.can().addColumnBefore()}>
                            addColumnBefore
                        </button>
                    </li>

                    <li>

                        <button onClick={() => editor.chain().focus().addColumnAfter().run()} disabled={!editor.can().addColumnAfter()}>
                            addColumnAfter
                        </button>
                    </li>

                    <li>

                        <button onClick={() => editor.chain().focus().deleteColumn().run()} disabled={!editor.can().deleteColumn()}>
                            deleteColumn
                        </button>
                    </li>

                    <li>

                        <button onClick={() => editor.chain().focus().addRowBefore().run()} disabled={!editor.can().addRowBefore()}>
                            addRowBefore
                        </button>
                    </li>

                    <li>

                        <button onClick={() => editor.chain().focus().addRowAfter().run()} disabled={!editor.can().addRowAfter()}>
                            addRowAfter
                        </button>
                    </li>

                    <li>

                        <button onClick={() => editor.chain().focus().deleteRow().run()} disabled={!editor.can().deleteRow()}>
                            deleteRow
                        </button>
                    </li>

                    <li>

                        <button onClick={() => editor.chain().focus().deleteTable().run()} disabled={!editor.can().deleteTable()}>
                            deleteTable
                        </button>
                    </li>

                    <li>

                        <button onClick={() => editor.chain().focus().mergeCells().run()} disabled={!editor.can().mergeCells()}>
                            mergeCells
                        </button>
                    </li>

                    <li>

                        <button onClick={() => editor.chain().focus().splitCell().run()} disabled={!editor.can().splitCell()}>
                            splitCell
                        </button>
                    </li>

                    <li>

                        <button onClick={() => editor.chain().focus().toggleHeaderColumn().run()} disabled={!editor.can().toggleHeaderColumn()}>
                            toggleHeaderColumn
                        </button>
                    </li>

                    <li>

                        <button onClick={() => editor.chain().focus().toggleHeaderRow().run()} disabled={!editor.can().toggleHeaderRow()}>
                            toggleHeaderRow
                        </button>
                    </li>

                    <li>

                        <button onClick={() => editor.chain().focus().toggleHeaderCell().run()} disabled={!editor.can().toggleHeaderCell()}>
                            toggleHeaderCell
                        </button>
                    </li>
                    <li>

                        <button onClick={() => editor.chain().focus().mergeOrSplit().run()} disabled={!editor.can().mergeOrSplit()}>
                            mergeOrSplit
                        </button>
                    </li>

                    <li>

                        <button onClick={() => editor.chain().focus().setCellAttribute('backgroundColor', '#FAF594').run()} disabled={!editor.can().setCellAttribute('backgroundColor', '#FAF594')}>
                            setCellAttribute
                        </button>
                    </li>

                    <li>

                        <button onClick={() => editor.chain().focus().fixTables().run()} disabled={!editor.can().fixTables()}>
                            fixTables
                        </button>
                    </li>

                    <li>

                        <button onClick={() => editor.chain().focus().goToNextCell().run()} disabled={!editor.can().goToNextCell()}>
                            goToNextCell
                        </button>
                    </li>

                    <li>

                        <button onClick={() => editor.chain().focus().goToPreviousCell().run()} disabled={!editor.can().goToPreviousCell()}>
                            goToPreviousCell
                        </button>
                    </li>

                </ul>
            </details>



        </div>
    );
};

export default Toolbar;
