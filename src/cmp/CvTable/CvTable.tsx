import { Content } from '@prismicio/client'
import CvEntry from '../CvEntry'

export default function CvTable({ primary, items }: Content.CvTableSlice) {
  console.log(items)
  return (
    <section className="my-9">
      <h2 className="text-2xl mb-2">{primary.title}</h2>
      <ul className="mb-5 grid gap-5">
        {items.map((item, key) => (
          <li className="pl-2" key={key}>
            <CvEntry {...item} />
          </li>
        ))}
      </ul>
    </section>
  )
}
