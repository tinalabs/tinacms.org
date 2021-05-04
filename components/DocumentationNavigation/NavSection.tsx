import { useContext, useState, useMemo, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import { NavListContext } from './DocsNavigationList'
import RightArrowSvg from '../../public/svg/right-arrow.svg'
import { DynamicLink } from '../ui/DynamicLink'
import Link from 'next/link'
import * as Tina from '../../.tina/__generated__/types'

export interface NavSectionProps {
  id: string
  slug?: string
  href?: string
  title: string
  items: NavSectionProps[]
  collapsible?: boolean
  returnLink?: {
    url: string
    label: string
  }
}

export const NavSection = (
  section: { collapsible: boolean } & Tina.DocNav_Sections_Data
) => {
  switch (section.__typename) {
    case 'DocSection_Data':
      return <DocNavSection {...section} />

    case 'GuideSection_Data':
      return <div>{section.title}</div>
  }
}

const DocNavSection = (
  props: { collapsible: boolean } & Tina.DocSection_Data
) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <NavItem open={isOpen}>
      <NavItemHeader onClick={() => setIsOpen(!isOpen)}>
        <NavSectionTitle currentPage={true}>{props.title}</NavSectionTitle>
      </NavItemHeader>
      <SubNav>
        {props?.subItems?.map(item => {
          return <SubItem {...item} />
        })}
      </SubNav>
    </NavItem>
  )
}
const SubItem = (props: Tina.DocSection_SubItems_Data) => {
  const [isOpen, setIsOpen] = useState(false)
  const titleProps = props.subItems
    ? {
        onClick: () => setIsOpen(!isOpen),
        currentPage: false,
        as: 'span',
      }
    : {
        // onClick: () => setIsOpen(!isOpen),
        href: `/docs/${props?.value?.sys?.breadcrumbs.join('/')}`,
        currentPage: false,
        as: 'a',
      }
  return (
    <NavSectionListItem>
      <NavSectionTitle
        hasChildren={props?.subItems?.length > 0}
        {...titleProps}
      >
        {props.label}
      </NavSectionTitle>
      {props?.subItems &&
        isOpen &&
        props.subItems.map(subItem => {
          return (
            <NavSectionTitle currentPage={false} as="a">
              {subItem.label}
            </NavSectionTitle>
          )
        })}
    </NavSectionListItem>
  )
}
export const NavSection2 = (section: Tina.DocNav_Sections_Data) => {
  const router = useRouter()
  const currentPath = router.asPath
  // const isCurrentPage = useMemo(() => {
  //   if (section.slug && currentPath === section.slug) {
  //     return true
  //   }
  // }, [section.slug, currentPath])

  const collapsible = false
  const [expanded, setExpanded] = useState(true)

  // useEffect(() => {
  //   if (!collapsible) return
  //   setExpanded(menuIsActive(section, currentPath))
  // }, [currentPath, collapsible])

  const hasChildren = section.subItems && section.subItems.length > 0
  // const currentPage = isCurrentPage
  console.log('getsectin', section.subItems)

  return (
    <>
      <NavItem open={expanded}>
        <NavItemHeader onClick={() => collapsible && setExpanded(!expanded)}>
          <NavSectionTitle currentPage={true}>{section.title}</NavSectionTitle>
          {/* {(section.slug || section.href) && !hasChildren ? (
            <NavLink
              router={router}
              section={section}
              currentPage={currentPage}
            />
          ) : (
            <NavSectionTitle currentPage={currentPage}>
              {section.title}
            </NavSectionTitle>
          )} */}
          {hasChildren && collapsible && <RightArrowSvg />}
        </NavItemHeader>
        {hasChildren && (
          <SubNav>
            <NavSection
              key={`${section.id}-overview`}
              id={section.id}
              slug={section.slug}
              title="Overview"
              items={null}
            />
            {section.subItems.map(item => {
              return <NavSection key={`${section.id}-${item.id}`} {...item} />
            })}
          </SubNav>
        )}
      </NavItem>
      {section.returnLink && (
        <NavSection
          key={section.returnLink.url}
          id={section.returnLink.url}
          slug={section.returnLink.url}
          title={section.returnLink.label}
          items={null}
        />
      )}
    </>
  )
}

