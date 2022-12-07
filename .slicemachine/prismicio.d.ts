// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for cv entry documents */
type CvEntryDocumentData = Record<string, never>;
/**
 * cv entry document from Prismic
 *
 * - **API ID**: `cv_entry`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CvEntryDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<CvEntryDocumentData>, "cv_entry", Lang>;
/** Content for homepage documents */
interface HomepageDocumentData {
    /**
     * Slice Zone field in *homepage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomepageDocumentDataSlicesSlice>;
}
/**
 * Slice for *homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice = CvTableSlice;
/**
 * homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
export type AllDocumentTypes = CvEntryDocument | HomepageDocument;
/**
 * Primary content in CvTableSlice → Primary
 *
 */
interface CvTableSliceDefaultPrimary {
    /**
     * title field in *CvTableSlice → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cv_table.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
}
/**
 * Item in CvTableSlice → Items
 *
 */
export interface CvTableSliceDefaultItem {
    /**
     * entry name field in *CvTableSlice → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cv_table.items[].entry_name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    entry_name: prismicT.KeyTextField;
    /**
     * period field in *CvTableSlice → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cv_table.items[].period
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    period: prismicT.KeyTextField;
    /**
     * description field in *CvTableSlice → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cv_table.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * link url field in *CvTableSlice → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: cv_table.items[].link_url
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link_url: prismicT.LinkField;
    /**
     * link label field in *CvTableSlice → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cv_table.items[].link_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    link_label: prismicT.KeyTextField;
    /**
     * secondary link url field in *CvTableSlice → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: cv_table.items[].secondary_link_url
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    secondary_link_url: prismicT.LinkField;
    /**
     * secondary link label field in *CvTableSlice → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: cv_table.items[].secondary_link_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    secondary_link_label: prismicT.KeyTextField;
}
/**
 * Default variation for CvTableSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `CvTable`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CvTableSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<CvTableSliceDefaultPrimary>, Simplify<CvTableSliceDefaultItem>>;
/**
 * Slice variation for *CvTableSlice*
 *
 */
type CvTableSliceVariation = CvTableSliceDefault;
/**
 * CvTableSlice Shared Slice
 *
 * - **API ID**: `cv_table`
 * - **Description**: `CvTable`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CvTableSlice = prismicT.SharedSlice<"cv_table", CvTableSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { CvEntryDocumentData, CvEntryDocument, HomepageDocumentData, HomepageDocumentDataSlicesSlice, HomepageDocument, AllDocumentTypes, CvTableSliceDefaultPrimary, CvTableSliceDefaultItem, CvTableSliceDefault, CvTableSliceVariation, CvTableSlice };
    }
}