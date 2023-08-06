import { HomeButton, HomePrimaryButton } from '../components/HomeButton'
import { Link, makeStyles } from '@fluentui/react-components';
import { Alert } from '@fluentui/react-components/unstable';
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
                <h1>I'm <span className={styles.name}>Tianli</span>.</h1>
                <p>Student / Back-end Developer / Blogger</p>
            </div>
            <div className={styles.wrapper}>
                <HomePrimaryButton link='https://tianli-blog.club/'>
                    Blog
                </HomePrimaryButton>
                <HomeButton link='https://github.com/TIANLI0'>
                    GitHub
                </HomeButton>
            </div>
            <footer className={styles.footer}>
                <span>
                    © 2021 - {new Date().getFullYear()} Tianli. All rights reserved.
                    <Link href='https://beian.miit.gov.cn/' className={styles.footer_link}>蜀ICP备2021004404号-1</Link>
                </span>
            </footer>
        </div>
    )
}
