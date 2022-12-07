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
  github_repo,
}: Content.CvTableSliceDefaultItem) {
  return (
    <div>
      <h3 className="text-lg">{`${entry_name} (${period})`}</h3>
      <p>{description}</p>
      <div className="inline-grid">
        <a
          className="text-blue-600 underline underline-offset-2 inline-block hover:text-blue-900 transition-all"
          href={asLink(link_url) as string}
          target="_blank"
          rel="noreferrer"
        >
          {link_label}
        </a>
        {secondary_link_url && (
          <a
            className="text-blue-600 underline underline-offset-2 inline-block hover:text-blue-900 transition-all"
            href={asLink(secondary_link_url) as string}
            target="_blank"
            rel="noreferrer"
          >
            {secondary_link_label}
          </a>
        )}
        {github_repo.link_type !== 'Any' && (
          <a
            className="text-blue-600 underline underline-offset-2 inline-block hover:text-blue-900 transition-all"
            href={asLink(github_repo) as string}
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        )}
      </div>
    </div>
  )
}
