import styles from './nav.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Nav() {
	const { pathname } = useRouter();
	const [navHovered, setNavHovered] = useState(pathname);

	const pages = [
		{
			page: 'Home',
			path: '/',
		},
		{
			page: 'Portfolio',
			path: '/portfolio',
		},
		{
			page: 'Contact',
			path: '/contact',
		},
	];

	const handleMouseEnter = (path) => {
		setNavHovered(path);
		console.log(path, navHovered);
	};
	const handleMouseLeave = () => {
		setNavHovered(pathname);
	};
	return (
		<nav className={styles.nav}>
			<section className={styles.logo}>
				<img src='/logo.png' alt='WebVoice Logo' />
				<h2>WebVoice</h2>
			</section>
			<ul className={styles.links}>
				{pages.map(({ page, path }) => {
					return (
						<li
							key={path}
							onMouseEnter={() => {
								handleMouseEnter(path);
							}}
							onMouseLeave={handleMouseLeave}
						>
							<Link href={path}>
								<a>{page}</a>
							</Link>
							<div
								style={{
									transform:
										pathname === path
											? 'translateX(0)'
											: navHovered === path
											? 'translateX(0)'
											: 'translateX(-110%)',
								}}
							></div>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
