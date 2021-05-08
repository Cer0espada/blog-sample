import React,{useEffect, useMemo, useState} from 'react';
import {Slate, Editable, withReact, ReactEditor} from 'slate-react';
import {BaseEditor, createEditor, Node, Descendant} from 'slate';
import {HistoryEditor} from 'slate-history'

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor

export type ParagraphElement = {
    type: 'paragraph'
    children: CustomText[]
}

export type HeadingElement = {
    type: 'heading'
    level: number
    children: CustomText[]
}

export type CustomElement = ParagraphElement | HeadingElement

export type FormattedText = { text: string; bold?: boolean; italic?: boolean }

export type CustomText = FormattedText;

declare module 'slate' {
    interface CustomTypes {
        Editor: CustomEditor
        Element: CustomElement
        Text: CustomText
    }
}


const EditorSlate:React.FC = () => {
    const editor = useMemo(() => withReact(createEditor()),[])

    const [value, setValue] = useState<Descendant[]>([
        {
            type:'paragraph',
            children: [{text: 'A line of text in a paragraph. ', }]
        },
    ]);

    return(
        <div className="slate-editor-page">
            <div className="slate-editor-page-container">
                <Slate
                editor={editor}
                value={value}
                onChange={newValue => setValue(newValue)}
                >
                    <Editable/>
                </Slate>
            </div>
        </div>
      
    )
}

export default EditorSlate