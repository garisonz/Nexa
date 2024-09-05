"use client";

import { api } from "@/convex/_generated/api";
import { useQuery, useMutation } from "convex/react";
import { useParams, useRouter } from "next/navigation";

export const Trashbox = () => {
    const router = useRouter();
    const params = useParams();
    const documents = useQuery(api.documents.getTrash);
    const restore = useMutation(api.documents.restore);
    const remove = useMutation(api.documents.remove);
    return (
        <div>trashbox</div>
    )
}