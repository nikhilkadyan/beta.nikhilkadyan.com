import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPosts, getPostData } from '../../lib/posts'
import { getUserData } from '../../lib/users'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData, userData }) {
	return <Layout>
		<Head>
			<title>{postData.title}</title>
		</Head>
		<article>
			<h1 className={utilStyles.headingXl}>{postData.title}</h1>
			<div className={utilStyles.lightText}>
				By {userData.name}
			</div>
			<div>{postData.body}</div>
		</article>
	</Layout>
}

export async function getStaticPaths() {
	const paths = (await getAllPosts()).map((post) => {
		return {
			params: {
				id: post.id.toString()
			}
		}
	})
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id)
	const userData = await getUserData(postData.userId)

	return {
		props: {
			postData,
			userData
		}
	}
}