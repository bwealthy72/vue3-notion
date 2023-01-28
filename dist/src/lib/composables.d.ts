import { BlockMap } from "./types";
declare const useGetPageBlocks: (pageId: string, apiUrl?: string | undefined) => {
    data: import("vue").Ref<BlockMap | undefined>;
};
declare const useGetPageTable: (pageId: string, apiUrl?: string | undefined) => {
    data: import("vue").Ref<BlockMap | undefined>;
};
export { useGetPageBlocks, useGetPageTable };
