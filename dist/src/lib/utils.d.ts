import { Block, BlockMap } from "./types";
export declare const getTextContent: (text: string[]) => string;
export declare const getListNumber: (blockId: string, blockMap: BlockMap) => any;
export declare const defaultMapImageUrl: (image: string | undefined, block: Block) => string;
export declare const defaultMapPageUrl: (pageId?: string) => string;
