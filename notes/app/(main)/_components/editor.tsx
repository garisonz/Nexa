"use client";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";


interface EditorProps {
    onChange: (value: string) => void;
    initialContent?: string;
    editable?: boolean;
}

export const Editor = ({
    onChange,
    initialContent,
    editable = true
}: EditorProps) => {
    const editor: BlockNoteEditor = useCreateBlockNote({
        initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock[] : undefined,
    });

    const handleChange = () => {
        onChange(JSON.stringify(editor.document, null, 2));
    };

    return (
        <div className="[&_.bn-editor]:px-0">
            <BlockNoteView 
                editor={editor} 
                editable={editable}
                onChange={handleChange}
                
            />
        </div>
    );
}