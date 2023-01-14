import { HomeButton, HomePrimaryButton } from '../components/HomeButton'
import { Link, makeStyles } from '@fluentui/react-components';
import '../styles/index.css'

const useStyles = makeStyles({
    // indexRoot: {
    //     maxWidth: '1280px',
    //     marginTop: 0,
    //     marginInline: 'auto',
    //     paddingBlock: '2rem',
    //     textAlign: 'center'
    // },
    title: {
        fontSize: '1.25rem',
    },
    name: {
        color: '#316ab7'
    },
    wrapper: {
      columnGap: '15px',
      display: 'flex'
    },
    footer: {
        marginTop: '15px'
    },
    footer_link: {
        marginLeft: '5px'
    }
});

export default function Home() {
    const styles = useStyles()
    return (
        <div>
            <div className={styles.title}>
                <h1>Hello,</h1>
                <h1>I'm <span className={styles.name}>Redish101</span>.</h1>
                <p>Front-end Developer / Back-end Developer / Blogger</p>
            </div>
            <div className={styles.wrapper}>
                <HomePrimaryButton link='https://blog.redish101.top'>
                    Blog
                </HomePrimaryButton>
                <HomeButton link='https://github.com/Redish101'>
                    GitHub
                </HomeButton>
            </div>
            <footer className={styles.footer}>
                <span>
                    © 2023 - {new Date().getFullYear()} Redish101. All rights reserved.
                    <Link href='/#/privacy-policy' className={styles.footer_link}>Privacy Policy</Link>
                </span>
            </footer>
        </div>
    )
}