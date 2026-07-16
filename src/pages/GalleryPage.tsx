import { useEffect, useMemo, useState } from 'react'

import { Button, Loader, Section, SectionTitle } from '../components'
import { useGalleryImages } from '../hooks/useEvents'
import { routePaths } from '../routes/routePaths'
import type { EventCategory, GalleryImageItem } from '../types/event'

const galleryFilters = [
  { key: 'all', label: 'All events' },
  { key: 'wedding', label: 'Wedding gallery' },
  { key: 'corporate', label: 'Corporate gallery' },
] as const

function getColumnClassName(index: number) {
  return index % 3 === 0 ? 'md:pt-0' : index % 3 === 1 ? 'md:pt-10' : 'md:pt-20'
}

export function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<EventCategory | 'all'>('all')
  const [activeImageId, setActiveImageId] = useState<string | null>(null)

  const galleryImagesQuery = useGalleryImages(activeFilter)
  const galleryImages = useMemo(() => galleryImagesQuery.data ?? [], [galleryImagesQuery.data])

  const activeImageIndex = galleryImages.findIndex((image) => image.id === activeImageId)
  const activeImage = activeImageIndex >= 0 ? galleryImages[activeImageIndex] : null

  const galleryColumns = useMemo(() => {
    return galleryImages.reduce<GalleryImageItem[][]>(
      (columns, image, index) => {
        columns[index % 3].push(image)
        return columns
      },
      [[], [], []],
    )
  }, [galleryImages])

  useEffect(() => {
    if (!activeImageId) {
      return
    }

    function onKeyDown(event: KeyboardEvent) {
      if (!galleryImages.length) {
        return
      }

      if (event.key === 'Escape') {
        setActiveImageId(null)
      }

      if (event.key === 'ArrowRight' && activeImageIndex >= 0) {
        const nextIndex = (activeImageIndex + 1) % galleryImages.length
        setActiveImageId(galleryImages[nextIndex].id)
      }

      if (event.key === 'ArrowLeft' && activeImageIndex >= 0) {
        const previousIndex = (activeImageIndex - 1 + galleryImages.length) % galleryImages.length
        setActiveImageId(galleryImages[previousIndex].id)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeImageId, activeImageIndex, galleryImages])

  useEffect(() => {
    setActiveImageId(null)
  }, [activeFilter])

  function openImage(imageId: string) {
    setActiveImageId(imageId)
  }

  function showPreviousImage() {
    if (!galleryImages.length || activeImageIndex < 0) {
      return
    }

    const previousIndex = (activeImageIndex - 1 + galleryImages.length) % galleryImages.length
    setActiveImageId(galleryImages[previousIndex].id)
  }

  function showNextImage() {
    if (!galleryImages.length || activeImageIndex < 0) {
      return
    }

    const nextIndex = (activeImageIndex + 1) % galleryImages.length
    setActiveImageId(galleryImages[nextIndex].id)
  }

  return (
    <>
      <Section className="relative overflow-hidden pt-10 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-start">
          <div className="space-y-8">
            <span className="eyebrow-label">Event Gallery · Delhi NCR</span>
            <div className="space-y-6">
              <h1 className="display-title max-w-5xl text-brand-text-primary">
                A visual library of premium weddings and corporate events.
              </h1>
              <p className="body-large max-w-2xl">
                Explore Event Karde’s wedding and corporate event portfolio through a gallery designed for inspiration, credibility, and smooth browsing across devices.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {galleryFilters.map((filter) => {
                const isActive = filter.key === activeFilter

                return (
                  <Button
                    key={filter.key}
                    className={isActive ? 'border-brand-border-strong bg-white/10 text-brand-text-primary shadow-[var(--shadow-glow)]' : ''}
                    onClick={() => setActiveFilter(filter.key)}
                    size="sm"
                    type="button"
                    variant="secondary"
                  >
                    {filter.label}
                  </Button>
                )
              })}
            </div>
          </div>

          <div className="glass-panel-strong rounded-[var(--radius-shell)] p-6 md:p-8">
            <div className="space-y-4">
              <p className="text-xs tracking-[0.28em] text-brand-accent uppercase">Gallery experience</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="editorial-card rounded-[1.25rem] p-4">
                  <p className="text-lg font-semibold text-brand-text-primary">Pinterest-inspired flow</p>
                  <p className="mt-2 text-sm leading-7 text-brand-text-secondary">
                    The layout uses staggered columns to keep the gallery feeling immersive instead of flat.
                  </p>
                </div>
                <div className="editorial-card rounded-[1.25rem] p-4">
                  <p className="text-lg font-semibold text-brand-text-primary">Fast visual filtering</p>
                  <p className="mt-2 text-sm leading-7 text-brand-text-secondary">
                    Visitors can move quickly between wedding and corporate work without losing the immersive browsing rhythm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Visual Portfolio"
          title="Filter, browse, and inspect standout event moments"
          description="This gallery is structured to support future SEO-rich case studies, event detail pages, and higher-quality hosted media without changing the browsing UI."
          actions={<Button to={routePaths.contact}>Book Consultation</Button>}
        />

        {galleryImagesQuery.isLoading ? <Loader /> : null}

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {galleryColumns.map((column, columnIndex) => (
            <div key={`column-${columnIndex}`} className={`space-y-6 ${getColumnClassName(columnIndex)}`}>
              {column.map((image, imageIndex) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => openImage(image.id)}
                  className="group editorial-card block w-full overflow-hidden rounded-[1.5rem] text-left transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                >
                  <div className={`relative overflow-hidden ${imageIndex % 2 === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
                    <div className="absolute inset-0 bg-linear-to-br from-brand-background-muted via-brand-background to-brand-background" />
                    <img
                      alt={image.alt}
                      className="relative h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-95"
                      loading="lazy"
                      src={image.image}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_5%,rgba(12,10,9,0.2)_50%,rgba(12,10,9,0.92)_100%)]" />

                    <div className="absolute inset-x-0 bottom-0 space-y-3 p-5">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="rounded-full border border-brand-border-strong bg-brand-background/70 px-3 py-1 text-[0.68rem] tracking-[0.22em] text-brand-accent uppercase">
                          {image.category}
                        </span>
                        <span className="rounded-full border border-brand-border bg-brand-background/60 px-3 py-1 text-xs text-brand-text-muted">
                          {image.city}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-brand-text-primary">{image.eventTitle}</h3>
                        <p className="mt-1 text-sm text-brand-text-secondary">
                          {image.featured ? 'Featured event moment' : 'Portfolio highlight'}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ))}
        </div>
      </Section>

      {activeImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={`${activeImage.eventTitle} image preview`}>
          <div className="glass-panel-strong relative w-full max-w-5xl overflow-hidden rounded-[2rem] p-4 md:p-6">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.26em] text-brand-accent uppercase">{activeImage.category} gallery</p>
                <h2 className="mt-2 text-2xl font-semibold text-brand-text-primary">{activeImage.eventTitle}</h2>
                <p className="mt-2 text-sm leading-7 text-brand-text-secondary">{activeImage.city}</p>
              </div>

              <Button onClick={() => setActiveImageId(null)} size="sm" type="button" variant="secondary">
                Close
              </Button>
            </div>

            <div className="relative overflow-hidden rounded-[1.5rem] border border-brand-border bg-linear-to-br from-brand-background-muted via-brand-background to-brand-background">
              <img
                alt={activeImage.alt}
                className="h-full max-h-[70vh] w-full object-cover"
                src={activeImage.image}
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-3">
                <Button onClick={showPreviousImage} type="button" variant="secondary">
                  Previous
                </Button>
                <Button onClick={showNextImage} type="button" variant="secondary">
                  Next
                </Button>
              </div>

              <Button to={routePaths.contact}>Enquire about similar events</Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
