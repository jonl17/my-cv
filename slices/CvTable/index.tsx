import React from 'react'
import { CvTableSlice } from '@prismic-types'
import { CvTable } from '@/cmp'

/**
 * @typedef {import("@prismicio/client").Content.CvTableSlice} CvTableSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CvTableSlice>} CvTableProps
 * @param { CvTableProps }
 */
const CvTableSlice = ({ slice }: { slice: CvTableSlice }) => (
  <CvTable {...slice} />
)

export default CvTableSlice