const NavLink = ({ section, currentPage, router }) => {
  const linkTitleRef = useRef<HTMLElement>(null)
  const sidebarNav = useContext(NavListContext)

  function scrollToCurrentLink() {
    if (!currentPage || !sidebarNav.current || !linkTitleRef.current) return

    const sidebarNavRect = sidebarNav.current.getBoundingClientRect()
    const linkTitleRect = linkTitleRef.current.getBoundingClientRect()

    const distanceFromTop = linkTitleRect.y - sidebarNavRect.y
    const sidebarNavHeight = sidebarNavRect.height

    if (distanceFromTop < sidebarNavHeight * 0.5) return

    return sidebarNav.current.scrollTo({
      top: distanceFromTop - 48,
      left: 0,
      behavior: 'auto',
    })
  }

  useEffect(scrollToCurrentLink, [linkTitleRef.current, sidebarNav.current])

  if (section.slug) {
    return (
      <DynamicLink href={section.slug} passHref>
        <NavSectionTitle as="a" currentPage={currentPage} ref={linkTitleRef}>
          {section.title}
        </NavSectionTitle>
      </DynamicLink>
    )
  } else {
    return (
      <Link href={section.href} passHref>
        <NavSectionTitle as="a" currentPage={currentPage}>
          {section.title}
        </NavSectionTitle>
      </Link>
    )
  }
}

const menuIsActive = (section: NavSectionProps, currentPath: string) => {
  if (section.slug && currentPath.includes(section.slug)) {
    return true
  }
  return (
    section.items &&
    section.items.reduce((isActive, subsection) => {
      if (subsection.slug && currentPath.includes(subsection.slug)) {
        return subsection.slug !== section.slug
      }
      return isActive
    }, false)
  )
}

const NavItemHeader = styled.div`
  position: relative;
`

interface NavSectionTitleProps {
  open?: boolean
  hasChildren?: boolean
  currentPage: boolean
  ref?: any
}

const NavSectionListItem = styled.li``

const NavSectionTitle = styled.span<NavSectionTitleProps>`
  display: block;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  color: var(--color-secondary);
  text-decoration: none;
  transition: all 180ms ease-out;
  font-family: var(--font-tuner);
  font-size: 1.125rem;
  position: relative;
  ${props =>
    props.hasChildren &&
    css`
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
      }
    `}

  ${props =>
    props.currentPage &&
    css`
      color: var(--color-primary);
      font-weight: bold;
    `};
`

const SubNav = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0;
  overflow: hidden;
  transition: all 180ms ease-out;

  ${NavSectionTitle} {
    font-size: 0.9375rem;
    padding: 0.25rem 1.5rem 0.25rem 2rem;
    font-family: var(--font-primary);
    cursor: pointer;

    &:hover,
    &:focus {
      color: var(--color-primary);
    }
  }

  li:first-child {
    ${NavSectionTitle} {
      padding-top: 0.75rem;
    }
  }

  li:last-child {
    padding-bottom: 0.75rem;
  }
`

interface NavItemProps {
  open: boolean
}

const NavItem = styled.li<NavItemProps>`
  position: relative;
  user-select: none;

  svg {
    display: none;
    position: absolute;
    right: 1.25rem;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    width: 1.25rem;
    height: auto;
    fill: var(--color-grey);
    transition: opacity 180ms ease-out, transform 180ms ease-out;
    opacity: 0.5;
  }

  ${SubNav} {
    max-height: 0;

    svg {
      display: inline-block;
    }

    ${SubNav} {
      padding-left: 0.5rem;

      li:first-child {
        ${NavSectionTitle} {
          padding-top: 0.375rem;
        }
      }

      li:last-child {
        padding-bottom: 0.375rem;
      }
    }
  }

  ${props =>
    props.open &&
    css`
      ${SubNav} {
        max-height: 40rem;
        transition: all 180ms ease-in;
      }

      svg {
        transform: translate3d(0, -50%, 0) rotate(90deg);
        opacity: 1;
      }
    `};
`
