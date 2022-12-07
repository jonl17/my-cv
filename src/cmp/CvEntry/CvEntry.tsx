import { Content } from '@prismicio/client'
import { asLink } from '@prismicio/helpers'
import Link from 'next/link'

export default function CvEntry({
  entry_name,
  description,
  period,
  link_url,
  link_label,
  secondary_link_label,
  secondary_link_url,
}: Content.CvTableSliceDefaultItem) {
  return (
    <div className="grid">
      <h3 className="text-lg">{`${entry_name} (${period})`}</h3>
      <p>{description}</p>
      <a
        className="text-blue-600 underline underline-offset-2 hover:text-blue-900 transition-all"
        href={asLink(link_url) as string}
        target="_blank"
        rel="noreferrer"
      >
        {link_label}
      </a>
      {secondary_link_url && (
        <a
          className="text-blue-600 underline underline-offset-2 hover:text-blue-900 transition-all"
          href={asLink(secondary_link_url) as string}
          target="_blank"
          rel="noreferrer"
        >
          {secondary_link_label}
        </a>
      )}
    </div>
  )
}
