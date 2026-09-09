import { createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '../../../components/PageHeader'
import { Prose } from '../../../components/Prose'
import { ExternalLink } from '../../../components/ExternalLink'
import { ButtonAnchor } from '../../../components/Button'
import { contact } from '../../../data/contact'

export const Route = createFileRoute('/_public/about/merch')({
  component: MerchPage,
})

function MerchPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Merchandise"
        lead="Ultimate is played with a 175 g disc. Here is where to get one. Stock levels vary through the year."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <article className="overflow-hidden rounded-lg border border-gray-200">
          <img
            src="/merch/cape-town-disc.jpg"
            alt="Cape Town Ultimate Frisbee disc"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="p-5">
            <h2 className="text-brand text-lg font-bold">Cape Town Ultimate disc</h2>
            <dl className="mt-3 grid grid-cols-2 gap-y-1 text-gray-700">
              <dt>Competitive member</dt>
              <dd className="font-semibold">R275</dd>
              <dt>Non-member</dt>
              <dd className="font-semibold">R300</dd>
            </dl>
            <p className="mt-3 text-sm text-gray-500">
              Please arrange collection. Delivery not included.
            </p>
            <div className="mt-4">
              <ButtonAnchor href={contact.forms.merchOrder}>Order form</ButtonAnchor>
            </div>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg border border-gray-200">
          <img
            src="/merch/ghost-disc.jpg"
            alt="Ghost Ultimate disc"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="p-5">
            <h2 className="text-brand text-lg font-bold">Ghost Ultimate disc</h2>
            <dl className="mt-3 grid grid-cols-2 gap-y-1 text-gray-700">
              <dt>Price</dt>
              <dd className="font-semibold">R275</dd>
            </dl>
            <p className="mt-3 text-sm text-gray-500">
              Please arrange collection. Delivery fee not included.
            </p>
            <p className="mt-4">
              <a
                href="mailto:ghostultimateclub@gmail.com"
                className="text-brand-blue-dark font-medium hover:underline"
              >
                ghostultimateclub@gmail.com
              </a>
            </p>
          </div>
        </article>
      </div>
      <Prose>
        <h2>Custom designs and international suppliers</h2>
        <ul>
          <li>
            <ExternalLink href={contact.external.discraft}>Discraft</ExternalLink>, US online store
          </li>
          <li>
            <ExternalLink href={contact.external.eurodisc}>Eurodisc</ExternalLink>, UK online store
          </li>
        </ul>
      </Prose>
    </>
  )
}
