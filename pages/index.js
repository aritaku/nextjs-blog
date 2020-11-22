import Link from 'next/link'
import Head from 'next/head'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Freelance in digital Health<br/>
          ・Product Manager<br/>
          ・Bizdev<br/>
          ・Software Engineer<br/>
          ・Digital Marketing<br/>
        </p>
        <p>
          2016.10~2019.06 PREVENT CTO<br/>
          2019.07~2020.08 LINE Healthcare PdM<br/>
          2020.09~        Freelance<br/>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map((({ id, date, title }) => 
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
   const allPostsData = getSortedPostData()
   return {
     props: {
       allPostsData
     }
   }
}