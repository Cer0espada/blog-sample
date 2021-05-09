import React,{useCallback, useEffect, useMemo, useState} from 'react';
import {Slate, Editable, withReact, ReactEditor} from 'slate-react';
import {BaseEditor, createEditor, Node, Descendant, Element} from 'slate';
import {HistoryEditor, withHistory} from 'slate-history'

//redux
import {useSelector} from 'react-redux';

import SlateToolBar from './SlateToolbar';

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
    // const renderElement = useCallback(props => <Element {...props} />, [])
    // const renderLeaf = useCallback(props => <Leaf {...props} />, [])
    const renderElement = useCallback(({ attributes, children, element }) => {
        switch (element.type) {
            case 'heading':
                return <h1 {...attributes}>{children}</h1>
            case 'bold':
                return <strong {...attributes}>{children}</strong>
            case 'italics':
                return <em {...attributes}> {children}</em>
            case 'quote':
                return <blockquote {...attributes}>{children}</blockquote>
            case 'link':
                return (
                    <a {...attributes} href={element.url}>
                        {children}
                    </a>
                )
            default:
                return <p {...attributes}>{children}</p>
        }
    }, [])

    return(
        <div className="slate-editor-page">
            <div className="slate-editor-page-container">
                <SlateToolBar />
                <Slate
                editor={editor}
                value={value}
            
                onChange={newValue => setValue(newValue)}

                >
                 
                    <Editable
                      renderElement={renderElement}
                    />
                </Slate>
            </div>
        </div>
      
    )
}

export default EditorSlate