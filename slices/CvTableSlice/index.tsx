import React from 'react'
import { CvTableSlice as CvTableSliceProps } from '.slicemachine/prismicio'
import { CvTable } from '@/cmp'

/**
 * @typedef {import("@prismicio/client").Content.CvTableSlice} CvTableSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CvTableSlice>} CvTableProps
 * @param { CvTableProps }
 */
const CvTableSlice = ({ slice }: { slice: CvTableSliceProps }) => (
  <CvTable {...slice} />
)

export default CvTableSlice
