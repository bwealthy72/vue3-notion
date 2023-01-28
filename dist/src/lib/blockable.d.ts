import { PropType } from "vue";
import { NotionBlockProps, BlockMap } from "./types";
export declare const defineNotionProps: {
    blockMap: {
        type: PropType<BlockMap>;
        required: boolean;
    };
    contentId: {
        type: StringConstructor;
        required: boolean;
    };
    contentIndex: {
        type: NumberConstructor;
        default: number;
    };
    embedAllow: {
        type: StringConstructor;
        default: string;
    };
    fullPage: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    level: {
        type: NumberConstructor;
        default: number;
    };
    mapImageUrl: {
        type: FunctionConstructor;
        default: (image: string | undefined, block: import("./types").Block) => string;
    };
    mapPageUrl: {
        type: FunctionConstructor;
        default: (pageId?: string) => string;
    };
    pageLinkOptions: ObjectConstructor;
    pageLinkTarget: {
        type: StringConstructor;
        default: string;
    };
    prism: {
        type: BooleanConstructor;
        default: boolean;
    };
    katex: {
        type: BooleanConstructor;
        default: boolean;
    };
    textLinkTarget: {
        type: StringConstructor;
        default: string;
    };
};
export declare const useNotionBlock: (props: Readonly<NotionBlockProps>) => {
    props: Readonly<NotionBlockProps>;
    block: import("vue").ComputedRef<import("./types").Block>;
    pass: import("vue").ComputedRef<{
        blockMap: BlockMap;
        contentId: string | undefined;
        contentIndex: number;
        embedAllow: string;
        fullPage: boolean;
        hideList: string[] | undefined;
        level: number;
        mapImageUrl: Function;
        mapPageUrl: Function;
        pageLinkOptions: import("./types").PageLinkOptions | undefined;
        prism: boolean;
        katex: boolean;
    }>;
    f: import("vue").ComputedRef<{
        block_aspect_ratio: any;
        block_height: any;
        block_width: any;
        block_color: any;
        bookmark_icon: any;
        bookmark_cover: any;
        display_source: any;
    }>;
    format: import("vue").ComputedRef<import("./types").Format>;
    properties: import("vue").ComputedRef<import("./types").Properties>;
    icon: import("vue").ComputedRef<string | undefined>;
    width: import("vue").ComputedRef<any>;
    title: import("vue").ComputedRef<string[]>;
    caption: import("vue").ComputedRef<string[] | undefined>;
    description: import("vue").ComputedRef<string[] | undefined>;
    type: import("vue").ComputedRef<string>;
    visible: import("vue").ComputedRef<boolean>;
    hasPageLinkOptions: import("vue").ComputedRef<any>;
    parent: import("vue").ComputedRef<import("./types").Block>;
    isType: (t: string | string[]) => boolean;
    blockColorClass: (suffix?: string) => string | undefined;
    pageLinkProps: (id: string) => {
        [x: string]: any;
    };
};
