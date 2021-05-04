import styled from 'styled-components'
import { NextSeo } from 'next-seo'
import { GetStaticProps, GetStaticPaths } from 'next'
import { CloseIcon, EditIcon } from '@tinacms/icons'
import { formatDate } from '../../utils'
import { useGraphqlForms } from 'tina-graphql-gateway'
import {
  Layout,
  Hero,
  Wrapper,
  MarkdownContent,
  DocsTextWrapper,
} from 'components/layout'
import Error from 'next/error'
import { Button } from 'components/ui/Button'
import { useCMS } from 'tinacms'
import { LastEdited, DocsPagination } from 'components/ui'
import { openGraphImage } from 'utils/open-graph-image'

function BlogTemplate({ data, variables }) {
  if (!data) {
    return <Error statusCode={404} />
  }
  const [payload, isLoading] = useGraphqlForms<{
    getBlogDocument: { data: unknown }
  }>({
    query: gql => gql(queryString),
    formify: ({ formConfig, createForm, skip }) => {
      if (formConfig.id === 'getBlogDocument') {
        // you can skip setting this up in the sidebar if you'd like
        formConfig.fields.map(field => {
          if (field.name === '_body') {
            field.component = 'markdown'
          }
          return field
        })
      }

      return createForm(formConfig)
    },
    variables: variables,
  })
  if (isLoading) {
    return <div>Loading...</div>
  }
  const post = isLoading
    ? data.getBlogDocument.data
    : payload.getBlogDocument.data

  return (
    <Layout>
      <NextSeo
        title={post.title}
        titleTemplate={'%s | ' + 'TinaCMS Blog'}
        description={post._body.substring(0, 150)}
        openGraph={{
          title: post.title,
          description: post._body.substring(0, 150),
          images: [openGraphImage(post.title, ' | TinaCMS Blog', post.author)],
        }}
      />
      <Hero>
        <span>{post.title}</span>
      </Hero>
      <BlogWrapper>
        <DocsTextWrapper>
          <BlogMeta>
            <MetaWrap>
              <MetaBit>{formatDate(post.date)}</MetaBit>
              <MetaBit>
                <span>By</span> {post.author}
              </MetaBit>
            </MetaWrap>
            <EditLink />
          </BlogMeta>
          <MarkdownContent escapeHtml={false} content={post._body} />
          <LastEdited date={post.last_edited} />
          {(post.prev?.id !== null || post.next?.id !== null) && (
            <DocsPagination prevPage={post.prev} nextPage={post.next} />
          )}
        </DocsTextWrapper>
      </BlogWrapper>
    </Layout>
  )
}

export default BlogTemplate

const queryString = `#graphql
query BlogPostQuery($relativePath: String!) {
 getBlogDocument(relativePath: $relativePath) {
   id
   data {
     ... on Basic_Doc_Data {
       date
       title
       last_edited
       draft
       prev {
         id
         sys {
           filename
         }
         data {
           __typename
           ...on Basic_Doc_Data {
             title
           }
         }
       }
       next {
         id
         sys {
           filename
         }
         data {
           __typename
           ...on Basic_Doc_Data {
             title
           }
         }
       }
       _body
       author
     }
   }
 }
}
`

/*
 ** DATA FETCHING --------------------------------------------------
 */

export const getStaticProps: GetStaticProps = async function({
  preview,
  previewData,
  ...ctx
}) {
  const { slug } = ctx.params
  const response = await fetch('http://localhost:4001/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: queryString,
      variables: { relativePath: `${slug}.md` },
    }),
  })
  const { data } = await response.json()

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
      variables: {
        relativePath: `${slug}.md`,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async function() {
  const response = await fetch('http://localhost:4001/graphql', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `#graphql
       query getBlogList {
          getBlogList {
            id
            sys {
              filename
            }
        }
      }
      `,
      variables: {},
    }),
  })
  const { data } = await response.json()
  return {
    paths: data.getBlogList.map(blogItem => {
      return { params: { slug: blogItem.sys.filename } }
    }),
    fallback: true,
  }
}

/*
 ** STYLES ---------------------------------------------------------
 */

//  @ts-ignore
const BlogWrapper = styled(Wrapper)`
  padding-top: 4rem;
  padding-bottom: 3rem;
  max-width: 768px;
`

const BlogMeta = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;
  margin-top: -0.5rem;

  @media (min-width: 550px) {
    flex-direction: row;
  }
`

const MetaWrap = styled.span`
  opacity: 0.4;
`

const MetaBit = styled.p`
  display: flex;
  margin: 0 !important;

  span {
    opacity: 0.5;
    margin-right: 0.25rem;
  }
`

/*
 ** Edit Button ------------------------------------------------------
 */

const EditLink = () => {
  const cms = useCMS()

  return (
    <EditButton id="OpenAuthoringBlogEditButton" onClick={cms.toggle}>
      {cms.enabled ? <CloseIcon /> : <EditIcon />}
      {cms.enabled ? 'Exit Edit Mode' : 'Edit This Post'}
    </EditButton>
  )
}

const EditButton = styled(Button)`
  background: none;
  display: flex;
  align-items: center;
  border: 1px solid var(--color-primary);
  padding: 0 1.25rem;
  height: 45px;
  color: var(--color-primary);
  transition: all 150ms ease-out;
  transform: translate3d(0px, 0px, 0px);

  svg {
    fill: currentColor;
    margin: 0 4px 0 -4px;
  }
`
