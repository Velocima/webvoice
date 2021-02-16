import styles from './nav.module.css';
import Link from 'next/link';

export default function Nav() {
	const pages = [
		{
			page: 'Home',
			path: '/',
		},
		{
			page: 'Contact',
			path: '/contact',
		},
		{
			page: 'Portfolio',
			path: '/portfolio',
		},
	];
	return (
		<nav className={styles.nav}>
			<section className={styles.logo}>
				<img src='/logo.png' alt='WebVoice Logo' />
				<h2>WebVoice</h2>
			</section>
			<ul className={styles.links}>
				{pages.map((page) => {
					return (
						<li>
							<Link href={page.path}>
								<a>{page.page}</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
