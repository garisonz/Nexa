"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Toolbar } from "@/app/(main)/_components/toolbar";
import { Editor } from "@/app/(main)/_components/editor";


interface DocumentIdPageProps {
    params: {
        documentId: Id<"documents">;
    };
};


const DocumentIdPage = ({
    params
}: DocumentIdPageProps) => {
    const document = useQuery(api.documents.getById, {
        documentId: params.documentId
    });

    const update = useMutation(api.documents.update);

const onChange = (content: string) => {
    update({
        id: params.documentId,
        content
    });
};

    if (document === undefined) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    if (document === null) {
        return <div>Not found</div>
    }
    return (
        <div className="pb-20">
            <div className="h-[10vh]"/>
            <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
                <Toolbar initialData={document} />
                <Editor 
                    onChange={onChange}
                    initialContent={document.content}
                />
            </div>
        </div>
    );
}

export default DocumentIdPage