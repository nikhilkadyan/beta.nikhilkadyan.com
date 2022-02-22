import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getAllPosts } from '../lib/posts'

export async function getStaticProps() {
	const allPostsData = await getAllPosts()
	return {
		props: {
			allPostsData
		}
	}
}
export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Hello, I'm Nikhil. I'm a software engineer (backend dev) and blockchain enthusiast. You can contact me on <a href='https://www.twitter.com/kadyanikhil' target='_blank'>Twitter</a>.</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>

			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, title }) => (
						<li className={utilStyles.listItem} key={id}>
						<Link href={`/posts/${id}`}>
						  <a>{title}</a>
						</Link>
					  </li>
					))}
				</ul>
			</section>
		</Layout>
	)
}